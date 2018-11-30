import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Imports
import {
  SearchResult,
  Landing,
  Footer,
  UserDisplay,
  AccountDisplay,
} from './reducer';

// Styles
import { GlobalContainer } from './styles/styles';

class App extends Component {
  render() {
    return (
      <GlobalContainer>
        {/* Routes */}
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={SearchResult} />
        {/* This route should be dynamic based on users/:id */}
        <Route path="/users/serrow" component={UserDisplay} />
        <Route path="/account/serrow" component={AccountDisplay} />
        {/* <Route path="/search" component={Search} /> */}

        <Footer />
      </GlobalContainer>
    );
  }
}

// Implement Switch - Routes will be handled here

export default App;
