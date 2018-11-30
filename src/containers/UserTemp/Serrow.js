import React, { Fragment } from 'react';

// Styles
import { Col, Row } from '../styles/styles';
// Imports
import { Navigation } from '../reducer';

const UserDisplay = props => {
  return (
    <Fragment>
      <Navigation />
      <Row
        user_row
        image="https://render-us.worldofwarcraft.com/character/malganis/124/168002428-main.jpg"
      >
        <Col user_information>
          <h1>Serrow</h1>
          <h2>Mal'Ganis</h2>
          <p>[Star Rating]</p>
        </Col>
        <Col user_information user_info_display>
          <Row justify="space-around" width="100%" height="2rem">
            <p>Rating</p>
            <p>Highest</p>
            <p>Feedback</p>
          </Row>
          <Col align="center" justify="space-around" height="15rem">
            <h3>
              2's: <span>2100</span>
            </h3>
            <h3>
              3's: <span>1900</span>
            </h3>
            <h3>
              RBG's: <span>Haha yeah..</span>
            </h3>
          </Col>
          <Row>
            <h3> Games Played: 300 </h3>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserDisplay;
