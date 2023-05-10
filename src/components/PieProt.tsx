import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Windows", "Mac", "Linux"],
  datasets: [
    {
      data: [90, 7, 3],
      backGroundColor: ["red", "blue", "green"],
      hoverBackGroundColor: ["red", "blue", "green"],
      borderColor: ["red", "blue", "green"],
    },
  ],
};

const PieProt: React.FC = () => {
  return (
    <div>
      <Pie data={data} />
      <Doughnut data={data} />
    </div>
  );
};

export default PieProt;
