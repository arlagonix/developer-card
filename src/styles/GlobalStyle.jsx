import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: Inter, sans-serif;
    line-height: 150%;
  }

  body {
    background: ${({ theme }) => theme.colors.pageBackground};
  }
  
  #root {
    margin: 32px auto;
    width: ${({ theme }) => theme.sizes.maxWidth};
  }
`;

export default GlobalStyle;
