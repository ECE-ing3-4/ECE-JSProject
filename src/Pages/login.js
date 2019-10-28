import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../Forms/Form.js';

export default function login(obj) {
    return (
        <div>
            <Route exact path="/login" component={() =>
                <>
                    Log in page
                    <Form inputNames={["email","password"]} inputTexts={["Email","Password"]} buttonText={"Log in"} onSend={obj.handleSendLoginForm} />
                </>
            } />
        </div>
    )
}