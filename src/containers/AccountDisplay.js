import React, { Fragment } from 'react';

import { Navigation } from '../reducer';
import { Col } from '../styles/styles';

const AccountDisplay = props => {
  return (
    <Fragment>
      <Navigation />
      <Col account_container>
        <Col acc_cont_left>
          <h1> Serrow </h1>
          <img
            src="https://render-us.worldofwarcraft.com/character/malganis/124/168002428-avatar.jpg"
            alt="serrow"
          />
          <p>[New Image Button]</p>
        </Col>
      </Col>
    </Fragment>
  );
};

export default AccountDisplay;
