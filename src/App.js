import React from "react";

import emailsJSON from './data/emails.json'
import contactsJSON from './data/contacts.json'
import userJSON from './data/user.json'
import "./App.css";

import { LeftView, RightView, EmailList } from "./components";

let emails;
let contacts;
let user;
let deletedEmails;
let inboxEmails;

const parseJSON = () => {
  
  emails = emailsJSON.map((data) => {
    return data;
  });

  contacts = contactsJSON.map((data) => {
    return data;
  });

  user = userJSON.map((data) => {
    return data
  });

  emails = emails.map(email => {
    const [{firstName, lastName, profilePicture}] = contacts.filter(contact => contact.email === email.fromAddress);

    return {...email, previewBody: email.body.substring(0, 100), sender: {firstName, lastName, profilePicture}, selected: false, checkSelected: false };
  });

  deletedEmails = emails.filter(email => email.isDeleted);

  inboxEmails = emails.filter(email => !email.isDeleted);

  // console.log(deletedEmails);
  // console.log(emails);
  // console.log(contacts);
  // console.log(user);
}
parseJSON();


export default class App extends React.PureComponent {
  state = {
    emails: emails,
    deletedEmails: deletedEmails,
    inboxEmails: inboxEmails,
    currentEmail: emails[0],
    user: {
      ...user[0],
      sentEmails: [],
    },
    emailsFolder: 'inbox',
    renderedEmails: [],
  }

  // TODO: use this function where you render avatars
  // renderUserAvatar = (email) => {
  //   const {sender} = email;

  //   return (sender.profilePicture ? (
  //     <img alt="Sender avatar" src={sender.profilePicture}></img>
  //   ) : (<p>{sender.firstName[0]}{sender.lastName[0]}</p>));
  // }

  componentDidMount = () => {
    this.setState((state, props) => ({renderedEmails: state.inboxEmails}))
  }

  changeEmailsToInbox = () => {
    this.setState((state, props) => ({renderedEmails: state.inboxEmails}))
  }

  changeEmailsToSent = () => {
    this.setState((state, props) => ({renderedEmails: state.user.sentEmails}))
  }

  changeEmailsToDeleted = () => {
    this.setState((state, props) => ({renderedEmails: state.deletedEmails}))
  }

  changeCurrentEmail = (id) => {
    this.setState((state, props) => (
      {currentEmail: state.emails.find(email => email.id === id)}
    ))
  }

  render = () => {
    const { renderedEmails, currentEmail } = this.state;

    return (
      <div id="app">
        <LeftView 
          emails={renderedEmails} 
          changeCurrentEmail={this.changeCurrentEmail} 
          changeEmailsToInbox={this.changeEmailsToInbox} 
          changeEmailsToDeleted={this.changeEmailsToDeleted} 
          changeEmailsToSent={this.changeEmailsToSent}
        />

        <RightView currentEmail={currentEmail} />
      </div>
    );
  };
}
