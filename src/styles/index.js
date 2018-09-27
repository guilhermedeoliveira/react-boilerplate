/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
};

/**
 * Iterate through the sizes and create a media template
 *
 * Now we have our methods on media and can use them instead of raw queries
 * ${media.desktop`background: dodgerblue;`}
 * ${media.tablet`background: mediumseagreen;`}
 * ${media.phone`background: palevioletred;`}
 */
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
    ${css(...args)}
    }
  `;

  return acc;
}, {});

export default {
  colors: {
    whiteHalf: 'rgba(255, 255, 255, 0.5)',
    white: '#ffffff',
    red: '#ff0000',
    black: '#000000'
  }
};
