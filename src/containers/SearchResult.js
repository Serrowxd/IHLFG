import React, { Component, Fragment } from 'react';

// Styles
import { Col, Row } from '../styles/styles';
// Imports
import { Navigation, FooterS } from '../reducer';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: null,
    };
  }

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <Fragment>
        <Navigation />
        <Col search_result>
          <Row search_result_head>
            <h1>
              Search Results - <span>{this.props.searchInfo}</span>
            </h1>
          </Row>

          {/* These rows will be generated via a map */}
          {/* Current Highest Rating will determine height on the list */}

          <a href="/users/autoimonk">
            <Row search_result>
              {/* This information will be passed as props, temporary holder */}
              <p>[icon]</p>
              <img
                src="https://render-us.worldofwarcraft.com/character/emerald-dream/230/163666150-avatar.jpg"
                alt="smolicon"
              />
              <h1>Autoimonk</h1>
              <p>Emerald Dream</p>
              <p>Monk</p>
              <p>2600 [star rating]</p>
              <p>></p>
            </Row>
          </a>

          <a href="/users/serrow">
            <Row search_result>
              {/* This information will be passed as props, temporary holder */}
              <p>[icon]</p>
              <img
                src="https://render-us.worldofwarcraft.com/character/malganis/124/168002428-avatar.jpg"
                alt="smolicon"
              />
              <h1>Serrow</h1>
              <p>Mal'Ganis</p>
              <p>Druid</p>
              <p>2100 [star rating]</p>
              <p>></p>
            </Row>
          </a>
        </Col>
        <FooterS />
      </Fragment>
    );
  }
}

export default SearchResult;
