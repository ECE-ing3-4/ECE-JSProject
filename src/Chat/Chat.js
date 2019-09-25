import React, { Component } from 'react';
class Chat extends Component {
    render() {
        return (
            <div>
                <div class="display"></div>
                <div>
                    <input type="text" name="chat" onChange={this.props.change} value={this.props.chat} />
                    <button onClick={this.props.send}>Envoyer</button>
                </div>
            </div>
        );
    }
}
export default Chat; 
