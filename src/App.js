import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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
      search: '',
    };
  }

  handleSubmit = searchValue => {
    // const { user, pass } = this.state;
    this.setState({ search: searchValue });
    // console.log(this.state.search);
    console.log(searchValue);
    // console.log(e.target);
  };

  render() {
    const { search } = this.state;
    return (
      <GlobalContainer>
        {/* <Landing
          handleSubmit={search => {
            this.handleSubmit(search);
          }}
        /> */}
        <Switch>
          {/* Routes */}
          <Route
            exact
            path="/"
            component={() => {
              return (
                <Landing
                  handleSubmit={search => {
                    this.handleSubmit(search);
                  }}
                />
              );
            }}
          />

          <Route
            path="/search"
            render={routeProps => (
              <SearchResult {...routeProps} searchInfo={search} />
            )}
          />

          {/* This route should be dynamic based on users/:id */}
          <Route path="/users/autoimonk" component={Auto} />
          <Route path="/users/serrow" component={UserDisplay} />
          {/* Accounts are dynamic like users */}
          <Route path="/account/serrow" component={AccountDisplay} />
          {/* <Route path="/search" component={Search} /> */}
        </Switch>
      </GlobalContainer>
    );
  }
}

// Implement Switch - Routes will be handled here

export default App;
