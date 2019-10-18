import React from 'react';
import { Route } from 'react-router-dom';

export default function transfer(obj) {
  return (
    <div>
      <Route exact path="/transfer" component={() =>
        <>
          <p>Transfer page</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            "WIP"
            : "Connection requise"}
        </>
      } />
    </div>
  )
}