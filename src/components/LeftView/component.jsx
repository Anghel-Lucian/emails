import React from "react";

import "./style.css";

import Menu from "../Menu";
import EmailList from "../EmailList";

export default class LeftView extends React.PureComponent {
  render = () => {
    const {emails, changeCurrentEmail, changeEmailsToInbox, changeEmailsToDeleted, changeEmailsToSent } = this.props;

    return (
      <div id="left-view">
        <Menu 
          changeEmailsToInbox={changeEmailsToInbox}
          changeEmailsToDeleted={changeEmailsToDeleted}
          changeEmailsToSent={changeEmailsToSent}
        />
        <EmailList emails={emails} changeCurrentEmail={changeCurrentEmail}/>
      </div>
    );
  };
}
