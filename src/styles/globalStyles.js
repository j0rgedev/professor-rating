import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root {
    --text-color: white;
  }

  html {
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    color: white;
  }
`;

export default GlobalStyles;