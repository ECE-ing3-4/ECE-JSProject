import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './Chat/Chat.js';

var usersList = ['Alexis', 'Neil'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { display: [], chat: '' };;
    this.handleSend = this.handleSend.bind(this);
    this.displayChat = this.displayChat.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  allowedUser(user){
    usersList.forEach(function(item, index, array) {
      console.log(user + " vs " + item);
      if (user==item){
        console.log("Autorise");
        return 1;
      }
    });
    console.log("Non autorise")
    return 0;
  }

  handleSend(event) {
    this.allowedUser(this.state.chat);
    this.setState({ display: this.state.display.concat(this.state.chat), chat: '' });
  }

  displayChat() {
    let chat = this.state.display.map((item) => {
      return (<p>{item}</p>);
    });
    return (<div class="display">{chat}</div>);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <Chat change={this.handleChange} send={this.handleSend} chat={this.state.chat} />
        {this.displayChat()}
      </div>
    );
  }
}

export default App;
