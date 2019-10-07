import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function balance() {
    return (
        <div>
            <Route exact path="/balance" component={() =>
            <>
              <p>Balance page WIP</p>
              <p>Your currrent balance is 9999999999 usd</p>
            </>
          } />
        </div>
    )
}