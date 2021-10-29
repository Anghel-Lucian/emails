import React from "react";

import "./style.css";

import Button from "../Button";
import MenuCategory from "../MenuCategory";

export default class Menu extends React.PureComponent {
  render = () => {
    return (
      <div className="menu">
        <div className="menu__header">DCU</div>
        <div className="menu__create-message">
          <Button content="Create Message" />
        </div>
        <div className="menu__categories">
          <MenuCategory
            icon="inbox"
            content="Inbox"
            count={9}
            selected={true}
          />
          <MenuCategory icon="paper-plane" content="Sent" count={123} />
          <MenuCategory icon="trash-alt" content="Deleted" count={55} />
        </div>
        <div className="menu__labels">
          <div className="menu__labels__title">
            <p>Labels</p>
            <div className="menu__labels__title__icon">
              <i className="fas fa-pen" />
            </div>
          </div>
          <div className="label-list">
            <div className="label label--personal">
              <i className="fas fa-circle" />
              <div className="label__title">Personal</div>
            </div>
            <div className="label label--family">
              <i className="fas fa-circle" />
              <div className="label__title">Family</div>
            </div>
            <div className="label label--friends">
              <i className="fas fa-circle" />
              <div className="label__title">Friends</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
