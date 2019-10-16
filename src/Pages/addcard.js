import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCardForm from '../Forms/AddCardForm.js';

export default function addcard(obj) {
  


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