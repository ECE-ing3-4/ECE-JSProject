import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../forms/Form.js';

export default function deposit(obj) {
  return (
    <div>
      <Route exact path="/deposit" component={() =>
        <>
          <p>Deposit page</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            <Form inputNames={["amount"]} inputTexts={["Amount"]} buttonText={"Make a deposit"} onSend={obj.handleDepositForm} />
            : "Connection requise"}
        </>
      } />
    </div>
  )
}