import React, { Fragment } from 'react';

// Styles
import { Col, Row } from '../styles/styles';
// Imports
import { Navigation } from '../reducer';

const SearchResult = props => {
  return (
    <Fragment>
      <Navigation />
      <Row>
        <h1> Search Results - I also don't like responding to CSS :^) </h1>
      </Row>
      <Col search_result>
        <h1> Henlo (OvO") - I don't like responding to css :^) </h1>
      </Col>
    </Fragment>
  );
};

export default SearchResult;
