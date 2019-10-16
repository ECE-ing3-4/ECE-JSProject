import React, { Component } from 'react';

class AddCardForm extends Component {
    constructor(props) {
        super(props)
        this.state = { id: -1, user_id: -1, last_4: 0, brand: '', expired_at: '' };
        this.handleSendForm = this.handleSendForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSendForm() {
        console.log(this.state.brand);
        this.props.onSend(this.state);
        this.setState({ id: -1, user_id: -1, last_4: 0, brand: '', expired_at: '' });
    }

    render() {
        return (
            <div>
                <div>
                    Brand <input type="text" name="brand" onChange={this.handleChange} value={this.state.brand} />
                    <br />
                    <button onClick={this.handleSendForm}>Envoyer</button>
                </div>
            </div>
        );
    }
}
export default AddCardForm