import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function withdrawal() {
    return (
        <div>
            <Route exact path="/withdrawal" component={() =>
            <>
              <p>Withdrawal in page WIP</p>
            </>
          } />
        </div>
    )
}