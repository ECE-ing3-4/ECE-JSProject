import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../Forms/Form.js';

export default function withdrawal(obj) {
  return (
    <div>
      <Route exact path="/withdrawal" component={() =>
        <>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            <Form inputNames={["amount"]} inputTexts={["Amount"]} buttonText={"Make a withdrawal"} onSend={obj.handleWithdrawalForm} />
            : "Connection requise"}
        </>
      } />
    </div>
  )
}