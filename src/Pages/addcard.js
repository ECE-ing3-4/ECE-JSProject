import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCardForm from '../Forms/AddCardForm.js';

export default function addcard(obj) {
  var ladate = new Date()
  const current_date= {mm : -1 , yyyy: -1};

  function getRandom(max) {
    return Math.floor(Math.random()*Math.floor(max));
  }

  function getDateExp() {
    current_date.mm = getRandom(12) + 1;
    current_date.yyyy = ladate.getFullYear() + (getRandom (3) + 1 );
    console.log('La date d expiration  est le ', current_date.mm,' / ',current_date.yyyy )
  }

  function lastFourDigits() {
    return getRandom(10000);
  }


    return (
        <div>
            <Route exact path="/addcard" component={() =>
            <>
              <p>Add a card page</p>
              <AddCardForm onSend={obj.handleSendAddCardForm} />
            </>
          } />
        </div>
    )
}