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

var listUsers = [];

const user = {
  id: -1,
  first_name: 'string',
  last_name: 'string',
  email: 'email, string unique',
  password: 'string',
  is_admin: 'boolean',
  print() {
    console.log("id:" + this.id + " first_name:" + this.first_name + " last_name:" + this.last_name + " email:" + this.email + " password:" + this.password + " is_admin:" + this.is_admin);
  }
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
    //console.log(`email : ${obj.email}, password: ${obj.password}`);
    var id = this.validUser(obj.email, obj.password);
    if (id >= 0) {
      var index = this.findIndexObject(listUsers, id);
      console.log("Bienvenue " + listUsers[index].first_name);
    }
    else {
      console.log("NOPE");
    }
  }

  handleSendSigninForm(obj) {
    //console.log(`first_name : ${obj.first_name}, last_name : ${obj.last_name}, email : ${obj.email}, password : ${obj.password}`);
    this.addUser(listUsers, obj.first_name, obj.last_name, obj.email, obj.password, false);
    //this.printList(listUsers);
  }

  handleSend(name, text) {
    this.setState({ chat: this.state.chat.concat(`${name}: ${text}`) });
  }

  /** LISTS MANIPULATION */
  validUser(mail, pswd) {
    var item;
    for (var i = 0; i < listUsers.length; i++) {
      item = listUsers[i];
      if (item.email == mail & item.password == pswd) {
        return item.id;
      }
    }
    return -1;
  }

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
    console.log("la liste : ");
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

  editUser(list, idU, fn, ln, e, p, ia) {
    var index = this.findIndexObject(list, idU);
    list[index].first_name = fn;
    list[index].last_name = ln;
    list[index].email = e;
    list[index].password = p;
    list[index].is_admin = ia;
    //listUsers[index].print();
  }

  addUser(list, fn, ln, e, p, ia) {
    var id = this.addObjectToList(list, user)
    var index = this.findIndexObject(list, id);
    list[index].first_name = fn;
    list[index].last_name = ln;
    list[index].email = e;
    list[index].password = p;
    list[index].is_admin = ia;
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
