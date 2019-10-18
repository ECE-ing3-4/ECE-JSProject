import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import links from './pages/Links.js';

import Signin from './pages/SignUp.js';
import login from './pages/Login.js';
import modifyaccount from './pages/ModifyAccount.js';
import addcard from './pages/AddCard.js';
import modifycard from './pages/ModifyCard.js';
import deletecard from './pages/DeleteCard.js';
import balance from './pages/Balance.js';
import deposit from './pages/Deposit.js';
import withdrawal from './pages/Withdrawal.js';
import transfer from './pages/Transfer.js';

var listUsers = [];
var listWallets = [];
var listCards = [];
var currentUser = -1;
var acceptNotLogin = true;//debug

const user = {
  id: -1,
  first_name: 'string',
  last_name: 'string',
  email: 'email, string unique',
  password: 'string',
  is_admin: false,
  print() {
    console.log("USER : id:" + this.id + " first_name:" + this.first_name + " last_name:" + this.last_name + " email:" + this.email + " password:" + this.password + " is_admin:" + this.is_admin);
  }
};

const card = {
  id: -1,
  user_id: -1,
  last_4: 0,
  brand: '',
  expired_at: '',
  print() {
    console.log("CARD : id:" + this.id + " user_id:" + this.user_id + " last_4:" + this.last_4 + " brand:" + this.brand + " expired_at:" + this.expired_at);
  }
};

const wallet = {
  id: -1,
  user_id: -1,
  balance: 0,
  print() {
    console.log("WALLET : id:" + this.id + " user_id:" + this.user_id + " balance:" + this.balance);
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chat: [] };;
    //this.handleSend = this.handleSend.bind(this);
    this.handleSendLoginForm = this.handleSendLoginForm.bind(this);
    this.handleSendSignupForm = this.handleSendSignupForm.bind(this);
    this.handleSendAddCardForm = this.handleSendAddCardForm.bind(this);
    this.handleDepositForm = this.handleDepositForm.bind(this);
  }

  /** BUTTON HANDLE */
  handleSendLoginForm(obj) {
    //console.log(`email : ${obj.email}, password: ${obj.password}`);
    var id = this.validUser(obj.email, obj.password);
    if (id >= 0) {
      currentUser = id;
      var index = this.findIndexObject(listUsers, id);
      alert("Bienvenue " + listUsers[index].first_name);
    }
    else {
      alert("NOPE");
    }
  }

  handleSendSignupForm(obj) {
    //console.log(`${obj.first_name} Added !`);
    this.addUser(listUsers, obj.first_name, obj.last_name, obj.email, obj.password, false);
    this.addWallet(listWallets, 0);
    this.printList(listUsers);
    //console.log(`first_name : ${obj.first_name}, last_name : ${obj.last_name}, email : ${obj.email}, password : ${obj.password}`);
    //this.printList(listUsers);
  }


  handleSendAddCardForm(obj) {
    if (currentUser > 0 || acceptNotLogin) {
      this.addCard(listCards, currentUser, obj.brand);
      this.printList(listCards);
    }
    else {
      console.log("You have to login first !");
    }
  }

  handleDeleteCardForm(obj) {
    if (currentUser > 0 || acceptNotLogin) {
      let deletedWell = false;
      console.log(listCards[0].last_4);
      console.log(listCards[1].last_4);
      for (var i = 0; i < listCards.length; i++) {
        console.log(listCards[i].last_4);
        if (currentUser == listCards[i].user_id && listCards[i].last_4 == obj.last_4) {
          alert("programmer pour supp la carte");
          deletedWell = true;
        }
      }
      if (!deletedWell) {
        alert("Card not found");
      }

      else {
        alert("Log in first please !");
      }
    }
  }

  findWalletUser(idUser) {
    var wallet;
    for (var i = 0; i < listWallets.length; i++) {
      wallet = listWallets[i];
      if (wallet.user_id == idUser) {
        return (wallet);
      }
    }
    return null;//not found
  }

  handleDepositForm(obj) {
    if (currentUser > 0 || acceptNotLogin) {

      var wallet = this.findWalletUser(currentUser);
      console.log(wallet == null);
      if (wallet != null) {
        wallet.balance += parseInt(obj.amount);
        console.log(wallet);
      }
      else {
        alert("Create an account first !");//... and this will create a wallet
      }
    }

    else {
      alert("Log in first please !");
    }

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
    console.log(list);

    for (var i = 0; i < newIndex; i++) {
      if (list[i].id > newId) {
        newId = list[i].id;
      }
    }
    newId += 1;

    list.push(object);
    list[newIndex].id = newId;

    return newId;
  }

  printList(list) {
    console.log("la liste : ");
    for (var i = 0; i < list.length; i++) {
      list[i].print();
    }
    console.log("fin liste");
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
    //console.log("DEBUT FOR");
    var item;
    for (var i = 0; i < list.length; i++) {
      item = list[i];
      //item.print();
      //console.log(item.id + " vs " + idSearched);
      if (item.id == idSearched) {
        //console.log("FIN FOR TROUVE");
        return (i);
      }
    }
    //console.log("FIN FOR NON TROUVE");
    return -1;
  }

  editUser(list, idU, fn, ln, e, p, ia) {
    var index = this.findIndexObject(list, idU);
    list[index].first_name = fn;
    list[index].last_name = ln;
    list[index].email = e;
    list[index].password = p;
    list[index].is_admin = ia;
    list[index].print();
  }

  addUser(list, fn, ln, e, p, ia) {
    var id = this.addObjectToList(list, user);
    var index = this.findIndexObject(list, id);
    list[index].first_name = fn;
    list[index].last_name = ln;
    list[index].email = e;
    list[index].password = p;
    list[index].is_admin = ia;
    list[index].print();
  }

  addWallet(list, bal) {
    var id = this.addObjectToList(list, wallet);
    var index = this.findIndexObject(list, id);
    list[index].balance = bal;
    list[index].print();
  }

  getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getDateExp() {
    var ladate = new Date()
    const current_date = { mm: -1, yyyy: -1 };
    current_date.mm = this.getRandom(12) + 1;
    current_date.yyyy = ladate.getFullYear() + (this.getRandom(3) + 1);
    //console.log('La date d expiration  est le ', current_date.mm, ' / ', current_date.yyyy)
    return (current_date.mm + '/' + current_date.yyyy);
  }

  lastFourDigits() {
    return this.getRandom(9000) + 1000;
  }

  addCard(list, user_id, brand) {
    var id = this.addObjectToList(list, card);
    var index = this.findIndexObject(list, id);
    console.log("ID " + id + " INDEX " + index);
    list[index].user_id = user_id;
    list[index].brand = brand;
    list[index].last_4 = this.lastFourDigits();
    list[index].expired_at = this.getDateExp();
    list[index].print();
  }

  connected() {
    return (currentUser > 0);
  }

  acceptNotLoginFnc(){
    return acceptNotLogin;
  }

  /** RENDER */
  render() {
    return (
      <BrowserRouter>
        <div>
          {links()}
          {Signin(this)}
          {login(this)}
          {modifyaccount(this)}
          {addcard(this)}
          {modifycard(this)}
          {deletecard(this)}
          {balance(this)}
          {deposit(this)}
          {withdrawal(this)}
          {transfer(this)}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
