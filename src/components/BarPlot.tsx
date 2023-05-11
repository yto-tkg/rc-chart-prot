import React from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fir", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo bar plot",
      backgroundColor: "red",
      borderColor: "transparent",
      hoverBackGroundColor: "blue",
      data: [5, 6, 9, 15, 30, 40, 80],
    },
  ],
};

const BarPlot: React.FC = () => {
  return (
    <div>
      <Bar data={data} />
      <HorizontalBar data={data} />
    </div>
  );
};

export default BarPlot;
