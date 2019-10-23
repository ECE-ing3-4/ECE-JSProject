import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../forms/Form.js';

export default function transfer(obj) {
  return (
    <div>
      <Route exact path="/transfer" component={() =>
        <>
          <p>Transfer page</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            <Form inputNames={["amount","destinationCardDigits"]} inputTexts={["Amount","Last 4 digits of the destination card"]} buttonText={"Make the transfer"} onSend={obj.handleSendTransferForm} />
            : "Connection requise"}
        </>
      } />
    </div>
  )
}