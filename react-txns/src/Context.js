import React, { Component } from 'react';

function range(min,max) {
    return Math.random()*(max-min+1)+min;
}

function makeTransaction(type) {
     var amount = +range(type.min, type.max).toFixed(2);
     var vendor = type.vendors[Math.floor(range(0, type.vendors.length-1))];

     return {amount: amount, vendor: vendor, title: type.title};
}

export class Context extends Component {
    constructor() {
        super()
        this.state = {
            category: this.decide(this.returnCats()),
            active: ["0"],
            data: {
                labels: [1,2,3, 4, 5, 6, 7, 8, 9, 10],
                datasets: []
            },
        };
    }

    componentDidMount() {
      var that = this;
      this.timer = setInterval(function() { return that.increment(that.state)}, 4000)
    }

    componentWillUnmount() {
      clearInterval(this.timer)
    }

    increment() {
        var s = this.state
        var labels = s.data.labels
        const labelsNew = labels;
        labelsNew.shift()
        labelsNew.push(labels[labels.length - 1]+1)
        console.log(labelsNew)

        var newData = this.decide(this.returnCats())
        // console.log(newData)

        var active = this.state.active
        // console.log(active)

        const datasetsCopy = s.data.datasets.slice(0);
        // console.log(datasetsCopy)

        if (active.includes(newData.title)) {
            console.log("category: " + newData.title + ".  Active array includes this already.")
        } else {
            console.log("category: " + newData.title + ".  NOT INCLUDED.")
        }

        if (!active.includes(newData.title)) {

            datasetsCopy.forEach(function(val) { val.data.shift(); val.data.push(0) })

            active.push(newData.title)
            var newCat = {
                    label: newData.title,
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, newData.amount],
                    borderColor: this.returnColors()[newData.title],
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                }
            datasetsCopy.push(newCat)

        } else {
            datasetsCopy.forEach(function(val) {
                // console.log(val)
                if (val.label === newData.title) { val.data.push(newData.amount); }
                else { val.data.push(0) }
                val.data.shift()

            })
            //look for the correct object in datasets array
            //add the number to it, add zeros to all others
        }


        // const dataCopy = datasetsCopy[0].data.slice(0);
        console.log(datasetsCopy)

        // dataCopy.shift()
        // dataCopy.push(+newData.amount);
        // datasetsCopy[0].data = dataCopy;
        // datasetsCopy[0].label = newData.title;


        this.setState({
            data: Object.assign({}, this.state.data, {
                datasets: datasetsCopy,
                labels: labelsNew
            })
        });
    }

    decide(cats) {
        var arr = Object.keys(cats),
        sum = arr.reduce((total, curr) => +total+ +curr, 0),
        num = range(0, sum),
        decision = 0,
        copy = [];
        arr.some(function (val, i) {
            copy[i] = (i===0) ? +arr[i] : +arr[i] + +copy[i-1];
            decision = val;
            return num < copy[i];
        });
        cats[decision].times += 1;
        return makeTransaction(cats[decision])
    }

    tick() {
        this.setState({
            category: this.decide(this.returnCats()),
            txns: this.increment()
        });
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
                max: 50
            },
            11: {
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
                max: 50
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
                max: 80
            },
            12: {
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
                max: 15
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
                max: 40
            },
            14: {
                title: "cellphone",
                display: "Pay cellphone bill",
                color: colors["cellphone"],
                button: false,
                times: 0,
                vendors: [
                    "ATT Thanks for your Online Payment"
                ],
                min: 64,
                max: 66
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
                max: 50
            },
            5: {
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
                max: 10000
            },
            0: {
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
                max: 10000
            }
        }
    }

    render() {
        return (<div>
            <h5>It is { String(this.state.category) }.</h5>
        </div>)
    }
}

export default Context;
