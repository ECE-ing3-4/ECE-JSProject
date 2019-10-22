import React from 'react';
import { Route } from 'react-router-dom';
import TransferForm from '../forms/TransferForm.js';

export default function transfer(obj) {
  return (
    <div>
      <Route exact path="/transfer" component={() =>
        <>
          <p>Transfer page</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            <>
              <TransferForm onSend={obj.handleSendTransferForm} />
            </>
            : "Connection requise"}
        </>
      } />
    </div>
  )
}