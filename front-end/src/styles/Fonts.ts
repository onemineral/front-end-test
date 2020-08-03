import { injectGlobal } from 'styled-components';

import merriweatherRegular from './../assets/fonts/merriweather/Merriweather-Regular.ttf'
import merriweatherBold from './../assets/fonts/merriweather/Merriweather-Bold.ttf'

injectGlobal`
  @font-face {
     font-family: 'My custom family';
     src: url('my-source.ttf');
  }
`