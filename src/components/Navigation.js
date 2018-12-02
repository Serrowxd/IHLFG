import React from 'react';
import { Nav, Row } from '../styles/styles';
import { Link } from 'react-router-dom';

const Navigation = props => {
  return (
    <Nav>
      <Row nav_items>
        <Link to="/">
          <h2> Home </h2>
        </Link>
        <Link to="/search">
          <h2> Patreon </h2>
        </Link>
      </Row>
      <h1> I Hate LFG </h1>
      <Row nav_items>
        {/* User is not loggged-in ~ display */}
        <h2 onClick={props.login}> Log-in </h2>
        <h2 onClick={props.signup}> Sign-up </h2>

        {/* User is logged-in ~ display */}
        {/* <a href="/account/serrow">
          <h2>Profile</h2>
        </a> */}
        {/* <a href="/account/serrow">
          <h2>Logout</h2>
        </a> */}
      </Row>
    </Nav>
  );
};

export default Navigation;
