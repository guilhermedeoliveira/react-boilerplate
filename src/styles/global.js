/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

injectGlobal`
  ${normalize()}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }

  /* remove arrows in input type number */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
`;
