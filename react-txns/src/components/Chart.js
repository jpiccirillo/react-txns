import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export class Chart extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            chartData: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    pointStyle: 'line',
                    label: "Marilyn",
                    borderColor: '#f87979',
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    data: [0, 10, 5, 2, 20, 30, 45],
                },
                {
                    pointStyle: 'line',
                    label: "Greg",
                    borderColor: '#f73979',
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    data: [0, 2, 15, 5, 10, 3, 10],
                },
                {
                    pointStyle: 'line',
                    label: "Jeffrey",
                    borderColor: '#f18979',
                    backgroundColor: 'rgb(0, 0, 0, 0)',
                    data: [0, 18, 15, 12, 120, 50, 35],
                }]
            }
        }
    }

    static defaultProps = {
        displayTitle: false,
        displayLegend: true,
        legendPosition: 'bottom',
        titleSize: 25
    }

    render() {
        return (
            <div className="chart">
            </div>
        )
    }
}

export class LineChart extends Chart {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="line-chart">
            <Line
                data={this.state.chartData}
                height={200}
                options={{
                    type: 'line',
                    animation: {
                        duration: 0
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        labels : {usePointStyle: true},
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                    }
                }}
            />
            </div>
        )
    }
}
export class BarChart extends Chart {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="bar-chart">
            width={100}
            height={50}
            <Bar
                data={this.state.chartData}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    title: {
                        display: this.props.displayTitle,
                        text: 'Piccirillo Siblings',
                    },
                    legend: {
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                    }
                }}
            />
            </div>
        )
    }
}

export default Chart;
