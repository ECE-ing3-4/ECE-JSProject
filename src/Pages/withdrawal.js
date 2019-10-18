import React from 'react';
import { Route } from 'react-router-dom';

export default function withdrawal(obj) {
  return (
    <div>
      <Route exact path="/withdrawal" component={() =>
        <>
          <p>Withdrawal in page</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            "WIP"
            : "Connection requise"}
        </>
      } />
    </div>
  )
}