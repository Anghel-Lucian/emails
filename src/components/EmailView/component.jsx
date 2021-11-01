import React from "react";

import "./style.css";

export default class EmailView extends React.PureComponent {
  render = () => {
    const {sender = {}, date = '', subject = '', body = ''} = this.props.currentEmail;

    console.log(sender, date, subject, body);

    return (
      <div className="email-view">
        <div className="email-view__meta">
          <div className="email-view__meta__sender-info">
            <div className="sender-avatar avatar"></div>
            <div className="sender-name">{sender.firstName}{' '}{sender.lastName}</div>
          </div>
          <div className="email-view__meta__date">
            <i className="fas fa-clock"></i>
            {date}
          </div>
        </div>
        <div className="email-view__title">{subject}</div>
        <div className="email-view__content">
          <p>{body}</p>
        </div>
        <div className="email-view__footer footer">
          <div className="email-view__footer__text">
            Click here to{" "}
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Reply</a> or{" "}
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forward</a>{" "}
            {sender.firstName}'s message
          </div>
          <div className="email-view__footer__icons">
            <div className="icon secondary-icon">
              <i className="fas fa-paperclip"></i>
            </div>

            <div className="icon main-icon">
              <i className="fas fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
