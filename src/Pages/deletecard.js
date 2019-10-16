import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AddCardForm from '../forms/AddCardForm.js';

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