import React from "react";

import "./style.css";

import EmailView from "../EmailView";

export default class RightView extends React.PureComponent {
  render = () => {
    const {currentEmail = {}} = this.props;

    return (
      <div id="right-view">
        <div id="right-view__header" className="header">
          <div id="user-avatar" className="avatar"></div>
        </div>
        <div id="right-view__content">
          <EmailView currentEmail={currentEmail} />
        </div>
      </div>
    );
  };
}
