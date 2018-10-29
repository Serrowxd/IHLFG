import React, { Component } from 'react';

// Styles
import { GlobalContainer, Col, Row } from './styles/styles';
// Imports
import { Navigation } from './reducer';

class App extends Component {
  render() {
    return (
      <GlobalContainer>
        <Navigation />

        <Row className="main_header" main_header>
          <Col styled_header_main>
            <h1> Player Search </h1>
            <form>
              <input type="text" placeholder="Player#1234" />
              <input type="submit" />
            </form>
          </Col>
          <Row styled_header_main>
            <h1>Hate LFG?</h1>
            <h2>So do we</h2>
          </Row>
        </Row>
      </GlobalContainer>
    );
  }
}

export default App;
