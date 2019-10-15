import React, { Component } from '../../node_modules/react';

class InputText extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '' };
        this.handleSend = this.handleSend.bind(this);
        this.displayText = this.displayText.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSend(event) {
        this.props.onSend(this.props.name, this.state.text);
        this.setState({ text: '' });
    }

    displayText() {
        let text = this.props.display.map((item) => {
            return (<p>{item}</p>);
        });
        return (<div class="display">{text}</div>);
    }


    //{this.displayText()}
    render() {
        return (
            <div>
                <div>
                    <p>{this.props.name}
                    <input type="text" name="text" onChange={this.handleChange} value={this.state.text} />
                    </p>
                    <button onClick={this.handleSend}>Envoyer</button>
                </div>
            </div>
        );
    }
}
export default InputText