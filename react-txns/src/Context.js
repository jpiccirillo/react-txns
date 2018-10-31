import React, { Component } from 'react';

const NUMDAYS = 15;
const WINDOW = 30;
const CAPITAL = 3000;
var dateOptions = { year: '2-digit', month: 'numeric', day: 'numeric' };

function range(min,max) {
    return (Math.random()*(max-min+1)+min).toFixed(2);
}

function makeTransaction(type, date) {
     var vendor = type.vendors[Math.floor(range(0, type.vendors.length-1))];

     return {
         type: type.type,
         date: new Date(date).toLocaleDateString("en-US", {month: 'short', day: 'numeric'}),
         amount: String(range(type.min, type.max)),
         vendor: vendor,
         title: type.title
     };
}

function getFirstDates(num) {
    var dates = [];
	var today = new Date()

    for(var i = 0; i < num; i++) {
        dates.push(new Date(today.setDate(today.getDate() + 1)).toLocaleDateString("en-US", dateOptions));
    }
    return dates;
}

function getNextDate(arr) {
	var last = new Date(arr[arr.length-1])
	// console.log(last);
	return new Date(last.setDate(last.getDate() + 1)).toLocaleDateString("en-US", dateOptions)
}

export class Context extends Component {
    constructor() {
        super()
        this.state = {
            ledger: [],
            history: {
                labels: getFirstDates(WINDOW),
                datasets: [ this.initNetWorth() ]
            },
            active: ["0"],
            data: {
                labels: getFirstDates(WINDOW),
                datasets: []
            },
        };
    }

    componentDidMount() {
      var that = this;
      var x = 0;
      this.timer = setInterval(function() {
          if (++x === NUMDAYS) {
                window.clearInterval(that.timer);
            }
          return that.increment(that.state)
      }, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.timer)
    }

    incrementLabels(l, date) {
        var labelsNew = l;
        labelsNew.push(date)
        labelsNew.shift()
        return labelsNew;
    }

    makeNewArray(firstVals, endVal) {
        var newArray = [];
        for(var i = 0; i < WINDOW; i++) { newArray.push(firstVals); }
        newArray.push(endVal)
        return newArray;
    }
    initNetWorth() {
        return {
            label: 'Net Worth',
            data: this.makeNewArray(CAPITAL, CAPITAL),
            borderColor: 'gainsboro',
            backgroundColor: 'rgba(0, 0, 0, 0)',
        }
    }
    processNetWorth(s, txn) {
        //s is state, txn is transaction
        const hc = s.history.datasets.slice(0); //historyCopy
        const hcData = hc[0].data.slice(0);
        var last = hcData[hcData.length-1]
        var toPush = 0;
        if (txn.type == "debit") toPush = last-(+txn.amount)
        else if (txn.type=="neither") toPush = last
        else toPush = last+(+txn.amount)
        hcData.push(toPush.toFixed(2))
        // hcData[hcData.length-1] = hcData[hcData.length-1].toFixed(2)
        hcData.shift()
        hc[0].data = hcData
        return hc;
    }
    increment() {
        var colors = this.returnColors()
        var s = this.state;
        var a = this.state.active;
        var newDate = getNextDate(s.data.labels);

        const labelsNew = this.incrementLabels(s.data.labels, newDate)
        const newData = this.decide(this.returnCats(), newDate);
        const ledgerCopy = s.ledger.slice(0);
        ledgerCopy.push(newData);

        const datasetsCopy = s.data.datasets.slice(0);

        if (!a.includes(newData.title)) {
            a.push(newData.title)

            // increment all other categories w 0 spent
            datasetsCopy.forEach(function(val, i) {
                var dataCopy = datasetsCopy[i].data.slice(0);
                // console.log(dataCopy)
                dataCopy.push(0);
                dataCopy.shift()
                datasetsCopy[i].data = dataCopy;
            })

            var newCat = {
                label: newData.title,
                data: this.makeNewArray(0, newData.amount),
                borderColor: colors[newData.title],
                backgroundColor: 'rgba(0, 0, 0, 0)',
            }

            datasetsCopy.push(newCat)

        } else {
            datasetsCopy.forEach(function(val, i) {
                var dataCopy = datasetsCopy[i].data.slice(0);

                //if chosen category already exists and needs an expense added
                //to it, catch it
                if (val.label===newData.title) {
                    dataCopy.push(newData.amount);
                    console.log("adding expense to " + newData.title + " category")
                }
                //then increment all others w 0 spent
                else { dataCopy.push(0); }
                dataCopy.shift()
                // console.log(dataCopy)
                datasetsCopy[i].data = dataCopy;
            })
        }


        // console.log(ledgerCopy)
        // update the state object
        // this.state.ledger = data;
        // set the state
        // this.setState({ ledger: ledgerCopy });


        this.setState({
            data: Object.assign({}, s.data, {
                datasets: datasetsCopy,
                labels: labelsNew
            }),
            ledger: ledgerCopy,
            history: Object.assign({}, s.history, {
                datasets: this.processNetWorth(s, newData),
                labels: labelsNew
            }),
        });
        // console.log(this.state.ledger)
        // this.incrementLedger(newData);
    }

