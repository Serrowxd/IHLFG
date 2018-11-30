import React, { Fragment } from 'react';

// Styles
import { Col, Row } from '../styles/styles';
// Imports
import { Navigation } from '../reducer';

const UserDisplay = props => {
  return (
    <Fragment>
      <Navigation />
      <Row user_row img={props.image}>
        <Col user_information>
          <h1>{props.name}</h1>
          <h2>{props.realm}</h2>
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
              2's: <span>{props.rating2s}</span>
            </h3>
            <h3>
              3's: <span>{props.rating3s}</span>
            </h3>
            <h3>
              RBG's: <span>Haha yeah..</span>
            </h3>
          </Col>
          <Row>
            <h3> Games Played: {props.games} </h3>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserDisplay;

// This will be used when props are being passed down.
