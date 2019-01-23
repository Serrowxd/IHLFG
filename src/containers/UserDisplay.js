import React, { Component, Fragment } from 'react';

// Styles
import { Col, Row } from '../styles/styles';
// Imports
import { Navigation, FooterS } from '../reducer';

class UserDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: null,
      swap: false,
    };
  }
  render() {
    return (
      <Fragment>
        <Navigation />
        <Row user_row image="https://render-us.worldofwarcraft.com/character/malganis/124/168002428-main.jpg">
          <Col user_information>
            <h1>Serrow</h1>
            <h2>Mal'Ganis</h2>
            <p>[Star Rating]</p>
          </Col>
          <Col user_information user_info_display>
            <Row user_tabs>
              <p>Rating</p>
              {/* <p>Highest</p> */}
              {/* Taking out highest rating for now - not sure if it'll be a used feature */}
              <p>Feedback</p>
            </Row>
            {this.state.swap ? (
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
            ) : (
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
            )}
            <Row update_button>
              <h4> Update Profile </h4>
            </Row>
          </Col>
        </Row>
        <FooterS />
      </Fragment>
    );
  }
}

export default UserDisplay;
