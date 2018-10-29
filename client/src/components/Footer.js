import React from 'react';

import { Foot, Col } from '../styles/styles';

const Footer = () => {
  return (
    <Foot>
      <Col foot_text>
        <h1>Brought to you by</h1>
        <p>
          <span>Serrow: </span>
          Design & Code
        </p>
        <p>
          <span>Autoimmune: </span>
          Idea & Code
        </p>
      </Col>
      <Col foot_text>
        <h4>Copyright Serrow @ 2018</h4>
      </Col>
      <Col foot_text>
        <h1>Give us your money</h1>
        <h2> Patreon </h2>
        <h2> PayPal </h2>
      </Col>
    </Foot>
  );
};

export default Footer;
