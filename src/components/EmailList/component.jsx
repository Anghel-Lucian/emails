import React from "react";

import "./style.css";

import Email from "../Email";
import Searchbar from "../Searchbar";

export default class EmailList extends React.PureComponent {

  renderedEmails = () => {
    const {emails, changeCurrentEmail, renderUserAvatar} = this.props;

    return emails.map((email) => {
      const {subject, previewBody, selected, sender, id, date} = email;

      return (
        <Email subject={subject} previewBody={previewBody} selected={selected} sender={sender} id={id} key={id} date={date} changeCurrentEmail={changeCurrentEmail} renderUserAvatar={renderUserAvatar}/>
      )
    })
  }

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
          {this.renderedEmails()}
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
