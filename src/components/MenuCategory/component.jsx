import React from "react";

import "./style.css";

export default class MenuCategory extends React.PureComponent {
  render = () => {
    const { icon, iconType, content, count, selected, changeEmailsTo } = this.props;

    return (
      <button className={`category__btn ${selected ? "selected" : ""}`} onClick={changeEmailsTo}>
        <div className="category__content">
          <div>
            <i
              className={`${
                iconType ? iconType : "fas"
              } fa-${icon} category__icon`}
            />
          </div>
          <p>{content}</p>
        </div>
        <div className="category__count">{count ? <p>{count}</p> : null}</div>
      </button>
    );
  };
}
