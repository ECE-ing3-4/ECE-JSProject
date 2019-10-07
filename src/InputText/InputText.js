import React, { Component } from '../../node_modules/react';

class InputText extends Component {
    constructor(props) {
        super(props)
        this.state = { chat: '' };
        this.handleSend = this.handleSend.bind(this);
        this.displayChat = this.displayChat.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSend(event) {
        this.props.onSend(this.props.name, this.state.chat);
        this.setState({ chat: '' });
    }

    displayChat() {
        let chat = this.props.display.map((item) => {
            return (<p>{item}</p>);
        });
        return (<div class="display">{chat}</div>);
    }


//{this.displayChat()}
    render() {
        return (
            <div>
                <div>
                    <input type="text" name="chat" onChange={this.handleChange} value={this.state.chat} />
                    <button onClick={this.handleSend}>Envoyer</button>
                </div>
            </div>
        );
    }
}
export default InputText