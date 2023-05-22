import React from "react";
import Plot from "react-plotly.js";
import * as d3 from "d3";

import "./../App.css";
import { csvUrl2 } from "../constant";

function PlotlyLineChartV2() {
  const [data, setData] = React.useState();
  const [xValues, setxValues] = React.useState([]);
  const [yValues, setyValues] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    function transformRow(row) {
      if (
        row["gl_pg_rollup"] == "Consumables" &&
        row["gl_product_group_desc"] == "121 - Health & Personal Care"
      ) {
        setxValues((xValues) => [...xValues, row["Date"]]);
        setyValues((yValues) => [...yValues, row["PCI"]]);
      }
    }

    d3.csv(csvUrl2, transformRow).then((d) => {
      setLoading(false);
      setData([
        {
          x: xValues,
          y: yValues,
        },
      ]);
    });
  }, [xValues, yValues]);

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
      autorange: true,
      //domain: [0, 1],
      //type: "linear",
      range: ["2017-06-01 12:00", "2018-01-31 12:00"],
      tickangle: -45,
      zeroline: false,
      zerolinecolor: "red",
      gridwidth: 2,
      gridcolor: "#eee",
      hoverformat: ".2f",
      rangeslider: { range: ["2017-06-01 12:00", "2018-01-31 12:00"] },
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
    <div className="App">
      <header className="App-header">
        {loading && <div>loading {data}</div>}
        {!loading && (
          <Plot
            data={data}
            layout={layout}
            config={config}
            style={{ width: "100%", height: "100%" }}
            useResizeHandler="true"
          />
        )}
      </header>
    </div>
  );
}

export default PlotlyLineChartV2;
