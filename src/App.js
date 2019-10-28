import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import links from './Pages/Links.js';

import Signup from './Pages/SignUp.js';
import login from './Pages/Login.js';
import logout from './Pages/Logout.js';
import modifyaccount from './Pages/ModifyAccount.js';
import addcard from './Pages/AddCard.js';
import modifycard from './Pages/ModifyCard.js';
import deletecard from './Pages/DeleteCard.js';
import balance from './Pages/Balance.js';
import deposit from './Pages/Deposit.js';
import withdrawal from './Pages/Withdrawal.js';
import transfer from './Pages/Transfer.js';

if (localStorage.getItem('listUsers') == null) {
  localStorage.setItem('listUsers', JSON.stringify([]));
}

//var listUsers = [];
var listWallets = [];
var listCards = [];
var acceptNotLogin = false;//debug
var acceptEmptyFields = false;//debug

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chat: [] };;
    //this.handleSend = this.handleSend.bind(this);
    this.handleSendLoginForm = this.handleSendLoginForm.bind(this);
    this.handleSendLogoutForm = this.handleSendLogoutForm.bind(this);
    this.handlePrintForm = this.handlePrintForm.bind(this);
    this.handleSendSignupForm = this.handleSendSignupForm.bind(this);
    this.handleBrandChangeForm = this.handleBrandChangeForm.bind(this);
    this.handleSendAddCardForm = this.handleSendAddCardForm.bind(this);
    this.handleDeleteCardForm = this.handleDeleteCardForm.bind(this);
    this.handleDepositForm = this.handleDepositForm.bind(this);
    this.handleWithdrawalForm = this.handleWithdrawalForm.bind(this);
    this.handleSendTransferForm = this.handleSendTransferForm.bind(this);
    this.handleChangePasswordForm = this.handleChangePasswordForm.bind(this);
  }

  getCurrentID() {
    return localStorage.getItem('currentUserID');
  }

  /** BUTTON HANDLE */
  handleSendLoginForm(obj) {
    var id = this.validUser(obj.email, obj.password);
    if (id >= 0) {//if valid
      localStorage.setItem('currentUserID', id);

      var listUsers = JSON.parse(localStorage.getItem('listUsers'));

      var index = this.findIndexObject(listUsers, id);
      alert("Welcome " + listUsers[index].first_name + " ! You're now connected :)");
    }
    else {
      alert("Invalid credentials !");
    }
  }

  handleSendLogoutForm() {
    if (localStorage.getItem('currentUserID') > 0) {
      localStorage.setItem('currentUserID', -1);
      alert("Bye Bye");
    }
  }

  handlePrintForm(obj) {
    console.log(obj);
  }

  handleSendSignupForm(obj) {
    //Adding user
    var indexNewUser = this.addUser(obj.first_name, obj.last_name, obj.email, obj.password, false);
    if (indexNewUser >= 0) {//user addded succefully
      var listUsers = JSON.parse(localStorage.getItem('listUsers'));

      var newId = listUsers[indexNewUser].id;
      //Ading wallet
      var indexNewWallet = this.addWallet(listWallets, 0);
      listWallets[indexNewWallet].user_id = newId;
      //alert(`Account created : ${obj.first_name}`);
      this.handleSendLoginForm(obj)//autologin
      console.log(listUsers);
      console.log(listWallets);
    }
  }


  findCard(destinationCardDigits) {
    //find the card
    var card;
    for (var i = 0; i < listCards.length; i++) {
      card = listCards[i];
      if (card.last_4 == destinationCardDigits && listCards[i].id != -1) {
        return card;
      }
    }
    return -1; //card not found
  }

  handleBrandChangeForm(obj) {
    if (localStorage.getItem('currentUserID') > 0 || acceptNotLogin) {
      var card = this.findCard(obj.last_4);
      if (card != -1) {
        if (card.user_id == localStorage.getItem('currentUserID')) {
          alert("Your " + card.brand + " card is now a " + obj.newBrand + " card");
          card.brand = obj.newBrand;
          console.log(listCards);
        }
        else {
          alert("This card is not yours !");
        }
      }
      else {
        alert('Card not found !');
      }
    }
    else {
      alert("You have to login first !");
    }
  }

  handleSendAddCardForm(obj) {
    if (localStorage.getItem('currentUserID') > 0 || acceptNotLogin) {
      this.addCard(listCards, localStorage.getItem('currentUserID'), obj.brand);
      console.log(listCards);
    }
    else {
      alert("You have to login first !");
    }
  }

  handleDeleteCardForm(obj) {
    if (localStorage.getItem('currentUserID') > 0 || acceptNotLogin) {
      let deletedWell = false;
      for (var i = 0; i < listCards.length; i++) {
        if (localStorage.getItem('currentUserID') == listCards[i].user_id && listCards[i].last_4 == obj.last_4) {
          if (listCards[i].id != -1) {
            //listCards.slice(i, 1);
            listCards[i].id = -1;
            listCards[i].user_id = -1;
            alert("Card deleted !");
            deletedWell = true;
            console.log(listCards);
          }
        }
      }
      if (!deletedWell) {
        alert("Card not found !");
      }
    }
    else {
      alert("Log in first please !");
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

  findUser(idUser) {
    var listUsers = JSON.parse(localStorage.getItem('listUsers'));
    var usr;
    for (var i = 0; i < listUsers.length; i++) {
      usr = listUsers[i];
      if (usr.id == idUser) {
        return (usr);
      }
    }
    return null;//not found
  }

  depoWithdraWallet(wallet, amount) {
    if (wallet != null) {
      if (amount > 0) {
        wallet.balance += amount;
        alert(`Succesfully deposited ${amount} !`);
      }
      else {
        if (-amount <= wallet.balance) {
          wallet.balance += amount;
          alert(`Succesfully withdrawed ${-amount} !`);
        }
        else {
          alert(`Invalid amount : not enough money !`);
        }
      }
    }
    else {
      alert("Log in first !");
    }
  }

  handleDepositForm(obj) {
    if (localStorage.getItem('currentUserID') > 0 || acceptNotLogin) {
      var wallet = this.findWalletUser(localStorage.getItem('currentUserID'));
      this.depoWithdraWallet(wallet, parseInt(obj.amount));
      console.log(listWallets);
    }
    else {
      alert("Log in first !");
    }
  }

  handleWithdrawalForm(obj) {
    obj.amount = - obj.amount;
    this.handleDepositForm(obj);
    console.log(listWallets);
  }

  findRecipientWallet(destinationCardDigits) {
    //find the card
    var recipientCard = this.findCard(destinationCardDigits);

    //find the owner of this card
    return this.findWalletUser(recipientCard.id);
  }

  handleChangePasswordForm(obj) {
    if (localStorage.getItem('currentUserID') > 0 || acceptNotLogin) {
      var usr = this.findUser(localStorage.getItem('currentUserID'));
      if (usr.password == obj.oldPassword) {
        if (obj.newPassword == obj.newPasswordConfirmation) {
          usr.password = obj.newPassword;
          alert("Password changed succcesfully !");
          var listUsers = JSON.parse(localStorage.getItem('listUsers'));
          console.log(listUsers);
        }
        else {
          alert("New passwords doesn't match !");
        }
      }
      else {
        alert("Wrong old password !");
      }
    }
    else {
      alert("You have to login first !");
    }
  }

  handleSendTransferForm(obj) {
    if (localStorage.getItem('currentUserID') > 0 || acceptNotLogin) {
      if (obj.amount > -1) {

        //alert(obj.amount + " : " + obj.destinationCardDigits);
        var yourWallet = this.findWalletUser(localStorage.getItem('currentUserID'));
        var recipientWallet = this.findRecipientWallet(obj.destinationCardDigits);
        this.depoWithdraWallet(recipientWallet, parseInt(obj.amount));
        this.depoWithdraWallet(yourWallet, -parseInt(obj.amount));
        console.log(listWallets);
      }
      else {
        alert("hehe, NOPE !");
      }
    }
    else {
      alert("You have to login first !");
    }
  }

  handleSend(name, text) {
    this.setState({ chat: this.state.chat.concat(`${name}: ${text}`) });
  }

  /** LISTS MANIPULATION */
  validUser(mail, pswd) {
    var listUsers = JSON.parse(localStorage.getItem('listUsers'));
    var item;
    for (var i = 0; i < listUsers.length; i++) {
      item = listUsers[i];
      if (item.email == mail) {//the user exists
        if (item.password == pswd) {//valid password
          return item.id;
        }
        else {//invalid password
          return -2;
        }
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

  findObjectWithId(list, idSearched) {
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

  editUser(userItem, fn, ln, e, p, ia) {
    userItem.first_name = fn;
    userItem.last_name = ln;
    userItem.email = e;
    userItem.password = p;
    userItem.is_admin = ia;
    //list[index].print();
  }

  addUser(fn, ln, e, p, ia) {
    var list = JSON.parse(localStorage.getItem('listUsers'));
    if (this.validUser(e, "") == -1) {//email not found
      var user = {
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

      var id = this.addObjectToList(list, user);
      var index = this.findIndexObject(list, id);
      list[index].first_name = fn;
      list[index].last_name = ln;
      list[index].email = e;
      list[index].password = p;
      list[index].is_admin = ia;
      //list[index].print();

      console.log("XXXXXXXX");
      console.log("list a copier");
      console.log(list);
      console.log("contenu a copier");
      console.log(JSON.stringify(list));
      localStorage.setItem('listUsers', JSON.stringify(list));
      var list2 = JSON.parse(localStorage.getItem('listUsers'));
      console.log("contenu recuperé");
      console.log(list2);
      console.log("XXXXXXXX");

      return index;
    }
    else {
      alert("This email is already used !");
      return -1;
    }
  }

  addWallet(list, bal) {
    var wallet = {
      id: -1,
      user_id: -1,
      balance: 0,
      print() {
        console.log("WALLET : id:" + this.id + " user_id:" + this.user_id + " balance:" + this.balance);
      }
    };

    var id = this.addObjectToList(list, wallet);
    var index = this.findIndexObject(list, id);
    list[index].balance = bal;
    //list[index].user_id=currentUser;//inutile car on vient de sign up, pas de log in
    //list[index].print();
    return index;
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
    var card = {
      id: -1,
      user_id: -1,
      last_4: 0,
      brand: '',
      expired_at: '',
      print() {
        console.log("CARD : id:" + this.id + " user_id:" + this.user_id + " last_4:" + this.last_4 + " brand:" + this.brand + " expired_at:" + this.expired_at);
      }
    };

    var id = this.addObjectToList(list, card);
    var index = this.findIndexObject(list, id);
    //console.log("ID " + id + " INDEX " + index);
    list[index].user_id = user_id;
    list[index].brand = brand;
    list[index].last_4 = this.lastFourDigits();
    list[index].expired_at = this.getDateExp();
    //list[index].print();
    alert("Your new " + brand + " card expire at " + list[index].expired_at + " and the last 4 digits are " + list[index].last_4);
  }

  connected() {
    //alert(localStorage.getItem('currentUserID'));
    return (localStorage.getItem('currentUserID') > 0);
    //return (currentUser > 0);
  }

  acceptNotLoginFnc() {
    return acceptNotLogin;
  }

  getCurrentBalance() {
    var wallet = this.findWalletUser(localStorage.getItem('currentUserID'));

    return wallet.balance;
  }


  /** RENDER */
  render() {
    
    return (
      <BrowserRouter>
        <div>
          {links(this)}
          {Signup(this)}
          {login(this)}
          {logout(this)}
          {modifyaccount(this)}
          {addcard(this)}
          {modifycard(this, listCards)}
          {deletecard(this, listCards)}
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
