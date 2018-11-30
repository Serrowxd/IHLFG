import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Route, Link } from 'react-router-dom';

// Styles
import { Col, Row } from '../styles/styles';
// Imports
import { Navigation, Search } from '../reducer';

// Imgs
import serrowpng from '../assets/SERROWpng.png';
import serrow from '../assets/serrowattak.png';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      logmodal: false,
      sigmodal: false,
      user: '',
      pass: '',
      search: '',
    };
  }

  logModal = () => {
    let state = this.state.logmodal;
    this.setState({ logmodal: !state });
  };

  sigModal = () => {
    let state = this.state.sigmodal;
    this.setState({ sigmodal: !state });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { user, pass } = this.state;
    const { search } = this.state;
    console.log({ search });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { user, pass, search } = this.state;
    return (
      <Fragment>
        <Navigation login={this.logModal} signup={this.sigModal} />

        {/* Login Modal */}
        <div className={this.state.logmodal ? 'modal_show' : 'modal_hide'}>
          <h1>
            Let's get you logged in <span>(OvO")</span>
          </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="close_button" onClick={this.logModal} />
            <p>Username</p>
            <input
              type="text"
              placeholder="Username"
              defaultValue={user}
              onChange={this.handleChange}
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              defaultValue={pass}
              onChange={this.handleChange}
            />
            <input type="submit" value="Login" className="submit_button" />
          </form>
        </div>

        {/* Signup Modal */}
        <div className={this.state.sigmodal ? 'modal_show' : 'modal_hide'}>
          <h1>
            Let's get you signed up <span>(OvO")</span>
          </h1>
          <form onChange={this.handleSubmit}>
            <div className="close_button" onClick={this.sigModal} />
            <p>Username</p>
            <input
              type="text"
              placeholder="Username"
              defaultValue={user}
              onChange={this.handleChange}
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              defaultValue={pass}
              onChange={this.handleChange}
            />
            <input type="submit" value="Sign Up" className="submit_button" />
          </form>
        </div>

        {/* Header */}
        <Row className="main_header" main_header>
          <Col styled_header_main>
            <h1> Player Search </h1>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Username#1234"
                className="input_search_header"
                defaultValue={search}
                onChange={this.handleChange}
              />
              <input
                type="submit"
                value="Search"
                className="input_search_button"
              />
            </form>
          </Col>
          <Row styled_header_main>
            <h1>Hate LFG?</h1>
            <h2>So do we</h2>
          </Row>
        </Row>

        {/* Body */}
        <Col body_main>
          <Row main_body_text>
            <Col main_body_text>
              <h1>The Anti-LFG - Made for PvPers, by PvPers.</h1>
              <h1>Avoid the Brainlets.</h1>
              <h1>Play with like-minded players.</h1>
            </Col>
            <Col main_body_text>
              <img
                src={serrowpng}
                className="brainlet_img_main serrow_fix"
                alt="LFG Player"
              />
              <h1>
                "Yeah man I'm 2400 Legion" <span>(2 Star Rating)</span>
              </h1>
            </Col>
          </Row>
          <Row main_body_text>
            <Col main_body_text>
              <img
                src={serrow}
                className="brainlet_img_main"
                alt="LFG Player"
              />
              <h1>
                "Duelist exp" <span>(4.7 Star Rating)</span>
              </h1>
            </Col>
            <Col main_body_text>
              <h1>The LFG YOU want,</h1>
              <h1>Without all the hassle.</h1>
              <button onClick={this.sigModal}>Sign Up</button>
            </Col>
          </Row>
        </Col>
      </Fragment>
    );
  }
}

export default Landing;
