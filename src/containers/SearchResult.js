import React, { Fragment } from 'react';

// Styles
import { Col, Row } from '../styles/styles';
// Imports
import { Navigation } from '../reducer';

const SearchResult = props => {
  return (
    <Fragment>
      <Navigation />
      <Col search_result>
        <Row search_result_head>
          <h1>
            Search Results - <span> Current Rating </span>
          </h1>
        </Row>

        {/* These rows will be generated via a map */}
        <a href="/users/serrow">
          <Row search_result>
            {/* This information will be passed as props, temporary holder */}
            <p>[icon]</p>
            <p>[image]</p>
            <h1>Serrow</h1>
            <p>Mal'Ganis</p>
            <p>Druid</p>
            <p>2100 [star rating]</p>
            <p>></p>
          </Row>
        </a>
        <Row search_result>
          {/* This information will be passed as props, temporary holder */}
          <p>[icon]</p>
          <p>[image]</p>
          <h1>Autoimonk</h1>
          <p>Emerald Dream</p>
          <p>Monk</p>
          <p>2700 [star rating]</p>
          <p>></p>
        </Row>
        <Row search_result>
          {/* This information will be passed as props, temporary holder */}
          <p>[icon]</p>
          <p>[image]</p>
          <h1>Hero</h1>
          <p>Emerald Dream</p>
          <p>Rogue</p>
          <p>1500 [star rating]</p>
          <p>></p>
        </Row>
      </Col>
    </Fragment>
  );
};

export default SearchResult;
