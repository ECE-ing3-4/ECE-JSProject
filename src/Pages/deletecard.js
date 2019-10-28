import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../Forms/Form.js';

export default function deletecard(obj) {
  return (
    <div>
      <Route exact path="/deletecard" component={() =>
        <>
          <p>Delete a card page</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            <Form inputNames={["last_4"]} inputTexts={["Last 4 digits"]} buttonText={"Delete the card"} onSend={obj.handleDeleteCardForm} />
            : "Connection requise"}
        </>
      } />
    </div>
  )
}