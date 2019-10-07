import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function modifyaccount() {
    return (
        <div>
            <Route exact path="/modifyaccount" component={() =>
            <>
              <p>Modify your account page WIP</p>
            </>
          } />
        </div>
    )
}