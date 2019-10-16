import React from 'react';
import { Route } from 'react-router-dom';

export default function transfer() {
    return (
        <div>
            <Route exact path="/transfer" component={() =>
            <>
              <p>Transfer page WIP</p>
            </>
          } />
        </div>
    )
}