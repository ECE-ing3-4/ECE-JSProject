import React from 'react';
import { Route } from 'react-router-dom';

export default function withdrawal() {
    return (
        <div>
            <Route exact path="/withdrawal" component={() =>
            <>
              <p>Withdrawal in page WIP</p>
            </>
          } />
        </div>
    )
}