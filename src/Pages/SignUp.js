import React from 'react';
import { Route } from 'react-router-dom';
import SignUpForm from '../forms/SignUpForm.js';

export default function signup(obj) {
    return (
        <div>
            <Route exact path="/signup" component={() =>
                <>
                    Sign up page
                    <SignUpForm onSend={obj.handleSendSignupForm} />
                </>
            } />
        </div>
    )
}