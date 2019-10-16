import React from 'react';
import { Route } from 'react-router-dom';
import AddCardForm from '../forms/AddCardForm.js';

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