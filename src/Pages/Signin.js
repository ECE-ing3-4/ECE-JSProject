import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from '../Forms/SignInForm.js';

export default function signin(obj) {
    return (
        <div>
            <Route exact path="/signin" component={() =>
                <>
                    Sign in page
                    <SignInForm onSend={obj.handleSendLoginForm} />
                </>
            } />
        </div>
    )
}