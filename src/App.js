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
    this.handleSendSigninForm = this.handleSendSigninForm.bind(this);
  }

  /** BUTTON HANDLE */
  handleSendLoginForm(obj) {
    console.log(`email : ${obj.email}, password: ${obj.password}`);
  }

  handleSendSigninForm(obj) {
    usr=new user();
    addObjectToList
    console.log(`first_name : ${obj.first_name}, last_name : ${obj.last_name}, email : ${obj.email}, password : ${obj.password}`);
  }

  handleSend(name, text) {
    this.setState({ chat: this.state.chat.concat(`${name}: ${text}`) });
  }

  /** LISTS MANIPULATION */
  addObjectToList(list, object) {
    var newIndex = list.length;//number of item, but list[0] is the first one
    var newId = 0;

    for (var i = 0; i < newIndex; i++) {
      if (list[i].id > newId) {
        newId = list[i].id;
      }
    }
    newId += 1;

    list.push(Object.create(object));
    list[newIndex].id = newId;

    return newId;
  }

  printList(list) {
    list.forEach(function (item, index, list) {
      item.print();
    });
  }

  findObject(list, idSearched) {
    var item;
    for (var i = 0; i < list.length; i++) {
      item = list[i];
      if (item.id == idSearched) {
        return (item)
      }
    }
  }

  findIndexObject(list, idSearched) {
    var item;
    for (var i = 0; i < list.length; i++) {
      item = list[i];
      if (item.id == idSearched) {
        return (i);
      }
    }
  }

  editUser(listU, idU, fn, ln, e, p, ia) {
    var index = findIndexObject(listU, idU);
    listUsers[index].first_name = fn;
    listUsers[index].last_name = ln;
    listUsers[index].email = e;
    listUsers[index].password = p;
    listUsers[index].is_admin = ia;
    //listUsers[index].print();
  }

  allowedUser(user) {
    var found = users.find((name) => {
      return name === user;
    });
    console.log(found);
    return found;
  }


  /** RENDER */
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
