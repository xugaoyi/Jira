// 主应用入口组件
import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { ProjectListScreen } from "screens/project-list";
// import { TsReactTest } from "try-use-array";
import { useAuth } from "context/auth-context";
// 已登录的APP
import { AuthenticatedApp } from "authenticated-app";
// 未登录的APP
import { UnauthenticatedApp } from "unauthenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
