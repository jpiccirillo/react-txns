import React, { Component }from 'react';
import Context from '../Context'
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    static defaultProps = {
        displayTitle: false,
        displayLegend: true,
        legendPosition: 'bottom',
        titleSize: 25
    }
}

export class LineChart extends Chart {
    constructor(props) {
        super()
        // console.log(props)
    }

    render(){
      return(
        <div>
        <Line
              data = {this.props.chartData}
              height={200}
              options={{
                  type: 'line',
                  animation: {
                      duration: 100,
                      display: 'linear'
                  },
                  responsive: true,
                  maintainAspectRatio: false,
                  legend: {
                      labels : {usePointStyle: true},
                      display: false,
                      position: this.props.legendPosition
                  }
              }}
        />
        </div>
      )
    }
}

export default Chart;
