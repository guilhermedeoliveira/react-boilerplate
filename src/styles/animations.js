import { keyframes } from 'styled-components'

export const translateVertically = (from, to) => keyframes`
  0% {
    opacity: 0;
    transform: translateY(${from});
  }

  100% {
    opacity: 1;
    transform: translateY(${to});
  }
`

export const shake = () => {}
