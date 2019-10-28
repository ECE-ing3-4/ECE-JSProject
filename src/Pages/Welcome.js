import React from 'react';
import { Route } from 'react-router-dom';

export default function Welcome() {
  return (
    <div>
      <Route exact path="/" component={() =>
        <>
          <p>Welcome to the Watermelon Bank</p>
        </>
      } />
    </div>
  )
}