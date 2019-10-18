import React from 'react';
import { Route } from 'react-router-dom';

export default function modifyaccount(obj) {
  return (
    <div>
      <Route exact path="/modifyaccount" component={() =>
        <>
          <p>Modify your account page</p>
          {obj.connected() || obj.acceptNotLoginFnc() ?
            "WIP"
            : "Connection requise"}
        </>
      } />
    </div>


  )
}