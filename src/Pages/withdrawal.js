import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../forms/Form.js';

export default function withdrawal(obj) {
  return (
    <div>
      <Route exact path="/withdrawal" component={() =>
        <>
          <p>Withdrawal in page</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            <Form inputNames={["amount"]} inputTexts={["Amount"]} buttonText={"Make a withdrawal"} onSend={obj.handleWithdrawalForm} />
            : "Connection requise"}
        </>
      } />
    </div>
  )
}