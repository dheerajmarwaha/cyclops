import React from "react";
import Plot from "react-plotly.js";
import * as d3 from "d3";

import "./../App.css";
import { csvUrl } from "../constant";

function PlotlyLineChart() {
  const [data, setData] = React.useState();
  const [xValues, setxValues] = React.useState([]);
  const [yValues, setyValues] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    function transformRow(row) {
      setxValues((xValues) => [...xValues, row["Date"]]);
      setyValues((yValues) => [...yValues, row["PCI"]]);
    }

    d3.csv(csvUrl, transformRow).then((d) => {
      setLoading(false);
      setData([
        {
          x: xValues,
          y: yValues,
        },
      ]);
    });
  }, [xValues, yValues]);

  return (
    <div className="App">
      <header className="App-header">
        {loading && <div>loading {data}</div>}
        {!loading && (
          <Plot
            data={data}
            layout={{ width: 600, height: 300, title: "A Fancy Plot" }}
          />
        )}
      </header>
    </div>
  );
}

export default PlotlyLineChart;