    decide(cats, date) {
        var arr = Object.keys(cats);
        var sum = arr.reduce((total, curr) => +total+ +curr, 0);
        var decision = 0;
        var copy = [];

        arr.some(function (val, i) {
            copy[i] = (i===0) ? +arr[i] : +arr[i] + +copy[i-1];
            decision = val;
            return range(0, sum) < copy[i];
        });

        cats[decision].times += 1;
        return makeTransaction(cats[decision], date)
    }

    tick() {
        this.setState({
            category: this.decide(this.returnCats()),
            txns: this.increment()
        });
    }

    returnCats() {
        var colors = this.returnColors();
        return {
            10: {
                title: "gym payment",
                display: "Pay gym membership",
                color: colors["gym payment"],
                button: false,
                times: 0,
                vendors: [
                    "Anytime Fitness"
                ],
                min: 50,
                max: 50,
                type: 'debit'
            },
            31: {
                title: "alcohol/bars",
                display: "Go to a bar",
                color: colors["alcohol/bars"],
                button: true,
                times: 0,
                vendors: [
                    "Workhorse Bar",
                    "drink.well.",
                    "The Parlor",
                    "Weather Up"
                ],
                min: 5,
                max: 50,
                type: 'debit'
            },
            32: {
                title: "groceries",
                display: "Pick up groceries",
                color: colors["groceries"],
                button: true,
                times: 0,
                vendors: [
                    "Fresh Plus Grocery",
                    "Trader Joe's",
                    "Whole Foods Great Hills Rd",
                    "Dierbergs"
                ],
                min: 10,
                max: 80,
                type: 'debit'
            },
            50: {
                title: "coffeeshop",
                display: "Grab a coffee",
                color: colors["coffeeshop"],
                button: true,
                times: 0,
                vendors: [
                    "Quacks 43rd St Bakery",
                    "Thunderbird Coffee",
                    "Epoch North Loop",
                    "Flightpath Coffeehouse",
                    "Dolce Vita",
                    "Monkey Nest Coffee"
                ],
                min: 1.25,
                max: 15,
                type: 'debit'
            },
            13: {
                title: "gas/fuel",
                display: "Get gas",
                color: colors["gas/fuel"],
                button: true,
                times: 0,
                vendors: [
                    "Shell 4429 Duval St",
                    "Texaco Austin 5301 N Lamar",
                    "Exxon",
                    "North Loop Food Store",
                    "Chevron Airport Blvd",
                    "Gulf Gas Station"
                ],
                min: 30,
                max: 40,
                type: 'debit'
            },
            4: {
                title: "cellphone",
                display: "Pay cellphone bill",
                color: colors["cellphone"],
                button: false,
                times: 0,
                vendors: [
                    "ATT Thank you for your Online Payment"
                ],
                min: 64,
                max: 66,
                type: 'debit'
            },
            35: {
                title: "restaurant",
                display: "Go out to eat",
                color: colors["restaurant"],
                button: true,
                times: 0,
                vendors: [
                    "Foreign & Domestic",
                    "East Side Pies",
                    "Phara's",
                    "Uchiko",
                    "Chipotle",
                    "Freebirds Airport Blvd",
                    "Biscuits and Groovy",
                    "Gordeaux's Donuts",
                    "Habesha Ethiopian Restaurant and Bar",
                    "Tyson's Tacos"
                ],
                min: 12,
                max: 50,
                type: 'debit'
            },
            0: {
                title: "invest",
                display: "Invest money",
                color: colors["invest"],
                button: true,
                times: 0,
                vendors:[
                    "Vanguard Investing",
                    "Discover Online Banking"
                ],
                min: 100,
                max: 10000,
                type: 'neither'
            },
            20: {
                title: "income",
                display: "Earn some income",
                color: colors["income"],
                button: true,
                times: 0,
                vendors:[
                    "Freelancing",
                    "Car washes",
                    "Gave haircut",
                    "Tutored"
                ],
                min: 100,
                max: 1000,
                type: 'credit'
            }

        }
    }

    returnColors() {
        return {
            "alcohol/bars": '#A40E4C',
            "gas/fuel": '#2C2C54',
            "groceries": '#ACC3A6',
            "coffeeshop": '#F5D6BA',
            "gym payment": '#F49D6E',
            "restaurant": 'rgba(60, 110, 113, 1)',
            "invest": '#A7B0CA',
            "cellphone": '#A5D86B',
            "income": '#8EDCE6',
        }
    }
    render() {
        //             <h5>It is { String(this.state.category) }.</h5>
        return (<div>
        </div>)
    }
}

export default Context;
