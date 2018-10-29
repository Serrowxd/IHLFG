import React from 'react';
import { Nav, Row } from '../styles/styles';

const Navigation = () => {
  return (
    <Nav>
      <Row nav_items>
        <h2> Home </h2>
        <h2> Patreon </h2>
      </Row>
      <h1> I Hate LFG </h1>
      <Row nav_items>
        <h2> Log-in </h2>
        <h2> Sign-up </h2>
      </Row>
    </Nav>
  );
};

export default Navigation;
