import React from "react";

import "./style.css";

import EmailView from "../EmailView";

export default class RightView extends React.PureComponent {
  render = () => {
    return (
      <div className="right-view">
        <div className="right-view__header header">
          <div className="user-avatar"></div>
        </div>
        <div className="right-view__content">
          <EmailView />
        </div>
        <div className="right-view__footer"></div>
      </div>
    );
  };
}
