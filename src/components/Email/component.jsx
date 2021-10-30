import React from "react";

import "./style.css";

export default class Email extends React.PureComponent {
  render = () => {
    const {
      selected = false,
      attachment = false,
      attachmentCount = null,
    } = this.props;

    return (
      <div className={`email ${selected ? "email--selected" : ""}`}>
        <div className="email__left-bar">
          <div className="avatar avatar--small"></div>
          <input type="checkbox"></input>
          <button>
            <i className="fas fa-star"></i>
          </button>
        </div>
        <div className="email__main-content">
          <div className="email__meta">
            <div>
              <p className="email__sender">SCHLONG</p>
              <div className="email__label"></div>
            </div>
          </div>
          <div className="email__text">
            <p className="email__title">You're Hired!</p>
            <p className="email__preface">
              Congrats! You've just been hired boy! Enjoy working your ass off.
            </p>
          </div>
        </div>
        <div className="email__additional-info">
          <p>20.01.2020</p>
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
