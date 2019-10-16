import React from 'react';
import { Route } from 'react-router-dom';

export default function modifyaccount() {
    return (
        <div>
            <Route exact path="/modifyaccount" component={() =>
            <>
              <p>Modify your account page WIP</p>
            </>
          } />
        </div>
        

    )
}