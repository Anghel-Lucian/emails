import React from "react";

import "./App.css";

import { LeftView } from "./components";
import { RightView } from "./components";

export default class App extends React.PureComponent {
  render = () => {
    return (
      <div id="app">
        <LeftView />

        <RightView />
      </div>
    );
  };
}
