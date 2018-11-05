import React, { Component }from 'react';
import Context from '../Context'
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super()
    }
    static defaultProps = {
        displayTitle: false,
        displayLegend: true,
        legendPosition: 'bottom',
        titleSize: 25,
        options: {
            animation: {
                duration: 0,
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                labels : {usePointStyle: true},
                display: true,
                position: "right"
            },
        }
    }
}

export class LineChart extends Chart {
    constructor(props) {
        super()
        // console.log(this)
    }

    render(){
      var data = this.props.chartData;
      var lineOptions = JSON.parse(JSON.stringify(this.props.options))
      lineOptions.legend.display = false;
      lineOptions.tooltips = {
          callbacks: {
              label: function(tooltipItem, data) {
                  var label = " ";
                  label += data.datasets[tooltipItem.datasetIndex].label || '';
                  label += ': $';
                  label += Math.round(tooltipItem.yLabel * 100) / 100;
                  return label;
              }
          }
      };

      // var options = this.defaultProps.
      // this.props.options.legend.display = false;
      return(
        <div>
        <Line
              data = { data }
              height={200}
              options={lineOptions}
        />
        </div>
      )
    }
}
export class DoughnutChart extends Chart {
    constructor(props) {
        super()
        console.log(props)
    }

    render(){
      // this.props.options
      var data = this.props.chartData;
      var donutOptions = JSON.parse(JSON.stringify(this.props.options));
      donutOptions.tooltips = {
          callbacks: {
              title: function(tooltipItem, data) {
                  return data['labels'][tooltipItem[0]['index']];
                },
              label: function(tooltipItem, data) {
                  console.log(tooltipItem)
                  var label = data['datasets'][0]['data'][tooltipItem['index']]
                  return " $" + Math.round(label*100)/100;
              }
          }
      }
      return(
        <div>
        <Doughnut
              data = { data }
              height={200}
              options={ donutOptions }
        />
        </div>
      )
    }
}

export default Chart;
