// 主应用入口组件
import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { ProjectListScreen } from "screens/project-list";
import { TsReactTest } from "try-use-array";
import { LoginScreen } from "screens/login";

function App() {
  return (
    <div className="App">
      <LoginScreen />
      <hr />
      <ProjectListScreen />
      <hr />
      <TsReactTest />
    </div>
  );
}

export default App;
