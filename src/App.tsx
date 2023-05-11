import React from "react";
import "./App.css";
import LineProt from "./components/LineProt";
import PieProt from "./components/PieProt";
import BarPlot from "./components/BarPlot";
import RadarPlot from "./components/RadarPlot";
import BubblePlot from "./components/BubblePlot";

function App() {
  return (
    <div className="App">
      <LineProt />
      <PieProt />
      <BarPlot />
      <RadarPlot />
      <BubblePlot />
    </div>
  );
}

export default App;
