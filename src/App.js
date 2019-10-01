import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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

  allowedUser(user) {
    var found = usersList.find((name) => {
      return name === user;
    });
    console.log(found);
    return found;
  }

  handleSend(event) {
    console.log(this.allowedUser(this.state.chat));
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
      <BrowserRouter>
        <div>
          <li><Link to="/signin">Sign in</Link></li>
          <li><Link to="/login">Log in</Link></li>
          <li><Link to="/balance">Balance</Link></li>
          <li><Link to="/transfert">Transfert</Link></li>

          <Route exact path="/signin" component={() =>
            <>
              <p>Sign in page WIP</p>
            </>
          } />

          <Route exact path="/login" component={() =>
            <>
              <Chat change={this.handleChange} send={this.handleSend} chat={this.state.chat} />
            </>
          } />

          <Route exact path="/balance" component={() =>
            <>
              <p>Balance page WIP</p>
              <p>Ceci est la balance du compte : 9999999999 euros</p>
            </>
          } />

          <Route exact path="/transfert" component={() =>
            <>
              <p>Transfert page WIP</p>
            </>
          } />

          {this.displayChat()}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
