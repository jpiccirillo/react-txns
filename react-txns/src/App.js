import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart, { LineChart, BarChart } from './components/Chart'
const colors = {
    jam: '#A40E4C',
    cadet: '#2C2C54',
    olive: '#ACC3A6',
    peach: '#F5D6BA',
    sandy: '#F49D6E',
    teal: 'rgba(60, 110, 113, 1)',
    heather: '#A7B0CA',
    plant: '#A5D86B',
    blue: '#8EDCE6',
}

const netWorth = {
    title: "Net Worth Over Time",
}

let txnsGeneral = {
    title: "Transactions Over Time",
    leftOfTitle: "May 30, 2018"
}

const proportions = {
    title: "Spending in Each Category",
}

const cats = {
    10: {
        title: "gym payment",
        display: "Pay gym membership",
        color: colors.sandy,
        times: 0,
        vendors: [
            "Anytime Fitness"
        ],
        min: 50,
        max: 50
    },
    11: {
        title: "Alcohol and bars",
        display: "Go to a bar",
        color: colors.jam,
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
        title: "Groceries",
        display: "Pick up groceries",
        color: colors.olive,
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
        title: "Coffee Shop",
        display: "Grab a coffee",
        color: colors.peach,
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
        title: "Gas / Fuel",
        display: "Get gas",
        color: colors.cadet,
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
        title: "Cellphone",
        display: "Pay cellphone bill",
        color: colors.plant,
        times: 0,
        vendors: [
            "ATT Thanks for your Online Payment"
        ],
        min: 64,
        max: 66
    },
    35: {
        title: "Restaurants",
        display: "Go out to eat",
        color: colors.teal,
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
        title: "Invest Money",
        display: "Invest money",
        color: colors.heather,
        times: 0,
        vendors:[
            "Vanguard Investing",
            "Discover Online Banking"
        ],
        min: 100,
        max: 10000
    },
    20: {
        title: "Income",
        display: "Earn some income",
        color: colors.blue,
        times: 0,
        vendors:[
            "Freelancing",
        ],
        min: 100,
        max: 10000
    }
}

const Header = function(props) {
    return <div className='background'>
        <div className="titleHolder">
                <span><b>{props.first}</b></span>
                <span>{props.second}</span>
                </div>
          </div>;
      }


class ChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: props,
        }
    }

    render() {
      return (
        <div>
          <Header first={this.props.config.leftOfTitle} second={this.props.config.title}/>
          <LineChart/>
        </div>
      );
    }
}

class App extends Component {
    makeButtons() {
        let total = [];
        for (let c in cats) {
            console.log(cats[c]);
            var styles = {
                backgroundColor: cats[c].color,
                border: "solid 1px " +  cats[c].color
            };
            total.push(<a href="#" style={styles} className={"square_btn"}>{cats[c].display}</a>)
        }
        return (total)
    }

  render() {
    return (
    <>
    <Clock />
      <div className="grid-container-2">
          <div>
              <ChartComponent config={ txnsGeneral }/>
          </div>

          <div>
              <Header first="" second="Add a Transaction:"/>
              <div className="buttonHolder">
              {this.makeButtons()}
            </div>
          </div>
      </div>
      <div className="grid-container-3">
          <div>
              <ChartComponent config={ netWorth }/>
          </div>
          <div>
              <ChartComponent config={ proportions }/>
          </div>
      </div>
      <div className="grid-container-1">
          <div>
              <ChartComponent config={ netWorth }/>
          </div>
      </div>
    </>
    );
  }
}

function range(min,max) {
    return Math.random()*(max-min+1)+min;
}

function decide() {
    var arr = Object.keys(cats),
    sum = arr.reduce((total, curr) => +total+ +curr, 0),
    num = range(0, sum),
    decision = 0,
    copy = [];
    // console.log("ticket is: " + num)
	arr.some(function (val, i) {
        copy[i] = (i===0) ? +arr[i] : +arr[i] + +copy[i-1];
		decision = val;
        return num < copy[i];
    });
    cats[decision].times += 1;
	return makeTransaction(cats[decision])
}

function makeTransaction(type) {
     var amount = range(type.min, type.max).toFixed(2);
     var vendor = type.vendors[Math.floor(range(0, type.vendors.length-1))];
     return "$"  + amount + " at " + vendor;
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
        category: decide()
    };
  }

  componentDidMount() {
    var that = this;
    this.timerID = setInterval( function() { return that.tick(); }, 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      category: decide()
    });
  }

  render() {
    return (
      <div>
        <h5>It is { String(this.state.category) }.</h5>
      </div>
    );
  }
}

export default App;
