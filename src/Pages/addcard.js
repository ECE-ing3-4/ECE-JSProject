import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../forms/Form.js';

export default function addcard(obj) {
  return (
    <div>
      <Route exact path="/Addcard" component={() =>
        <>
          <p>Add a card page</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            <Form inputNames={["brand"]} inputTexts={["Brand"]} buttonText={"Add the card"} onSend={obj.handleSendAddCardForm} />
            : "Connection requise"}
        </>
      } />
    </div>
  )
}