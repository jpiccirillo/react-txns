import React, { Component }from 'react';
import Context from '../Context'
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

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
        if (this.props.type==="networth") {
            var data = this.props.chartData.history
        } else if (this.props.type==="donut") {
            var data = this.props.chartData.proportions
        } else {
            var data = this.props.chartData.data
        }
      // console.log(this.props)
      return(
        <div>
        <Line
              data = { data }
              height={200}
              options={{
                  type: 'line',
                  animation: {
                      duration: 0,
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
export class DoughnutChart extends Chart {
    constructor(props) {
        super()
        // console.log(props)
    }

    render(){
      if (this.props.type==="networth") {
          var data = this.props.chartData.history
      } else if (this.props.type==="donut") {
          var data = this.props.chartData.proportions
      } else {
          var data = this.props.chartData.data
      }
      // console.log(this.props)
      return(
        <div>
        <Doughnut
              data = { data }
              height={200}
              options={{
                  animation: {
                      duration: 0,
                  },
                  responsive: true,
                  maintainAspectRatio: false,
                  legend: {
                      labels : {usePointStyle: true},
                      display: true,
                      position: "right"
                  }
              }}
        />
        </div>
      )
    }
}

export default Chart;
