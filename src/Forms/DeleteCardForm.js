import React, { Component } from 'react'

class DeleteCardForm extends Component{
    constructor(props) {
        super(props);
        this.state = { last_4: '' };
        this.handleSendForm = this.handleSendForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSendForm() {
        //console.log(this.state.brand);
        this.props.onSend(this.state);
        this.setState({ last_4: '' });
    }
    render(){
        return(
            <div>
                Last 4 digits of your card <input type="text" name="last_4" onChange={this.handleChange} value={this.state.brand} />
                <button onClick={this.handleSendForm}> Supprimer la carte <button>   
            </div>
        );
    }
}
export default DeleteCardForm