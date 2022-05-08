import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Cascadia_Mono;
    src: url('../assets/fonts/Cascadia.tff');
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  *, input, button {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  :root {
    /* typscript code font */
    --code-font: Cascadia_Mono;

    /* colors */
    --text-color-primary: #fff;
    --text-color-secondary: #000;
    --border-color: #444;
    --link-color: #719af4;
    --bg-primary: #3178c6;
    --bg-secondary: #235a97;
  }
`