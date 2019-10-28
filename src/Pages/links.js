import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default function links(obj) {
  return (
    <div >
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"><a class="nav-link" href="/signup">Sign up</a></li>
            <li class="nav-item"><a class="nav-link" href="/login">Log in</a></li>
            <li class="nav-item"><a class="nav-link" href="/logout">Log out</a></li>
            <li class="nav-item"><a class="nav-link" href="/modifyaccount">Modify your account</a></li>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Card
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a class="dropdown-item" href="/addcard">Add a card</a>
                </DropdownItem>
                <DropdownItem>
                  <a class="dropdown-item" href="/modifycard">Modify a card</a>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <a class="dropdown-item" href="/deletecard">Delete a card</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>


            <li class="nav-item"><a class="nav-link" href="/balance">Balance</a></li>
            <li class="nav-item"><a class="nav-link" href="/deposit">Deposit</a></li>
            <li class="nav-item"><a class="nav-link" href="/withdrawal">Withdrawal</a></li>
            <li class="nav-item"><a class="nav-link" href="/transfer">Transfers</a></li>
          </ul>
        </div>
      </nav>
    </div >

  )
}