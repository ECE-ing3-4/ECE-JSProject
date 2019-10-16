import React from 'react';
import { Route } from 'react-router-dom';

export default function balance() {
    return (
        <div>
            <Route exact path="/balance" component={() =>
            <>
              <p>Balance page WIP</p>
              <p>Your currrent balance is 9999999999 usd</p>
            </>
          } />
        </div>
    )
}