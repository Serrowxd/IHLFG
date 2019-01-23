import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Imports
import { SearchResult, Landing, UserDisplay, AccountDisplay, Auto } from './reducer';

// Styles
import { GlobalContainer } from './styles/styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: [],
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
  fetchApi = () => {
    axios.get('http://localhost:5500/get').then(res => {
      const user = res.data;
      this.setState({ userdata: user });
      console.log(this.state.userdata);
    });
  };

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
                  fetch={this.fetchApi}
                />
              );
            }}
          />

          <Route
            path="/search"
            render={props => <SearchResult {...props} searchInfo={this.state.search} mainInfo={this.state.userdata} />}
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
