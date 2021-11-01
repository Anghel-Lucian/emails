import React from "react";

import "./style.css";

export default class Email extends React.PureComponent {

  onClick = () => {
    const {id, changeCurrentEmail} = this.props;

    changeCurrentEmail(id);
  }

  // TODO: replace this with the renderUserAvatar function from App component
  renderUserAvatar = () => {
    const {sender} = this.props;

    return (sender.profilePicture ? (
      <img alt="Sender avatar" src={sender.profilePicture}></img>
    ) : (<p>{sender.firstName[0]}{sender.lastName[0]}</p>));
  }

  render = () => {
    const {
      attachment = false,
      attachmentCount = null,
      subject = '',
      selected = false,
      previewBody = '',
      sender = {},
      date
    } = this.props;

    return (
      <div className={`email ${selected ? "email--selected" : ""}`} onClick={this.onClick} >
        <div className="email__left-bar">
          <div className="avatar avatar--small">{this.renderUserAvatar()}</div>
          <input type="checkbox"></input>
          <button>
            <i className="fas fa-star"></i>
          </button>
        </div>
        <div className="email__main-content">
          <div className="email__meta">
            <div>
              <p className="email__sender">{sender.firstName}{' '}{sender.lastName}</p>
              <div className="email__label"></div>
            </div>
          </div>
          <div className="email__text">
            <p className="email__title">{subject}</p>
            <p className="email__preface">
              {previewBody}
            </p>
          </div>
        </div>
        <div className="email__additional-info">
          <p>{date}</p>
          {attachment ? (
            <div className="email__attachment">
              {attachmentCount ? (
                <p className="email__attachment__count">{attachmentCount}</p>
              ) : null}
              <i className="fas fa-paperclip"></i>
            </div>
          ) : null}
        </div>
      </div>
    );
  };
}
