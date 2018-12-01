import React, { Fragment } from 'react';

// Styles
import { Col, Row } from '../../styles/styles';
// Imports
import { Navigation, FooterS } from '../../reducer';

const Auto = props => {
  return (
    <Fragment>
      <Navigation />
      <Row
        user_row
        image="https://render-us.worldofwarcraft.com/character/emerald-dream/230/163666150-main.jpg"
      >
        <Col user_information>
          <h1>Autoimonk</h1>
          <h2>Emerald Dream</h2>
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
              2's: <span>2500</span>
            </h3>
            <h3>
              3's: <span>2600</span>
            </h3>
            <h3>
              RBG's: <span>Haha yeah..</span>
            </h3>
          </Col>
          <Row>
            <h3> Games Played: LOTS </h3>
          </Row>
        </Col>
      </Row>
      <FooterS />
    </Fragment>
  );
};

export default Auto;
