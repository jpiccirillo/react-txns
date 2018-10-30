import React, { Component } from 'react';
import './App.css';
import Context from './Context'
import { LineChart, BarChart, BarExample } from './components/Chart'

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

const ledger = {
    title: "Ledger of Expenses",
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
          <LineChart chartData={this.props.data} />
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
    makeTxns() {
        let total = [];
        var ledger = this.state.ledger;
        for (let t in ledger) {
            // console.log(cats[c]);

        var styles = {
            color: 'red',
        };
        total.push(<div href="#" style={styles} className={""} key={t}>{ledger[t].title + ", " + ledger[t].amount}</div>)
        }
        return (total)
    }

  render() {
    var data = this.state.data;
    return (
    <>
      <div className="grid-container-2-left">
          <div>
              <ChartComponent config={txnsGeneral} data = {data} />
          </div>

          <div>
              <Header first="" second="Add a Transaction:"/>
              <div className="buttonHolder">
              {this.makeButtons()}
            </div>
          </div>
      </div>
      <div className="grid-container-2-right">
          <div>
          <ChartComponent config={txnsGeneral} data = { data }/>

          </div>
          <div>
                    {this.makeTxns()}
          </div>
      </div>
      <div className="grid-container-1">
          <div>
              <ChartComponent config={ netWorth } data = { data }/>
          </div>
      </div>
    </>
    );
  }
}

const Transactions = function(props) {
    return <div className='background'>
        <div className="titleHolder">
                <span><b>{props.first}</b></span>
                <span>{props.second}</span>
                </div>
          </div>;
      }

// export class Transactions extends Component {
//     constructor(props) {
//         super()
//         // console.log(props)
//     }
//   render() {
//       console.log(this.props)
//     return (
//       <div className="">
//         <ul className="">{
//             Object.keys(this.props).map(function(key) {
//                 var  l = this.props;
//               return <ul className="" key={key}>{l[key].title + ", " + l[key].amount + ", " + l[key].vendor}</ul>
//             }.bind(this))
//           }
//         </ul>
//       </div>
//     );
//   }
// }

export default App;
