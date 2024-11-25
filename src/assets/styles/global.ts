import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif; /* Replace 'Roboto' with your chosen font */
    background-color: #f9f9f9;
    color: #333;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    display: block; /* Set to block to prevent flexbox centering */
  }

  #root {
    width: 100%;
    height: 100%;
    display: block; /* Adjust to block to fill the width */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`;

export default GlobalStyle;
