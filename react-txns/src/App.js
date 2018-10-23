import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Context from './Context'
import { LineChart, BarChart, BarExample } from './components/Chart'

// const colors = {
//     jam: '#A40E4C',
//     cadet: '#2C2C54',
//     olive: '#ACC3A6',
//     peach: '#F5D6BA',
//     sandy: '#F49D6E',
//     teal: 'rgba(60, 110, 113, 1)',
//     heather: '#A7B0CA',
//     plant: '#A5D86B',
//     blue: '#8EDCE6',
// }
// const cats = {
//     10: {
//         title: "gym payment",
//         display: "Pay gym membership",
//         color: colors.sandy,
//         button: false,
//         times: 0,
//         vendors: [
//             "Anytime Fitness"
//         ],
//         min: 50,
//         max: 50
//     },
//     11: {
//         title: "Alcohol and bars",
//         display: "Go to a bar",
//         color: colors.jam,
//         button: true,
//         times: 0,
//         vendors: [
//             "Workhorse Bar",
//             "drink.well.",
//             "The Parlor",
//             "Weather Up"
//         ],
//         min: 5,
//         max: 50
//     },
//     32: {
//         title: "Groceries",
//         display: "Pick up groceries",
//         color: colors.olive,
//         button: true,
//         times: 0,
//         vendors: [
//             "Fresh Plus Grocery",
//             "Trader Joe's",
//             "Whole Foods Great Hills Rd",
//             "Dierbergs"
//         ],
//         min: 10,
//         max: 80
//     },
//     12: {
//         title: "Coffee Shop",
//         display: "Grab a coffee",
//         color: colors.peach,
//         button: true,
//         times: 0,
//         vendors: [
//             "Quacks 43rd St Bakery",
//             "Thunderbird Coffee",
//             "Epoch North Loop",
//             "Flightpath Coffeehouse",
//             "Dolce Vita",
//             "Monkey Nest Coffee"
//         ],
//         min: 1.25,
//         max: 15
//     },
//     13: {
//         title: "Gas / Fuel",
//         display: "Get gas",
//         color: colors.cadet,
//         button: true,
//         times: 0,
//         vendors: [
//             "Shell 4429 Duval St",
//             "Texaco Austin 5301 N Lamar",
//             "Exxon",
//             "North Loop Food Store",
//             "Chevron Airport Blvd",
//             "Gulf Gas Station"
//         ],
//         min: 30,
//         max: 40
//     },
//     14: {
//         title: "Cellphone",
//         display: "Pay cellphone bill",
//         color: colors.plant,
//         button: false,
//         times: 0,
//         vendors: [
//             "ATT Thanks for your Online Payment"
//         ],
//         min: 64,
//         max: 66
//     },
//     35: {
//         title: "Restaurants",
//         display: "Go out to eat",
//         color: colors.teal,
//         button: true,
//         times: 0,
//         vendors: [
//             "Foreign & Domestic",
//             "East Side Pies",
//             "Phara's",
//             "Uchiko",
//             "Chipotle",
//             "Freebirds Airport Blvd",
//             "Biscuits and Groovy",
//             "Gordeaux's Donuts",
//             "Habesha Ethiopian Restaurant and Bar",
//             "Tyson's Tacos"
//         ],
//         min: 12,
//         max: 50
//     },
//     5: {
//         title: "Invest Money",
//         display: "Invest money",
//         color: colors.heather,
//         button: true,
//         times: 0,
//         vendors:[
//             "Vanguard Investing",
//             "Discover Online Banking"
//         ],
//         min: 100,
//         max: 10000
//     },
//     9: {
//         title: "Income",
//         display: "Earn some income",
//         color: colors.blue,
//         button: true,
//         times: 0,
//         vendors:[
//             "Freelancing",
//             "Car washes",
//             "Gave haircut",
//             "Tutored"
//         ],
//         min: 100,
//         max: 10000
//     }
// }

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
        this.state = {
            properties: props,
        }
        console.log(props)
    }

    render() {
      return (
        <div>
          <Header first={this.props.config.leftOfTitle} second={this.props.config.title}/>
          <LineChart chartData={this.state.chartData} />
        </div>
      );
    }
}

export class App extends Context {

    makeButtons() {
        let total = [];
        var cats = this.returnCats()
        for (let c in cats) {
            // console.log(cats[c]);
            if (cats[c].button) {
                var styles = {
                    backgroundColor: cats[c].color,
                    border: "solid 1px " +  cats[c].color
                };
            total.push(<a href="#" style={styles} className={"square_btn"} key={c}>{cats[c].display}</a>)
            }
        }
        return (total)
    }

  render() {
    return (
    <>
      <div className="grid-container-2">
          <div>
              <ChartComponent config={txnsGeneral} />
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
          <ChartComponent config={txnsGeneral}/>

          </div>
      </div>
      <div className="grid-container-1">
          <div>
              <ChartComponent config={ proportions }/>
          </div>
      </div>
    </>
    );
  }
}

export default App;
