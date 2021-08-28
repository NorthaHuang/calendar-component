import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  /* Typography */
  h1 { font-size: 2.875rem; }
  h2 { font-size: 2.25rem; }
  h3 { font-size: 1.75rem; }
  h4 { font-size: 1.375rem; }
  h5 { font-size: 1.125rem; }
  h6 { font-size: 1rem; }

  small {
    font-size: 12px;
  }
  
  /* Button */
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
