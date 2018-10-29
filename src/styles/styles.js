import styled, { css } from 'styled-components';

// ***
// Colors
// ***

const colors = {
  black: '#2f2f2f',
  white: '#ffffff',
  textblue: '#18d7dd',
};

const { black, white, textblue } = colors;

// ***
// Global
// ***

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  min-height: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

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
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

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
`;
