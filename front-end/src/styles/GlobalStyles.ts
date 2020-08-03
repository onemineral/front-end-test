import { createGlobalStyle } from "styled-components";

import merriweatherRegular from './../assets/fonts/merriweather/Merriweather-Regular.ttf'
import merriweatherBold from './../assets/fonts/merriweather/Merriweather-Bold.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: "merriweather-regular";
    font-style: normal;
    src: url("${merriweatherRegular}");
  }
  @font-face {
    font-family: "merriweather-bold";
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
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
    
    --white: #fff;
    --gray: #8a8c90;
  }
`;
