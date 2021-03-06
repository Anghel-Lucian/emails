import React from "react";

import "./style.css";

import Menu from "../Menu";
import EmailList from "../EmailList";

export default class LeftView extends React.PureComponent {
  render = () => {
    return (
      <div id="left-view">
        <Menu />
        <EmailList />
      </div>
    );
  };
}
