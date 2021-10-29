import React from "react";

import "./style.css";

export default class MenuCategory extends React.PureComponent {
  render = () => {
    const { icon, content, count, selected } = this.props;

    return (
      <button className={`category__btn ${selected ? "selected" : ""}`}>
        <div className="category__content">
          <i className={`fas fa-${icon} category__icon`} />
          <p>{content}</p>
        </div>
        <div className="category__count">
          <p>{count}</p>
        </div>
      </button>
    );
  };
}
