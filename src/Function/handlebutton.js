import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function handleSendLoginForm(obj) {
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

function handleSendSigninForm(obj) {
  //console.log(`${obj.first_name} Added !`);
  this.addUser(listUsers, obj.first_name, obj.last_name, obj.email, obj.password, false);
  //console.log(`first_name : ${obj.first_name}, last_name : ${obj.last_name}, email : ${obj.email}, password : ${obj.password}`);
  //this.printList(listUsers);
}

function handleSendAddCardForm(obj) {
  //console.log(`id ${obj.id}, user_id ${obj.user_id}, last_4 ${obj.last_4}, brand ${obj.brand}, expired_at ${obj.expired_at}`);
  this.addCard(listCards, 1, obj.brand);
  //console.log(`${obj.first_name} Added !`);
}
