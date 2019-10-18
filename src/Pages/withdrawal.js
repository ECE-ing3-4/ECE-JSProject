import React from 'react';
import { Route } from 'react-router-dom';
import DepositForm from '../forms/DepositForm.js';

export default function withdrawal(obj) {
  return (
    <div>
      <Route exact path="/withdrawal" component={() =>
        <>
          <p>Withdrawal in page</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            <DepositForm onSend={obj.handleWithdrawalForm} />
            : "Connection requise"}
        </>
      } />
    </div>
  )
}