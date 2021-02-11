import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
      font-size: 16px;
      font-weight: 400;
      position: relative;
    }
    
    html, body {
      font-family: franklin-gothic-condensed, sans-serif;
      font-weight: 400;
      font-style: normal;
    }

    body {
      background-color: ${props => props.theme.colors.black1};
      padding: 8.75rem;
      overflow-x: hidden;

      @media ${props => props.theme.breakpoints.m} {
        padding: 5rem 3rem;
      }

      @media ${props => props.theme.breakpoints.s} {
            padding: 5rem 0 0 0;
      }
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ::selection {
        background: ${props => props.theme.colors.black1};
    }

`
