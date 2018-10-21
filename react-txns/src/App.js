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
        console.log(props)
        this.state = {
            properties: props,
        }
    console.log(this.state)
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
    getTransaction(name, color, content) {
        let styles = {
            backgroundColor: color,
            border: "solid 1px " +  color
        };
        var classString = "square_btn " + name;
        return (<a href="#" style={styles} className={classString}>{content}</a>)
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
                  {this.getTransaction("coffee", colors.peach, "Grab a coffee")}
                  {this.getTransaction("bars", colors.jam, "Go out to a bar")}
                  {this.getTransaction("gym", colors.sandy, "Pay gym membership")}
                  {this.getTransaction("gas", colors.cadet, "Get gas")}
                  {this.getTransaction("groceries", colors.olive, "Pick up groceries")}
                  {this.getTransaction("restaurant", colors.teal, "Go out to eat")}
                  {this.getTransaction("invest", colors.heather, "Invest money")}
                  {this.getTransaction("cellphone", colors.plant, "Pay cellphone bill")}
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

const cats = {
    10: {
        title: "gym payment",
        times: 0,
        vendors: [
            "Anytime Fitness"
        ],
        min: 50,
        max: 50
    },
    32: {
        title: "Groceries",
        times: 0,
        vendors: [
            "Quack's 43rd St Bakery",
            "Trader Joe's",
            "Whole Foods",
            "Dierbergs"
        ],
        min: 10,
        max: 80
    },
    11: {
        title: "credit card",
        times: 0,
        vendors: [
            "Chase Thank You Payment",
            "Target Payment"
        ],
        min: 10,
        max: 1000
    },
    12: {
        title: "coffee shop",
        times: 0,
        vendors: [
            "Quacks",
            "Thunderbird",
            "Epoch North Loop"
        ],
        min: 1.25,
        max: 15
    },
    5: {
        title: "Invest Money",
        times: 0,
        vendors:[
            "Vanguard Investing",
            "Discover Online Banking"
        ],
        min: 100,
        max: 10000
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
