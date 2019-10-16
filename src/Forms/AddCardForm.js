import React, { Component } from 'react';

class AddCardForm extends Component {
    constructor(props) {
        super(props)
        this.state = { brand: '' };
        this.handleSendForm = this.handleSendForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSendForm() {
        //console.log(this.state.brand);
        this.props.onSend(this.state);
        this.setState({ brand: '' });
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