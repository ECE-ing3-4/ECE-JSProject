import React, { Component } from 'react';

class DepositForm extends Component {
    constructor(props) {
        super(props)
        this.state = { amount: '' };
        this.handleSendForm = this.handleSendForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSendForm() {
        //console.log(this.state.brand);
        this.props.onSend(this.state);
        this.setState({ amount: '' });
    }

    render() {
        return (
            <div>
                Amount <input type="text" name="amount" onChange={this.handleChange} value={this.state.amount} />
                <br />
                <button onClick={this.handleSendForm}>Make a deposit</button>
            </div>
        );
    }
}
export default DepositForm