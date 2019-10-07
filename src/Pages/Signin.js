import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function signin() {
    return (
        <div>
            <Route exact path="/signin" component={() =>
                <>
                    <p>Sign in page WIP</p>
                </>
            } />
        </div>
    )
}