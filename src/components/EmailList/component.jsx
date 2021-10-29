import React from "react";

export default class EmailList extends React.PureComponent {
  render = () => {
    return (
      <div className="email-list">
        <div className="email-list__header"></div>
        <div className="email-list__searchbar"></div>
        <div className="email-list__emails"></div>
        <div className="email-list__add"></div>
      </div>
    );
  };
}
