import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function transfer() {
    return (
        <div>
            <Route exact path="/transfer" component={() =>
            <>
              <p>Transfer page WIP</p>
            </>
          } />
        </div>
    )
}