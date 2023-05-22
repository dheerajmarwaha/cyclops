import React from "react";
import Plot from "react-plotly.js";
import { trace1, trace2 } from "../Data/data";

function PlotlyControlChart() {
  var Data = {
    type: "scatter",
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1, 2, 4, 2, 7, 2, 3, 2, 1, 9],
    mode: "lines+markers",
    name: "Occurence",
    showlegend: true,
    hoverinfo: "all",
    line: {
      color: "blue",
      width: 2,
    },
    marker: {
      color: "blue",
      size: 8,
      symbol: "circle",
    },
  };

  var Viol = {
    type: "scatter",
    x: [5, 10],
    y: [7, 9],
    mode: "markers",
    name: "Violation",
    marker: {
      color: "rgb(255,65,54)",
      line: { width: 3 },
      opacity: 0.5,
      size: 12,
      symbol: "circle-open",
    },
  };

  var Limit = {
    type: "scatter",
    x: [1, 10, null, 1, 10],
    y: [2, 2, null, 5, 5],
    mode: "lines",
    name: "LCL/UCL",
    showlegend: true,
    line: {
      color: "red",
      width: 2,
      dash: "dash",
    },
  };

  var Centre = {
    type: "scatter",
    x: [1, 10],
    y: [3.5, 3.5],
    mode: "lines",
    name: "Centre",
    showlegend: true,
    line: {
      color: "grey",
      width: 2,
    },
  };

  var data = [Data, Viol, Limit, Centre];
  var layout = {
    title: "Exception Occurences during predictions",
  };

  return (
    <div>
      <h1>Highlighting the exceptions chart using react-plotly.js</h1>
      <Plot data={data} layout={layout} />
    </div>
  );
}

export default PlotlyControlChart;
