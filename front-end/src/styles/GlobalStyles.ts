import { createGlobalStyle } from "styled-components";

import merriweatherRegular from './../assets/fonts/merriweather/Merriweather-Regular.ttf'
import merriweatherBold from './../assets/fonts/merriweather/Merriweather-Bold.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: "merriweather";
    font-style: normal;
    src: url("${merriweatherRegular}");
  }
  @font-face {
    font-family: "merriweather";
    font-style: bold;
    src: url("${merriweatherBold}");
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'merriweather-regular', sans-serif;
  }
  :root {
    --background: #FFFFFF 0% 0% no-repeat padding-box;
    --black: #2E2B30;
    --white: #fff;
    --gray: #8a8c90;
  }
`;
