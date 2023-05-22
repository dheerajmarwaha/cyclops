import React, { Component } from 'react';
import Plot from 'react-plotly.js'

export default class SubPlot extends Component {

    constructor(props) {
        super(props);
        var boxPlotly0 = [];
        var boxPlotly1 = [];
        for (var i = 0; i < 50; i++){
            boxPlotly0[i] = Math.random();
            boxPlotly1[i] = Math.random()+1;
        }

        var trace1 = {
            x: [1, 2, 3],
            y: [2,3,4],
            type: 'scatter'
        }

        var trace2 = {
            x: [10, 20, 30],
            y: [5, 30, 5],
            xaxis: 'Date',
            yaxis: 'Cost',
            type: 'scatter'
        }

        var trace3 = {
            x: [20,30,40],
            y: [50, 40, 70],
            xaxis: 'Date',
            yaxis: 'Cost',
            type: 'scatter'
        }

        var data = [trace1, trace2, trace3];

        var layout = {
            grid: {
                rows: 2,
                columns: 2,
                subplots: [
                    ['xy', 'x2y'],
                    ['xy3', 'x4y4']
                ],
                roworder: 'bottom to top'
            }
        }
        this.state = {
            data: data,
            layout: layout
        }

    }

  render() {
    return (
      <div>
        <h1>Sub  Plot</h1>
        <Plot
          data={ this.state.data}
          layout={this.state.layout}
        />

</div>
    )
  }
}