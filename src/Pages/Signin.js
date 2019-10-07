import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputText from '../InputText/InputText.js';

export default function signin(obj) {
    return (
        <div>
            <Route exact path="/signin" component={() =>
                <>
                    First Name <InputText onSend={obj.handleSend} name="firstName" display={obj.state.chat} />
                    Last Name <InputText onSend={obj.handleSend} name="lastName" display={obj.state.chat} />
                </>
            } />
        </div>
    )
}