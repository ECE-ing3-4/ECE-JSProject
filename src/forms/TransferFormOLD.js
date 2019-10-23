import React, { Component } from 'react';

class TransfertForm extends Component {
    constructor(props) {
        super(props)
        this.state = { amount: '', destinationCardDigits: '' };
        this.handleSendForm = this.handleSendForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSendForm() {
        if (this.state.amount > 0) {
            this.props.onSend(this.state);
            this.setState({ amount: '', destinationCardDigits: '' });
        }
    }

    render() {
        return (
            <div>
                Amount <input type="text" name="amount" onChange={this.handleChange} value={this.state.amount} />
                <br />
                Last 4 digits of the destination card <input type="text" name="destinationCardDigits" onChange={this.handleChange} value={this.state.destinationCardDigits} />
                <br />
                <button onClick={this.handleSendForm}>Make a transfert</button>
            </div>
        );
    }
}
export default TransfertForm