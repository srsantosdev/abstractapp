import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f1f5f9;
    -webkit-font-smoothing: antialiased;
    font: 16px 'Roboto Condensed', sans-serif;
    color: #272338;
  }

  html, body, #root {
    height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;
