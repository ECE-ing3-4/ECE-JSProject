import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../LoginForm/LoginForm.js';

export default function login(obj) {
    return (
        <div>
            <Route exact path="/login" component={() =>
                <>
                    <LoginForm onSend={obj.handleSendLoginForm} />
                </>
            } />
        </div>
    )
}