import React from 'react';
import { Route } from 'react-router-dom';
import SignInForm from '../forms/SignInForm.js';

export default function signin(obj) {
    return (
        <div>
            <Route exact path="/signin" component={() =>
                <>
                    Sign in page
                    <SignInForm onSend={obj.handleSendSigninForm} />
                </>
            } />
        </div>
    )
}