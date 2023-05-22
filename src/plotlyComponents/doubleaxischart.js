import React from "react";
import Plot from "react-plotly.js";

function PlotlyDoubleAxisChart() {
  const xValues = ["Jan 23", "Feb 23", "Mar 23", "Apr 23", "May 23"];
  const yValues = [1, 6, 2, 1, 3];
  const trace1 = {
    x: xValues,
    y: yValues,
    mode: "lines+text+markers",
    type: "bar",
    name: "Prediction #0",
    text: yValues.map(String),
    textfont: {
      family: "Times New Roman",
      size: 16,
    },
    textposition: "auto", //"top middle",
  };

  const trace2 = {
    x: xValues,
    y: [0.5, 0.4, 0.3, 0.8, 0.4, 0.7],
    mode: "lines+text+markers",
    type: "scatter",
    name: "Prediction #1",
    text: [0.5, 0.4, 0.3, 0.8, 0.4, 0.7],
    textfont: {
      family: "Times New Roman",
      size: 16,
    },
    textposition: "top middle",
    yaxis: "y2",
    hoverinfo: "x+y",
    hovertemplate:
      "<i>Projection Date</i>: %{x} <br><b>Projected Value</b>: %{y}<br>",
  };

  const [data] = React.useState([trace1, trace2]);

  const layout = {
    title: "Demo Double Axis graph",
    font: {
      family: "Raleway, sans-serif",
    },
    shapes: [
      {
        type: "rect",
        xref: "x",
        yref: "y",
        x0: 3,
        y0: 0,
        x1: 5,
        y1: 8,
        fillcolor: "pink",
        opacity: 0.2,
        line: {
          width: 0,
        },
      },
    ],
    hovermode: "closest",
    xaxis: {
      range: [],
      tickangle: -45,
      zeroline: false,
      zerolinecolor: "red",
      gridwidth: 2,
      gridcolor: "#eee",
      hoverformat: ".2f",
    },
    yaxis: {
      range: [0, 8],
      hoverformat: ".2f",
    },
    //width: 1200,
    height: 600,

    autosize: true,
    automargin: true,
    // margin: {
    //   l: 50,
    //   r: 50,
    //   b: 100,
    //   t: 100,
    //   pad: 4,
    // },
    //paper_bgcolor: 'pink',
    //plot_bgcolor: "pink",
    barmode: "group", //"stack", //"group",
    bargap: 0.25,
    showlegend: true,
    legend: {
      x: 0.5,
      y: -0.25,
      xanchor: "center",

      traceorder: "normal",
      font: {
        family: "sans-serif",
        size: 16,
        color: "red",
      },
      bgcolor: "pink",
      bordercolor: "grey",
      borderwidth: 2,
      orientation: "h",
    },
    yaxis2: {
      overlaying: "y",
      side: "right",
      range: [0, 1],
    },
    annotations: [
      {
        x: 2.5,
        y: 4,
        xref: "x",
        yref: "y",
        text: "look here",
        showarrow: true,
        arrowhead: 7,
        ax: 0,
        ay: -40,
      },
      {
        font: {
          size: 12,
          family: "Arial",
        },
        showarrow: true,
        text: "USA",
        x: 0.19,
        y: 0.8,
      },
      {
        font: {
          size: 12,
          family: "Arial",
        },
        showarrow: true,
        text: "EU",
        x: 1.19,
        y: 1.8,
      },
    ],
  };

  const config = {
    responsive: true,
    scrollZoom: false,
    editable: true,
    displayModeBar: true,
    displaylogo: false,
    //staticPlot: true,
    toImageButtonOptions: {
      format: "png",
      filename: "prediction_view",
      // height: 700,
      // width: 700,
      scale: 1,
    },
  };

  return (
    <div>
      <h1>Double axis chart using react-plotly.js</h1>
      <Plot
        data={data}
        layout={layout}
        config={config}
        style={{ width: "100%", height: "100%" }}
        useResizeHandler="true"
      />
    </div>
  );
}

export default PlotlyDoubleAxisChart;
