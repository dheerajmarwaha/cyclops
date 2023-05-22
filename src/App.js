import React, { Component } from "react";
import PlotlyCyclopsMonthlyChartUsingAPI from "./editive-initiator/getcyclopsmonthlyusingapi";
import Table from "./ConditionalFormatting/Table";
// import BarPlot from "./components/BarPlot";
// import PiePlot from "./components/PiePlot";
// import BoxPlot from "./components/BoxPlot";
// import TimePlot from "./components/TimePlot";
// import SubPlot from "./components/SubPlot";
// import JointLineScatterCharts from "./components/JointLineScatterChart";
// import BarChart from "./components/BarChart";
// import PlotlyLineChartV2 from "./plotlyComponents/linechartV2";
// import PlotlyLineChart from "./plotlyComponents/linechart";
// import PlotlyBarChart from "./plotlyComponents/barchart";
// import PlotlyDoubleAxisChart from "./plotlyComponents/doubleaxischart";
// import PlotlyControlChart from "./plotlyComponents/controlchart";
//import PlotlyIEMonthlyChart from "./editive-initiator/getmonthly";
//import PlotlyCyclopsMonthlyChart from "./editive-initiator/getcyclopsmonthly";

export default class App extends Component {
  render() {
    return (
      <div>
        <Table></Table>
        <PlotlyCyclopsMonthlyChartUsingAPI></PlotlyCyclopsMonthlyChartUsingAPI>
        {/* <PlotlyDoubleAxisChart></PlotlyDoubleAxisChart>
        <PlotlyControlChart></PlotlyControlChart> */}
        {/* <PlotlyLineChartV2></PlotlyLineChartV2>
        <PlotlyLineChart></PlotlyLineChart> */}
        {/* <PlotlyBarChart></PlotlyBarChart> */}
        {/* <table>
          <tr>
            <td>
        <PlotlyLineChart></PlotlyLineChart>   
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <JointLineScatterCharts></JointLineScatterCharts>
            </td>
            <td>
              <BarChart></BarChart>
            </td>
          </tr>
          <tr>
            <td>
              <BarPlot></BarPlot>
            </td>
            <td>
              <PiePlot></PiePlot>
              <BoxPlot></BoxPlot>
            </td>
            <td>
              <TimePlot></TimePlot>
              <SubPlot></SubPlot>
            </td>
          </tr>
        </table> */}
      </div>
    );
  }
}
