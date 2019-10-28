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
if (localStorage.getItem('listWallets') == null) {
  localStorage.setItem('listWallets', JSON.stringify([]));
}
if (localStorage.getItem('listCards') == null) {
  localStorage.setItem('listCards', JSON.stringify([]));
}

var z = new Image();
z.src = "https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
document.body.background = z.src;
document.body.style.backgroundAttachment = "fixed";

//var listUsers = [];
//var listWallets = [];
//var listCards = [];
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
    var listWallets = JSON.parse(localStorage.getItem('listWallets'));
    //Adding user
    var indexNewUser = this.addUser(obj.first_name, obj.last_name, obj.email, obj.password, false);
    if (indexNewUser >= 0) {//user addded succefully
      this.handleSendLoginForm(obj)//autologin

      var listUsers = JSON.parse(localStorage.getItem('listUsers'));

      //var newId = listUsers[indexNewUser].id;
      //Ading wallet
      var indexNewWallet = this.addWallet(listWallets, 0);
      listWallets[indexNewWallet].user_id = localStorage.getItem('currentUserID');
      localStorage.setItem('listWallets', JSON.stringify(listWallets));

      console.log(listUsers);
      console.log(listWallets);
    }
  }


  findCardIndex(destinationCardDigits) {
    var listCards = JSON.parse(localStorage.getItem('listCards'));
    //find the card
    var card;
    for (var i = 0; i < listCards.length; i++) {
      card = listCards[i];
      if (card.last_4 == destinationCardDigits && listCards[i].id != -1) {
        return i;
      }
    }
    return -1; //card not found
  }

  handleBrandChangeForm(obj) {
    var listCards = JSON.parse(localStorage.getItem('listCards'));
    if (localStorage.getItem('currentUserID') > 0 || acceptNotLogin) {
      var cardIndex = this.findCardIndex(obj.last_4);
      if (cardIndex != -1) {
        if (listCards[cardIndex].user_id == localStorage.getItem('currentUserID')) {
          alert("Your " + listCards[cardIndex].brand + " card is now a " + obj.newBrand + " card");
          listCards[cardIndex].brand = obj.newBrand;
          localStorage.setItem('listCards', JSON.stringify(listCards));
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
    var listCards = JSON.parse(localStorage.getItem('listCards'));
    if (localStorage.getItem('currentUserID') > 0 || acceptNotLogin) {
      this.addCard(listCards, localStorage.getItem('currentUserID'), obj.brand);
      localStorage.setItem('listCards', JSON.stringify(listCards));
      console.log(listCards);
    }
    else {
      alert("You have to login first !");
    }
  }

  handleDeleteCardForm(obj) {
    var listCards = JSON.parse(localStorage.getItem('listCards'));
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
            localStorage.setItem('listCards', JSON.stringify(listCards));
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

  findWalletUserIndex(idUser) {
    var listWallets = JSON.parse(localStorage.getItem('listWallets'));
    var wallet;
    for (var i = 0; i < listWallets.length; i++) {
      wallet = listWallets[i];
      if (wallet.user_id == idUser) {
        return (i);
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

  depoWithdraWallet(walletIndex, amount) {
    var listWallets = JSON.parse(localStorage.getItem('listWallets'));
    if (listWallets[walletIndex] != null) {
      if (amount > 0) {
        listWallets[walletIndex].balance += amount;
        alert(`Succesfully deposited ${amount} !`);
      }
      else {
        if (-amount <= listWallets[walletIndex].balance) {
          listWallets[walletIndex].balance += amount;
          alert(`Succesfully withdrawed ${-amount} !`);
        }
        else {
          alert(`Invalid amount : not enough money !`);
        }
      }
      localStorage.setItem('listWallets', JSON.stringify(listWallets));
    }
    else {
      alert("Log in first !");
    }

  }

  handleDepositForm(obj) {
    if (localStorage.getItem('currentUserID') > 0 || acceptNotLogin) {
      var walletIndex = this.findWalletUserIndex(localStorage.getItem('currentUserID'));
      this.depoWithdraWallet(walletIndex, parseInt(obj.amount));
    }
    else {
      alert("Log in first !");
    }
  }

  handleWithdrawalForm(obj) {
    if (localStorage.getItem('currentUserID') > 0 || acceptNotLogin) {
      var walletIndex = this.findWalletUserIndex(localStorage.getItem('currentUserID'));
      this.depoWithdraWallet(walletIndex, parseInt(-obj.amount));
    }
    else {
      alert("Log in first !");
    }


    /*var listWallets = JSON.parse(localStorage.getItem('listWallets'));
    obj.amount = - obj.amount;
    this.handleDepositForm(obj);
    localStorage.setItem('listWallets', JSON.stringify(listWallets));
    console.log(listWallets);*/
  }

  findRecipientWalletIndex(destinationCardDigits) {
    var listCards = JSON.parse(localStorage.getItem('listCards'));
    //find the card
    var recipientCardIndex = this.findCardIndex(destinationCardDigits);
    alert(recipientCardIndex);
    var recipientCard = listCards[recipientCardIndex];
    //find the owner of this card
    return this.findWalletUser(recipientCard.id);
  }

  handleChangePasswordForm(obj) {
    if (localStorage.getItem('currentUserID') > 0 || acceptNotLogin) {
      var listUsers = JSON.parse(localStorage.getItem('listUsers'));
      var usr = this.findUser(localStorage.getItem('currentUserID'));
      if (usr.password == obj.oldPassword) {
        if (obj.newPassword == obj.newPasswordConfirmation) {
          usr.password = obj.newPassword;
          alert("Password changed succcesfully !");
          localStorage.setItem('listUsers', JSON.stringify(listUsers));
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
        var yourWalletIndex = this.findWalletUserIndex(localStorage.getItem('currentUserID'));
        var recipientWalletIndex = this.findRecipientWalletIndex(obj.destinationCardDigits);
        alert(recipientWalletIndex);
        this.depoWithdraWallet(recipientWalletIndex, parseInt(obj.amount));
        this.depoWithdraWallet(yourWalletIndex, -parseInt(obj.amount));
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

      localStorage.setItem('listUsers', JSON.stringify(list));
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
    localStorage.setItem('listWallets', JSON.stringify(list));
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
    localStorage.setItem('listCards', JSON.stringify(list));
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
    var listWallets = JSON.parse(localStorage.getItem('listWallets'));
    var walletIndex = this.findWalletUserIndex(localStorage.getItem('currentUserID'));
    if (walletIndex != null) {
      var wallet = listWallets[walletIndex];
      return wallet.balance;
    }
    else {
      return 0;
    }
  }


  /** RENDER */
  render() {
    var listCards = JSON.parse(localStorage.getItem('listCards'));
    return (
      <BrowserRouter>
        <div>
          {links(this)}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        </div>
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <form class="col-25">
              <div class="form-group">
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
            </form>
          </div>
        </div>
        <div>
          <span class="border-danger">
            <p class="p-7 mb-50 bg-info text-white">Your current balance is {this.getCurrentBalance()} usd</p>
          </span>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
