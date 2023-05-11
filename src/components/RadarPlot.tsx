import React from "react";
import { Radar } from "react-chartjs-2";

const data = {
  labels: ["React", "Vue", "Anugular", "JavaScript", "TypeScript"],
  datasets: [
    {
      label: "Person A",
      backgroundColor: "red",
      borderColor: "blue",
      pointBackgroundColor: "green",
      pointBorderColor: "white",
      data: [5, 6, 9, 15, 30, 40, 80],
    },
    {
      label: "Person B",
      backgroundColor: "red",
      borderColor: "blue",
      pointBackgroundColor: "green",
      pointBorderColor: "white",
      data: [5, 6, 9, 15, 30, 40, 80],
    },
  ],
};

const RadarPlot: React.FC = () => {
  return (
    <div>
      <Radar data={data} />
    </div>
  );
};

export default RadarPlot;
