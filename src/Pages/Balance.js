import React from 'react';
import { Route } from 'react-router-dom';

export default function balance(obj) {
  return (
    <div>
      <Route exact path="/balance" component={() =>
        <>
          <p>Balance page</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            <p>Your current balance is {obj.getCurrentBalance()} usd</p>
            : "Connection requise"}
        </>
      } />
    </div>
  )
}