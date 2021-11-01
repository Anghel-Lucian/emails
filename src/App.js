import React from "react";

import emailsJSON from './data/emails.json'
import contactsJSON from './data/contacts.json'
import userJSON from './data/user.json'
import "./App.css";

import { LeftView } from "./components";
import { RightView } from "./components";

let emails;
let contacts;
let user;

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

  // console.log(emails);
  // console.log(contacts);
  // console.log(user);
}
parseJSON();


export default class App extends React.PureComponent {
  state = {
    emails: emails,
    deletedEmails: [],
    currentEmail: {},
    user: {
      ...user[0],
      sentEmails: [],
    }
  }

  changeCurrentEmail = (id) => {
    this.setState((state, props) => {
      return state.currentEmail = state.emails.find(email => email.id === id);
    })
  }

  render = () => {
    const { emails, currentEmail } = this.state;

    return (
      <div id="app">
        <LeftView emails={emails} changeCurrentEmail={this.changeCurrentEmail} />

        <RightView currentEmail={currentEmail} />
      </div>
    );
  };
}
