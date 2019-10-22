import React from 'react';
import { Route } from 'react-router-dom';
import LogoutForm from '../forms/LogoutForm.js';

export default function logout(obj) {
    return (
        <div>
            <Route exact path="/logout" component={() =>
                <>
                    Log out page
                    <LogoutForm onSend={obj.handleSendLogoutForm} />
                </>
            } />
        </div>
    )
}