import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = { email: '', password: '' };
        this.handleSendForm = this.handleSendForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSendForm() {
        //console.log(this.state);
        this.props.onSend(this.state);
        this.setState({ email: '' , password: '' });
    }

    render() {
        return (
            <div>
                <div>
                    Username <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                    <br/>
                    Password <input type="text" name="password" onChange={this.handleChange} value={this.state.password} />
                    <br/>
                    <button onClick={this.handleSendForm}>Envoyer</button>
                </div>
            </div>
        );
    }
}
export default LoginForm