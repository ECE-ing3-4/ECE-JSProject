import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function deposit() {
    return (
        <div>
            <Route exact path="/deposit" component={() =>
            <>
              <p>Deposit page WIP</p>
            </>
          } />
        </div>
    )
}