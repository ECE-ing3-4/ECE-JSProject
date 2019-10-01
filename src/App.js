import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './Chat/Chat.js';

var usersList = ['Alexis', 'Neil'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chat: [] };;
    this.handleSend = this.handleSend.bind(this);
  }

  allowedUser(user) {
    var found = usersList.find((name) => {
      return name === user;
    });
    console.log(found);
    return found;
  }

  handleSend(name, text) {
    this.setState({ chat: this.state.chat.concat(`${name}: ${text}`) });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <li><Link to="/signin">Sign in</Link></li>
          <li><Link to="/login">Log in</Link></li>

          <li><Link to="/modifyaccount">Modify your account</Link></li>
          <li><Link to="/addcard">Add a card</Link></li>
          <li><Link to="/modifycard">Modify a card</Link></li>
          <li><Link to="/deletecard">Delete a card</Link></li>

          <li><Link to="/balance">Balance</Link></li>
          <li><Link to="/deposit">Deposit</Link></li>
          <li><Link to="/withdrawal">Withdrawal</Link></li>
          <li><Link to="/transfert">Transfert</Link></li>


          <Route exact path="/signin" component={() =>
            <>
              <p>Sign in page WIP</p>
            </>
          } />

          <Route exact path="/login" component={() =>
            <>
              <Chat onSend={this.handleSend} name="login" display={this.state.chat} />
            </>
          } />

          <Route exact path="/modifyaccount" component={() =>
            <>
              <p>Modify your account page WIP</p>
            </>
          } />

          <Route exact path="/addcard" component={() =>
            <>
              <p>Add a card page WIP</p>
            </>
          } />

          <Route exact path="/modifycard" component={() =>
            <>
              <p>Delete a card page WIP</p>
            </>
          } />

          <Route exact path="/deletecard" component={() =>
            <>
              <p>Modify a card page WIP</p>
            </>
          } />

          <Route exact path="/balance" component={() =>
            <>
              <p>Balance page WIP</p>
              <p>Your currrent balance is 9999999999 usd</p>
            </>
          } />

          <Route exact path="/deposit" component={() =>
            <>
              <p>Deposit page WIP</p>
            </>
          } />

          <Route exact path="/withdrawal" component={() =>
            <>
              <p>Withdrawal in page WIP</p>
            </>
          } />

          <Route exact path="/transfert" component={() =>
            <>
              <p>Transfert page WIP</p>
            </>
          } />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
