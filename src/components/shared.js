import styled, { css } from 'styled-components'

import styles from '../styles'

// Wrapper and Container

export const WrapperSideBarAndScreens = styled.div`
  display: flex;
  flex-direction: row;

  height: 100%;
  width: 100%;
`

export const WrapperScreens = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  overflow-y: auto;
`

export const WrapperScreen = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor || styles.colors.transparent};
  ${({ appearBack }) => appearBack && css`z-index: -1;`};

  ${({ overflowY }) => overflowY && css`overflow-y: auto;`};
`

export const GradientContainer = styled.div`
  height: 100%;
  padding: 2rem;
  overflow-y: auto;

  background: linear-gradient(${styles.colors.blueDarkGradient} 0%, ${styles.colors.blueSoftGradient} 100%);
`

export const ImageScreenCover = styled.div`
  flex: 0.9;
  position: absolute;
  height: 100%;
  width: 100%;

  background: linear-gradient(
    #000000 0%, rgba(101, 36, 36, 0) 98.9%,
    rgba(0, 0, 0, 0.36) 3.89%, rgba(0, 0, 0, 0) 30.57%
  ), url(${({ image }) => image || 'imageCover'});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Overlay = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 3rem 18rem;
  background-color: rgba(6, 26, 63, 0.8);
  z-index: 2;
`

// Text

export const StyledText = styled.p`
  font-size: ${({ fontSize }) => fontSize || '1.125rem'};
  line-height: ${({ lineHeight }) => lineHeight || '2.25'};
  color: ${({ color }) => color || styles.colors.white};
  ${({ isClickable }) => isClickable && css`cursor: pointer;`};
`

export const RealSignText = styled.p`
  line-height: 1.25rem;
  font-size: 1.05875rem;
  font-weight: 400;
  ${({ bold }) => bold && css`font-weight: bold;`};
  
  color: ${({ color }) => color || styles.colors.white};
`

export const Title = styled.h1`
  margin: 0 0 2rem 0;
  color: ${({ color }) => color || styles.colors.white};
  font-size: ${({ fontSize }) => fontSize || '2em'};
`

// Button

export const Button = styled.button`
  cursor: pointer;
  height: ${({ height }) => height || '3rem'};
  width: ${({ width }) => width || '9rem'};

  font-size: 1em;
  color: ${({ color }) => color || styles.colors.black};
  background-color: ${({ backgroundcolor }) => backgroundcolor || styles.colors.transparent};

  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || 0};
  outline: none;
`

export const StyledButton = styled.button`
  cursor: pointer;
  height: ${({ height }) => height || '3rem'};
  width: ${({ width }) => width || '9rem'};

  color: ${({ color }) => color || styles.colors.white};
  background: linear-gradient(
    ${styles.colors.lightBlue}, ${styles.colors.darkBlue}
  );

  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || '59.96px'};
  outline: none;
`

// Thumbnail

export const Thumbnail = styled.img.attrs({
  // src: ({ src }) => src || thumbnail,
  alt: 'Foto do usuário'
})`
  height: ${({ height }) => height || '3.5em'};
  width: ${({ width }) => width || '3.5em'};

  border-radius: 50%;
  border-width: 1px;
  border-color: ${styles.colors.grayBorderColor};
`

// Logo

export const LogoImage = styled.img.attrs({
  /* src: logoImage, */
  alt: 'Logo'
})`
  height: ${({ height }) => height || '3.5rem'};
  width: ${({ width }) => width || '3.5rem'};
`
