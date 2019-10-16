import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from '../forms/LoginForm.js';

export default function login(obj) {
    return (
        <div>
            <Route exact path="/login" component={() =>
                <>
                    Log in page
                    <LoginForm onSend={obj.handleSendLoginForm} />
                </>
            } />
        </div>
    )
}