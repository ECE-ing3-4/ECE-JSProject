import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../Forms/Form.js';

export default function logout(obj) {
    return (
        <div>
            <Route exact path="/logout" component={() =>
                <>
                    <p>Log out page</p>
                    {obj.connected() || obj.acceptNotLoginFnc() ?
                        <Form buttonText={"Log out"} onSend={obj.handleSendLogoutForm} />
                        : "Connection requise"}
                </>
            } />
        </div>
    )
}