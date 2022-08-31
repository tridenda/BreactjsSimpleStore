import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root, .App {
    height: 100%;
    margin: 0;
    font-family: "Open Sans", "Halvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    margin: 0;
  }
`;

export default GlobalStyle;
