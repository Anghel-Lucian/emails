import React from "react";

import "./style.css";

export default class Email extends React.PureComponent {
  render = () => {
    return (
      <div className="email">
        <div className="email__left-bar">
          <div></div>
          <input type="checkbox"></input>
          <button>
            <i className="fas fa-star"></i>
          </button>
        </div>
        <div className="email__main-content">
          <div className="email__meta">
            <div className="email__meta__left-item">
              <p className="email__sender">SCHLONG</p>
              <div className="email__label"></div>
            </div>
            <p className="email__date">20.01.2020</p>
          </div>
          <div className="email__text">
            <p className="email__title">You're Hired!</p>
            <p className="email__preface">
              Congrats! You've just been hired boy! Enjoy working your ass off.
            </p>
          </div>
        </div>
      </div>
    );
  };
}
