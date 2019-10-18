import React from 'react';
import { Link } from 'react-router-dom';

export default function links() {
  return (
    <div >
      <li><Link to="/signup">Sign up</Link></li>
      <li><Link to="/login">Log in</Link></li>

      <li><Link to="/modifyaccount">Modify your account</Link></li>
      <li><Link to="/addcard">Add a card</Link></li>
      <li><Link to="/modifycard">Modify a card</Link></li>
      <li><Link to="/deletecard">Delete a card</Link></li>

      <li><Link to="/balance">Balance</Link></li>
      <li><Link to="/deposit">Deposit</Link></li>
      <li><Link to="/withdrawal">Withdrawal</Link></li>
      <li><Link to="/transfer">Transfers</Link></li>
    </div >
  )
}