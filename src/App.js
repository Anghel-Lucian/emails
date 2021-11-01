import React from "react";

import emailsJSON from './data/emails.json'
import contactsJSON from './data/contacts.json'
import userJSON from './data/user.json'
import "./App.css";

import { LeftView, RightView } from "./components";

let emails;
let contacts;
let user;
let deletedEmails;
let inboxEmails;
let sentEmails;

const parseJSON = () => {
  
  emails = emailsJSON.map((data) => {
    return data;
  });

  contacts = contactsJSON.map((data) => {
    return data;
  });

  user = userJSON.map((data) => {
    return data
  })[0];

  emails = emails.map(email => {
    const [sender] = contacts.filter(contact => contact.email === email.fromAddress && email.fromAddress !== user.email);

    return {...email, previewBody: email.body.substring(0, 100), sender: sender, selected: false, checkSelected: false };
  });

  deletedEmails = emails.filter(email => email.isDeleted);

  inboxEmails = emails.filter(email => !email.isDeleted && email.fromAddress !== user.email);

  sentEmails = emails.filter(email => email.fromAddress === user.email).map(email => {
      return {...email, previewBody: email.body.substring(0, 100), sender: user, selected: false, checkSelected: false };
  });

  // console.log(deletedEmails);
  // console.log(emails);
  // console.log(contacts);
  console.log(user);
  console.log(sentEmails);
}
parseJSON();


export default class App extends React.PureComponent {
  state = {
    emails: emails,
    deletedEmails: deletedEmails,
    inboxEmails: inboxEmails,
    currentEmail: emails[0],
    user: {
      ...user,
      sentEmails: sentEmails,
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
    console.log(user);

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

        <RightView currentEmail={currentEmail} user={user} />
      </div>
    );
  };
}
