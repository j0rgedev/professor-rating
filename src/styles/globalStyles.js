import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    
    :root {
        --background-color: #202024;
        --text-color: white;
    }
  
    html {
        scroll-behavior: smooth;
    }
    
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyles;