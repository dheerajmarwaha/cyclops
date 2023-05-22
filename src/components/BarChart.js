import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

import { UserData } from "../Data/data";

function BarChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });
  return (
    <div>
      <h1>Bar chart using chart.js</h1>
      <Bar data={userData} />
    </div>
  );
}

export default BarChart;
