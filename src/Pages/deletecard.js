import React from 'react';
import { Route } from 'react-router-dom';
import DeleteCardForm from '../forms/DeleteCardForm.js';

export default function deletecard(obj) {
    return (
        <div>
            <Route exact path="/deletecard" component={() =>
            <>
              <p>Delete a card page WIP</p>
              <DeleteCardForm onSend={obj.handleDeleteCardForm} />
            </>
          } />
        </div>
    )
}