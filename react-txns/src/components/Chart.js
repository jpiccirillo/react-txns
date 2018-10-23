import React from 'react';
import Context from '../Context'
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Context {
    static defaultProps = {
        displayTitle: false,
        displayLegend: true,
        legendPosition: 'bottom',
        titleSize: 25
    }

    state = {
      data: {
          labels: [1,2,3, 4, 5, 6, 7, 8, 9, 10],
          datasets: [{
              data: [, , , , , , , , ,.3],
              borderColor: '#f87979',
              backgroundColor: 'rgba(0, 0, 0, 0)',
          }]
      },
    }

    componentDidMount() {
      var that = this;
      this.timer = setInterval(function() { return that.increment()}, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.timer)
    }

    increment() {

        var labels = this.state.data.labels
        const labelsNew = labels;
        labelsNew.shift()
        labelsNew.push(labels[labels.length - 1]+1)

        const datasetsCopy = this.state.data.datasets.slice(0);
        const dataCopy = datasetsCopy[0].data.slice(0);

        dataCopy.shift()
        dataCopy.push(Math.random());
        // console.log(dataCopy)
        datasetsCopy[0].data = dataCopy;

        this.setState({
            data: Object.assign({}, this.state.data, {
                datasets: datasetsCopy,
                labels: labelsNew
            })
        });
    }

}

export class LineChart extends Chart {

    render(){
        console.log(this.returnCats())
      return(
        <div>
        <Line
              data = {this.state.data}
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
// export class BarChart extends Chart {
//     // constructor(props) {
//     //     super(props);
//     // }
//     render() {
//         return (
//             <div className="bar-chart">
//             width={100}
//             height={50}
//             <Bar
//                 data={this.state.chartData}
//                 options={{
//                     responsive: true,
//                     maintainAspectRatio: false,
//                     title: {
//                         display: this.props.displayTitle,
//                         text: 'Piccirillo Siblings',
//                     },
//                     legend: {
//                         display: this.props.displayLegend,
//                         position: this.props.legendPosition
//                     }
//                 }}
//             />
//             </div>
//         )
//     }
// }
// labels: ["January", "February", "March", "April", "May", "June", "July"],
// datasets: [{
//     pointStyle: 'line',
//     label: "Marilyn",
//     borderColor: '#f87979',
//     backgroundColor: 'rgba(0, 0, 0, 0)',
//     data: [0, 10, 5, 2, 20, 30, 45],
// },


export class BarExample extends Chart {
  state = {
    data: {
        labels: [1,2,3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
            data: [, , , , , , , , ,.3],
            borderColor: '#f87979',
            backgroundColor: 'rgba(0, 0, 0, 0)',
        }]
    },
  }

  componentDidMount() {
    var that = this;
    this.timer = setInterval(function() { return that.increment()}, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  increment() {

      var labels = this.state.data.labels
      const labelsNew = labels;
      labelsNew.shift()
      labelsNew.push(labels[labels.length - 1]+1)

      const datasetsCopy = this.state.data.datasets.slice(0);
      const dataCopy = datasetsCopy[0].data.slice(0);

      dataCopy.shift()
      dataCopy.push(Math.random());
      // console.log(dataCopy)
      datasetsCopy[0].data = dataCopy;

      this.setState({
          data: Object.assign({}, this.state.data, {
              datasets: datasetsCopy,
              labels: labelsNew
          })
      });
  }

  render(){
    return(
      <div>
      <Line
            data = {this.state.data}
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
