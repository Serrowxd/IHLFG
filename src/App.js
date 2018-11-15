import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Imports
import { SearchResult, Landing, Footer } from './reducer';

// Styles
import { GlobalContainer } from './styles/styles';

class App extends Component {
  render() {
    return (
      <GlobalContainer>
        {/* Routes */}
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={SearchResult} />
        {/* <Route path="/search" component={Search} /> */}

        <Footer />
      </GlobalContainer>
    );
  }
}

// Implement Switch - Routes will be handled here

export default App;
