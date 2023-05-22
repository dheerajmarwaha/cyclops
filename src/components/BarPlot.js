import React, { Component } from 'react';
import Plot from 'react-plotly.js'

export default class BarPlot extends Component {
  render() {
    return (
      <div>
        <h1>Bar Plot</h1>
        <Plot
          data={
            [
              {
                x: [1, 2, 3],
                y: [1, 2, 3],
                type: 'bar',
                mode: 'lines+markers',
                marker: {color: 'blue'}
              }
            ]
          }
          layout={{ width: 600, height: 300, title: 'Simple Bar Chart' }}
        />

        <br />
        <h1>Another Sample</h1>
        <Plot
          data={
            [
              {
                x: [1, 2, 3],
                y: [1, 2, 3],
                type: 'bar',
                name: 'SF'
              },
              {
                x: [1, 2, 3],
                y: [2, 4, 5],
                type: 'bar',
                name: 'Montréal'
              },
            ]
          }
          layout={{ width: 600, height: 300, title: 'Dash Data Visualization' }}
        />
</div>
    )
  }
}