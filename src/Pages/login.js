import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from '../Chat/Chat.js';

export default function login(obj) {
    return (
        <div>
            <Route exact path="/login" component={() =>
                <>
                    <Chat onSend={obj.handleSend} name="login" display={obj.state.chat} />
                </>
            } />
        </div>
    )
}