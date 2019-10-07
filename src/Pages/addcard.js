import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function addcard() {
    return (
        <div>
            <Route exact path="/addcard" component={() =>
            <>
              <p>Add a card page WIP</p>
            </>
          } />
        </div>
    )
}