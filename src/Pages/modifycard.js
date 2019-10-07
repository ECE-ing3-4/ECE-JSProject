import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function modifycard() {
    return (
        <div>
            <Route exact path="/modifycard" component={() =>
                <>
                    <p>Modify a card page WIP</p>
                </>
            } />
        </div>
    )
}