import styled, { css } from 'styled-components';

// ***
// Colors
// ***

const colors = {
  black: '#2f2f2f',
  blacker: '#232323',
  white: '#ffffff',
  textblue: '#18d7dd',
  gray: '#424242',
};

const { black, blacker, white, textblue, gray } = colors;

// ***
// Global
// ***

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  min-height: 100vh;
  justify-content: space-between;
  /* This sets the page to actually be 100% height??? */
`;

// ***
// Row
// ***

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify};
  width: ${props => props.width};
  height: ${props => props.height};
  align-items: ${props => props.align};

  /* Remove this later */
  color: ${props => props.color};

  /* Navigation Items */
  ${props =>
    props.nav_items &&
    css`
      width: 10%;
      justify-content: space-around;
    `};

  /* Main Header - Row */
  ${props =>
    props.main_header &&
    css`
      width: 100%;
      height: 80vh;
      background-color: ${black};
      /* Background Image handled by LESS */

      justify-content: space-around;
      align-items: center;
      color: ${white};
    `};

  /* Main Header Text Right - Row */
  ${props =>
    props.styled_header_main &&
    css`
      h1 {
        font-size: 10rem;
      }

      h2 {
        font-size: 2rem;
      }
    `};

  /* Main Body Text - Row */
  ${props =>
    props.main_body_text &&
    css`
      justify-content: space-around;
    `};

  /* Search Results Header */
  ${props =>
    props.search_result_head &&
    css`
      justify-content: center;
      padding-bottom: 3rem;
    `}

    /* Search Results */
  ${props =>
    props.search_result &&
    css`
      justify-content: space-around;
      font-size: 1.2rem;
      position: relative;
      overflow: hidden;
      text-align: center;
      align-items: center;

      background: ${black};
      padding: 1rem;
      margin: 1rem;

      &:hover {
        background: ${gray};
        cursor: pointer;
      }
      transition: 0.25s;
      /* Animations */

      h1,
      p {
        width: 10rem;
      }
      /* this prevents long names from breaking the list. */

      img {
        width: auto;
        height: 4rem;
      }
    `}

    /* User Row */
  ${props =>
    props.user_row &&
    css`
      justify-content: space-around;
      padding: 3rem;
      /* 80vh with FooterS, 75vh with Footer */
      height: 80vh;
      color: ${white};
      background-color: ${blacker};
      background-image: url(${props => props.image});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
    `}

    ${props =>
      props.user_tabs &&
      css`
        justify-content: space-around;
        width: 100%;
        height: 2rem;
        align-items: center;

        p {
          transition: 0.25s;
          padding: 1rem;
          font-size: 1.5rem;

          &:hover {
            background-color: ${blacker};
            color: ${textblue};
            cursor: pointer;
          }
        }
      `}

    ${props =>
      props.update_button &&
      css`
        h4 {
          font-size: 1.3rem;
          padding: 1rem;
          transition: 0.25s;

          &:hover {
            background-color: ${blacker};
            color: ${textblue};
            cursor: pointer;
          }
        }
      `}


`;

// ***
// Column
// ***

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify};
  width: ${props => props.width};
  height: ${props => props.height};
  align-items: ${props => props.align};

  /* Main Header Text Left - Column */
  ${props =>
    props.styled_header_main &&
    css`
      justify-content: space-around;

      h1 {
        font-size: 2rem;
      }

      form {
        display: flex;
        flex-direction: column;
      }
    `};

  /* Main Body */
  ${props =>
    props.body_main &&
    css`
      background-image: linear-gradient(to left, ${black}, #000000);
      color: ${white};
      padding: 1rem;
    `};

  /* Main Body Text - Column */
  ${props =>
    props.main_body_text &&
    css`
      text-align: center;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 3rem;
        padding: 3rem 0;
      }

      img {
        width: 30rem;
        height: auto;
        padding-top: 2rem;
      }

      button {
        width: 15rem;
        height: 3rem;
        margin: 3rem 0;
        font-size: 2rem;
      }
    `};

  /* Footer Text */
  ${props =>
    props.foot_text &&
    css`
      width: 20%;
      text-align: center;
      justify-content: space-around;
      color: ${white};
      h1 {
        font-size: 1.2rem;
      }

      h2 {
        transition: 0.3s;
        &:hover {
          color: ${textblue};
          cursor: pointer;
        }
      }

      h3 {
        font-size: 2rem;
      }

      h4 {
        margin-top: 0.5rem;
      }
    `};

  /* Search Results */
  ${props =>
    props.search_result &&
    css`
      background-color: ${blacker};
      color: ${white};
      padding: 3rem;
      height: 80vh;

      /* Manual height setting */
    `}

  /* User Information */
  ${props =>
    props.user_information &&
    css`
      width: 20%;
      align-items: center;
      justify-content: center;

      h1,
      h2,
      h3 {
        padding-bottom: 1rem;
      }

      h1 {
        font-size: 5rem;
      }

      h2 {
        font-size: 2rem;
      }
    `}

  /* User Info Display */
  ${props =>
    props.user_info_display &&
    css`
      justify-content: space-around;
      background-color: rgba(0, 0, 0, 0.5);

      h3 {
        font-size: 2rem;
      }
    `}

  /* Account Container */
  ${props =>
    props.account_container &&
    css`
      height: 80vh;
      padding: 3rem;
      background-color: ${blacker};
    `}

  /* Account Container Left */

  ${props =>
    props.acc_cont_left &&
    css`
      color: ${white};
      height: 100%;
      justify-content: center;
      align-items: center;
      width: 30%;

      h1 {
        font-size: 5rem;
        padding-bottom: 2rem;
      }

      p {
        padding: 1rem;
      }

      img {
        width: auto;
        height: 15rem;
        border-radius: 3rem;
      }
    `}
`;

// ***
// Navigation
// ***

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${black};
  color: ${white};
  height: 3rem;
  align-items: center;

  h1 {
    padding: 1rem;
    font-size: 2rem;
  }

  h1,
  h2 {
    transition: 0.3s;
    &:hover {
      color: ${textblue};
      cursor: pointer;
    }
  }
`;

// ***
// Footer
// ***

export const Foot = styled.div`
  display: flex;
  flex-direction: row;
  height: 10vh;
  background-color: ${black};
  justify-content: space-around;

  ${props =>
    props.foots &&
    css`
      height: 3rem;
    `}
`;
