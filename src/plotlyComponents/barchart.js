import React from "react";
import Plot from "react-plotly.js";

function PlotlyBarChart() {
  var yValue = [1, 6, 2, 1, 3];

  const trace1 = {
    x: ["Milk", "Eggs", "Bread", "Cheese", "Pasta"],
    y: [1, 6, 2, 1, 3],
    mode: "lines",
    type: "bar",
    name: "Monday",
    text: [1, 6, 2, 1, 3],
    textfont: {
      family: "Times New Roman",
      size: 16,
    },
    textposition: "auto", //"top middle",
  };

  const trace2 = {
    x: ["Milk", "Eggs", "Bread", "Cheese", "Pasta", "Tea"],
    y: [5, 4, 3, 8, 4, 7],
    mode: "lines",
    type: "bar",
    name: "Tuesday",
    text: [5, 4, 3, 8, 4, 7],
    textfont: {
      family: "Times New Roman",
      size: 16,
    },
    textposition: "top middle",
  };

  const [data] = React.useState([trace1, trace2]);

  const layout = {
    xaxis: {
      range: [],
      tickangle: -45,
    },
    yaxis: {
      range: [0, 8],
    },
    width: 800,
    height: 400,
    title: "A Fancy Plot",
    barmode: "group", //"stack", //"group",
    bargap: 0.25,
    showlegend: false,
  };

  return (
    <div>
      <h1>Line chart using react-plotly.js</h1>
      <Plot data={data} layout={layout} />
    </div>
  );
}

export default PlotlyBarChart;
