import React, { useState } from "react";
import Plot from "react-plotly.js";
import * as d3 from "d3";

import "./../App.css";
import { montlyCycplopsAPIUrl } from "../constant";
import ToggleSwitch from "../components/materials/toggle-switch/ToggleSwitch";
import CSVTable from "./CSVTable";

function PlotlyCyclopsMonthlyChartUsingAPI() {
  const [showGraph, setShowGraph] = useState(true);
  const [data, setData] = React.useState();
  const [futureData, setFutureData] = React.useState();
  const [loading, setLoading] = React.useState(true);

  const changeHandler = (val) => {
    setShowGraph(val);
  };

  const unpack = (rows, key) => {
    return rows.map((row) => {
      return row[key];
    });
  };
  React.useEffect(() => {
    if (data) return;
    d3.json(montlyCycplopsAPIUrl).then((d) => {
      setLoading(false);
      //console.log(d[0].data);
      //console.log(d[2].data);
      setData([
        {
          x: unpack(d[0].data, "x"), //d.map((data) => data.x),
          y: unpack(d[0].data, "y"), //d.map((data) => data.y),
          name: "On-Hand Inventory",
          type: "scatter",
          mode: "lines",
          line: { color: "#17BECF" },
          hovertemplate:
            "<i>Date</i>: %{x} <br><b>On-hand Inventory</b>: %{y}<br>",
        },
      ]);

      setFutureData([
        {
          x: unpack(d[2].data, "x"), //d.map((data) => data.x),
          y: unpack(d[2].data, "y"), //d.map((data) => data.y),
          name: "Predicted On-Hand Inventory",
          type: "scatter",
          mode: "lines",
          //line: { color: "#7F7F7F" },
          title: {
            text: "value",
            standoff: 0,
          },
        },
      ]);
    });
  }, [data]);

  const layout = {
    title: "Monthly",
    font: {
      family: "Raleway, sans-serif",
    },

    xaxis: {
      hoverformat: "%b",
      categoryorder: "array",
      zeroline: false,
      showline: true,
      tickmode: "array",
      tickangle: -45,
      tickformat: {
        size: 10,
        color: "black",
      },
      ticks: "outside",
      tick0: 0,
      dtick: 0.25,
      ticklen: 8,
      tickwidth: 4,
      tickcolor: "#000",
      linecolor: "#636363",
      linewidth: 6,
      showticklabels: true,
      // type: "category", //<------------ add this line
      //   title: {
      //     font: {
      //       color: "#172631",
      //       size: 12.0,
      //     },
      //     //text: "Date",
      //   },
      // tickformat: "%b %Y", //"%d %B (%a)\n %Y",
      autorange: true,
      range: data,
      rangeselector: {
        buttons: [
          {
            count: 1,
            label: "1m",
            step: "month",
            stepmode: "backward",
          },
          {
            count: 6,
            label: "6m",
            step: "month",
            stepmode: "backward",
          },
          { step: "all" },
        ],
      },
      rangeslider: { range: data },
      type: "date",
    },
    yaxis: {
      autorange: true,
      type: "linear",
    },
    legend: {
      x: 0.5,
      y: -0.75,
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
      filename: "monthly_view",
      scale: 1,
    },
  };
  return (
    <div className="App">
      <ToggleSwitch label="Hide" onChange={changeHandler}></ToggleSwitch>
      <header className="App-header">
        {loading && <div>loading {data}</div>}
        {!loading && showGraph && (
          <Plot
            data={data.concat(futureData)}
            layout={layout}
            config={config}
            style={{ width: "100%", height: "100%" }}
          />
        )}
        <CSVTable data={data}></CSVTable>
      </header>
    </div>
  );
}
export default PlotlyCyclopsMonthlyChartUsingAPI;
