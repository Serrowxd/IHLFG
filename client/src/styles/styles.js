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
