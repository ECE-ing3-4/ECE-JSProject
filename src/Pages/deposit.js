import React from 'react';
import { Route } from 'react-router-dom';

export default function deposit() {
    return (
        <div>
            <Route exact path="/deposit" component={() =>
            <>
              <p>Deposit page WIP</p>
            </>
          } />
        </div>
    )
}