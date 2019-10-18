import React from 'react';
import { Route } from 'react-router-dom';

export default function balance(obj) {
  return (
    <div>
      <Route exact path="/balance" component={() =>
        <>
          <p>Balance page WIP</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            <p>Your currrent balance is 9999999999 usd</p>
            : "Connection requise"}
        </>
      } />
    </div>
  )
}