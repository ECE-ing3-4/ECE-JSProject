import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.handleSendForm = this.handleSendForm.bind(this);
    }

    handleSendForm() {
        this.props.onSend();
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.handleSendForm}>Log out</button>
                </div>
            </div>
        );
    }
}
export default LoginForm