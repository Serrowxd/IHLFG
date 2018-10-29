import React, { Component } from 'react';

// Styles
import { GlobalContainer, Col, Row } from './styles/styles';
// Imports
import { Navigation } from './reducer';
// Imgs
import brainlet from './assets/brainletultima.png';
import serrow from './assets/serrowattak.png';

class App extends Component {
  render() {
    return (
      <GlobalContainer>
        <Navigation />

        {/* Header */}
        <Row className="main_header" main_header>
          <Col styled_header_main>
            <h1> Player Search </h1>
            <form>
              <input
                type="text"
                placeholder="Username#1234"
                className="input_search_header"
              />
              <input
                type="submit"
                value="Search"
                className="input_search_button"
              />
            </form>
          </Col>
          <Row styled_header_main>
            <h1>Hate LFG?</h1>
            <h2>So do we</h2>
          </Row>
        </Row>

        {/* Body */}
        <Col body_main>
          <Row main_body_text>
            <Col main_body_text>
              <h1>The Anti-LFG - Made for PvPers, by PvPers.</h1>
              <h1>Avoid the Brainlets.</h1>
              <h1>Play with like-minded players.</h1>
            </Col>
            <Col main_body_text>
              <img
                src={brainlet}
                className="brainlet_img_main"
                alt="LFG Player"
              />
              <h1>
                "Yeah man I'm 2400 Legion" <span>(2 Star Rating)</span>
              </h1>
            </Col>
          </Row>

          <Row main_body_text>
            <Col main_body_text>
              <img
                src={serrow}
                className="brainlet_img_main"
                alt="LFG Player"
              />
              <h1>
                "Duelist exp" <span>(4.7 Star Rating)</span>
              </h1>
            </Col>
            <Col main_body_text>
              <h1>The LFG YOU want,</h1>
              <h1>Without all the hassle.</h1>
              <button>Sign Up</button>
            </Col>
          </Row>
        </Col>
      </GlobalContainer>
    );
  }
}

export default App;
