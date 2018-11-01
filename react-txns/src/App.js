import React, { Component } from 'react';
import './App.css';
import Context from './Context'
import { LineChart, BarChart, DoughnutChart, BarExample } from './components/Chart'

const netWorth = {
    title: "Net Worth Over Time",
    type: "networth"
}

let txnsGeneral = {
    title: "Transactions Over Time",
    leftOfTitle: "May 30, 2018",
    type: "line"
}

const proportions = {
    title: "Spending in Each Category",
    type: "donut"
}

const ledger = {
    title: "Ledger of Expenses",
    type: "ledger"
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

    makeComponent() {
        var type = this.props.config.type;
        var title = this.props.config.title;
        console.log(title)
        var total = [];
        total.push(<Header key={title+"_title"}  first={this.props.config.leftOfTitle} second={title}/>)
        if (type == "donut") {
            total.push(<DoughnutChart key={title} chartData={this.props.data} type={this.props.config.type} />)
        } else {
            total.push(<LineChart key={title} chartData={this.props.data} type={this.props.config.type} />)
        }
        console.log(this.props)
        return (total);
    }
    render() {
      return (
          this.makeComponent()
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
        var ledger = this.state.ledger
        var colors = this.returnColors()

        for (let t in ledger) {
            var styles = {
                color: colors[ledger[t].title],
                borderBottom: '1px dotted gainsboro'
            };
            total.push(
                <tr href="#" style={styles} className={"ledgerRow"} key={t}>
                    <td>{ledger[t].date}</td>
                    <td>{ledger[t].amount}</td>
                    <td>{ledger[t].title}</td>
                    <td>{ledger[t].vendor}</td>
                </tr>)
            }
        return (total)
    }

  render() {
    var data = this.state;
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
          <ChartComponent config={proportions} data = { data }/>

          </div>
          <div>
            <Header second={"Ledger of Transactions"} />
            <div className="ledgerTable">
            <table>
                <tbody>
              <tr>
                <th className="date">{"Date"}</th>
                <th className="amount">{"Amount"}</th>
                <th className="category">{"Category"}</th>
                <th className="vendor">{"Vendor"}</th>
              </tr>
              {this.makeTxns()}
              </tbody>
            </table>
            </div>
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


export default App;
