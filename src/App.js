import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import links from './Pages/links.js';
import Signin from './Pages/Signin.js';
import login from './Pages/login.js';
import modifyaccount from './Pages/modifyaccount.js';
import addcard from './Pages/addcard.js';
import modifycard from './Pages/modifycard.js';
import deletecard from './Pages/deletecard.js';
import balance from './Pages/balance.js';
import deposit from './Pages/deposit.js';
import withdrawal from './Pages/withdrawal.js';
import transfer from './Pages/transfer.js';
import { linkSync } from 'fs';

var users = [];

const user = {
  id: -1,
  first_name: 'string',
  last_name: 'string',
  email: 'email, string unique',
  password: 'string',
  is_admin: 'boolean'
};

class App extends Component {


  constructor(props) {
    super(props);
    this.state = { chat: [] };;
    this.handleSend = this.handleSend.bind(this);
    this.handleSendLoginForm = this.handleSendLoginForm.bind(this);
  }

  handleSendLoginForm(login, password) {
    console.log (`user : ${login}, password: ${password}`);
  }

  allowedUser(user) {
    var found = users.find((name) => {
      return name === user;
    });
    console.log(found);
    return found;
  }

  handleSend(name, text) {
    this.setState({ chat: this.state.chat.concat(`${name}: ${text}`) });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {links()}

          {Signin(this)}
          {login(this)}
          {modifyaccount()}
          {addcard()}
          {modifycard()}
          {deletecard()}
          {balance()}
          {deposit()}
          {withdrawal()}
          {transfer()}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
