import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DeleteCardForm from '../forms/DeleteCardForm.js';

export default function deletecard(obj) {
    return (
        <div>
            <Route exact path="/deletecard" component={() =>
            <>
              <p>Delete a card page WIP</p>
              <br/>
              <DeleteCardForm onSend={obj.handleDeleteCardForm} />
            </>
          } />
        </div>
    )
}