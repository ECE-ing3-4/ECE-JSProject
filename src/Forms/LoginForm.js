import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = { login: '', password: '' };
        this.handleSendLoginForm = this.handleSendLoginForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSendLoginForm() {
        //console.log(this.state);
        this.props.onSend(this.state.login, this.state.password);
        this.setState({ login: '' , password: '' });
    }

    render() {
        return (
            <div>
                <div>
                    Username <input type="text" name="login" onChange={this.handleChange} value={this.state.login} />
                    <br/>
                    Password <input type="text" name="password" onChange={this.handleChange} value={this.state.password} />
                    <br/>
                    <button onClick={this.handleSendLoginForm}>Envoyer</button>
                </div>
            </div>
        );
    }
}
export default LoginForm