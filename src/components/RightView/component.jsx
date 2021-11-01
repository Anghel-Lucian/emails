import React from "react";

import "./style.css";

import EmailView from "../EmailView";

export default class RightView extends React.PureComponent {
  renderUserAvatar = () => {
    const {user} = this.props;

    if(!user) return;

    return (user.profilePicture ? (
      <img alt="user avatar" src={user.profilePicture}></img>
    ) : (<p>{user.firstName[0]}{user.lastName[0]}</p>));
  }

  render = () => {
    const {currentEmail = {}, user} = this.props;

    return (
      <div id="right-view">
        <div id="right-view__header" className="header">
          <div id="user-avatar" className="avatar">
            {this.renderUserAvatar()}
          </div>
        </div>
        <div id="right-view__content">
          <EmailView currentEmail={currentEmail} user={user} />
        </div>
      </div>
    );
  };
}
