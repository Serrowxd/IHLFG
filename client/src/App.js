import React, { Component } from 'react';

// Styles
import { GlobalContainer } from './styles/styles';
// Imports
import { Landing } from './reducer';

class App extends Component {
  render() {
    return (
      <GlobalContainer>
        <Landing />
      </GlobalContainer>
    );
  }
}

// Implement Switch - Routes will be handled here

export default App;
