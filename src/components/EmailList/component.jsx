import React from "react";

import "./style.css";

import Email from "../Email";
import Searchbar from "../Searchbar";

export default class EmailList extends React.PureComponent {
  render = () => {
    return (
      <div id="email-list">
        <div className="email-list__header header">
          <div className="email-list__header__left-item">
            Sort: <span>Newest First</span>
            <i className="fas fa-sort-down"></i>
          </div>
          <div className="email-list__header__right-item">
            <i className="far fa-folder"></i>
            <i className="far fa-bookmark"></i>
            <i className="far fa-trash-alt"></i>
          </div>
        </div>

        <Searchbar />

        <div className="email-list__emails">
          <Email selected="true" />
          <Email attachment="true" />
          <Email />
          <Email attachment="true" attachmentCount={2} />
          <Email />
        </div>
        <div className="email-list__add footer">
          <div>
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>
    );
  };
}
