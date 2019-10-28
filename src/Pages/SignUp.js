import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../Forms/Form.js';

export default function signup(obj) {
    return (
        <div>
            <Route exact path="/signup" component={() =>
                <>
                    <Form inputNames={["first_name", "last_name", "email", "password"]} inputTexts={["First name", "Last Name", "Email", "Password"]} buttonText={"Sign up"} onSend={obj.handleSendSignupForm} />
                </>
            } />
        </div>
    )
}