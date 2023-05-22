import React, { Component } from 'react';
import Plot from 'react-plotly.js'

export default class PiePlot extends Component {
  render() {
    return (
      <div>
        <h1>Pie  Plot</h1>
        <Plot
          data={
            [
              {
                values: [78, 79, 80, 80, 79],
                labels: ['Hindi', 'English', 'Math', 'Science', 'Social Science'],
                type: 'pie',
                marker: {color: 'blue'}
              }
            ]
          }
          layout={{ width: 600, height: 300, title: 'Simple Pie' }}
        />

</div>
    )
  }
}