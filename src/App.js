import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Data
import { users } from './data/users';

// Imports
import {
  SearchResult,
  Landing,
  UserDisplay,
  AccountDisplay,
  Auto,
} from './reducer';

// Styles
import { GlobalContainer } from './styles/styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: users,
    };
  }
  render() {
    return (
      <GlobalContainer>
        {/* Routes */}
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={SearchResult} />
        {/* This route should be dynamic based on users/:id */}
        <Route path="/users/autoimonk" component={Auto} />
        <Route path="/users/serrow" component={UserDisplay} />
        {/* Accounts are dynamic like users */}
        <Route path="/account/serrow" component={AccountDisplay} />
        {/* <Route path="/search" component={Search} /> */}
      </GlobalContainer>
    );
  }
}

// Implement Switch - Routes will be handled here

export default App;
