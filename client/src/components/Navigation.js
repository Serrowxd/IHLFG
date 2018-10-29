import React from 'react';
import { Nav, Row } from '../styles/styles';

const Navigation = props => {
  return (
    <Nav>
      <Row nav_items>
        <h2> Home </h2>
        <h2> Patreon </h2>
      </Row>
      <h1> I Hate LFG </h1>
      <Row nav_items>
        <h2 onClick={props.login}> Log-in </h2>
        <h2 onClick={props.signup}> Sign-up </h2>
      </Row>
    </Nav>
  );
};

export default Navigation;
