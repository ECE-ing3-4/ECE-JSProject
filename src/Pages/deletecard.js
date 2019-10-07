import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function deletecard() {
    return (
        <div>
            <Route exact path="/deletecard" component={() =>
            <>
              <p>Delete a card page WIP</p>
            </>
          } />
        </div>
    )
}