import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart, { LineChart, BarChart } from './components/Chart'

class App extends Component {
  render() {
    return (
        <body>
      <div className="grid-container-2">
          <div className="left">
              <LineChart titleSize='30'/>
          </div>
      </div>
      </body>
    );
  }
}

// <div className="right">
//   <BarChart titleSize='10' legendPosition='right'/>
// </div>
export default App;
