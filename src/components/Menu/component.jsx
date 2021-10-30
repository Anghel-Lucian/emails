import React from "react";

import "./style.css";

import Button from "../Button";
import MenuCategory from "../MenuCategory";

export default class Menu extends React.PureComponent {
  render = () => {
    return (
      <div id="menu">
        <div className="menu__header header">
          <p>DCU</p>
          <div>
            <i className="far fa-bell"></i>
          </div>
        </div>
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
          <MenuCategory icon="star" iconType="far" content="Marked" />
          <MenuCategory icon="user-friends" content="Group" />
          <MenuCategory icon="pen" content="Drafts" />
          <MenuCategory icon="paper-plane" content="Sent" count={123} />
          <MenuCategory icon="trash-alt" content="Deleted" />
          <MenuCategory icon="trash" content="Spam" count={55} />
        </div>
        <div className="menu__labels">
          <div className="menu__labels__title">
            <p>Labels</p>
            <div>
              <div className="main-icon">
                <i className="fas fa-pen" />
              </div>
              <div className="main-icon">
                <i className="fas fa-plus" />
              </div>
            </div>
          </div>
          <div className="label-list">
            <div className="label label--personal">
              <div className="circle red"></div>
              <div className="label__title">Personal</div>
            </div>
            <div className="label label--family">
              <div className="circle yellow"></div>
              <div className="label__title">Family</div>
            </div>
            <div className="label label--friends">
              <div className="circle blue"></div>
              <div className="label__title">Friends</div>
            </div>
            <div className="label label--friends">
              <div className="circle purple"></div>
              <div className="label__title">Work</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
