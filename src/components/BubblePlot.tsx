import React from "react";
import { Bubble } from "react-chartjs-2";

const data = {
  datasets: [
    {
      label: "React",
      backgroundColor: "red",
      borderColor: "transparent",
      data: [{ x: 20, y: 866, r: 63.5 }],
    },
    {
      label: "Angular",
      backgroundColor: "red",
      borderColor: "transparent",
      data: [{ x: 20, y: 866, r: 63.5 }],
    },
    {
      label: "Vue",
      backgroundColor: "red",
      borderColor: "transparent",
      data: [{ x: 20, y: 866, r: 63.5 }],
    },
  ],
};

const options = {
  title: {
    display: true,
    fontSize: 18,
    text: "NPM downloads comparison",
  },
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Number of job offer in LinkedIn",
          fontSize: 18,
        },
        ticks: {
          min: 0,
          max: 1300,
          fontSize: 14,
        },
      },
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Number of job offer in LinkedIn",
          fontSize: 18,
        },
        ticks: {
          min: 0,
          max: 1300,
          fontSize: 14,
        },
      },
    ],
  },
};

const BubblePlot: React.FC = () => {
  return (
    <div>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default BubblePlot;
