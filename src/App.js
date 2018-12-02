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

  // fetchApi = (component, url) => {
  //   axios.get();
  // };

  render() {
    return (
      <GlobalContainer>
        {/* <Landing
          handleSubmit={search => {
            this.handleSubmit(search);
          }}
        /> */}

        {/* Routes */}
        <Switch>
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
            render={props => (
              <SearchResult {...props} searchInfo={this.state.search} />
            )}
          />

          {/* This route should be dynamic based on users/:id */}
          <Route path="/users/autoimonk" component={Auto} />
          <Route path="/users/serrow" component={UserDisplay} />

          {/* Accounts are dynamic like users */}
          <Route path="/account/serrow" component={AccountDisplay} />
        </Switch>
      </GlobalContainer>
    );
  }
}

// Implement Switch - Routes will be handled here

export default App;
