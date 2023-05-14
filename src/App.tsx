import React from "react";
import "./App.css";
import LineProt from "./components/LineProt";
import PieProt from "./components/PieProt";
import BarPlot from "./components/BarPlot";
import RadarPlot from "./components/RadarPlot";
import BubblePlot from "./components/BubblePlot";
import MaterialUI from "./components/MaterialUI";

function App() {
  return (
    <div className="App">
      {/* <LineProt />
      <PieProt />
      <BarPlot />
      <RadarPlot />
      <BubblePlot /> */}
      <MaterialUI />
    </div>
  );
}

export default App;
