import React from 'react';
import { Route } from 'react-router-dom';
import DepositForm from '../forms/DepositForm.js';

export default function deposit(obj) {
  return (
    <div>
      <Route exact path="/deposit" component={() =>
        <>
          <p>Deposit page</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            <DepositForm onSend={obj.handleDepositForm} />
            : "Connection requise"}
        </>
      } />
    </div>
  )
}