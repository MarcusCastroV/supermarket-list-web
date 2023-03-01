import styled from 'styled-components'

export const Title = styled.h1`
  font-weight: bold;
  text-align: ${({ align }) => align || 'center'};
  max-width:  ${({ mw }) => mw || 320}px;
  font-size: ${({ fontSize }) => fontSize || 24}px;
  line-height: ${({ lineHeight }) => lineHeight || 22}px;
  color: black;
  margin-left: ${({ ml }) => ml || 0}px;

  @media (max-width: 420px) {
    max-width: 300px;
    font-size: 18px;
  }
`
export const Subtitle = styled.h1`
  max-width:  ${({ mw }) => mw || 320}px;
  font-size: ${({ fontSize }) => fontSize || 16}px;
  text-align: ${({ align }) => align || 'center'};
  font-weight: 500;
  margin-bottom: ${({ mb }) => mb || 48}px;

  @media (max-width: 420px) {
    max-width: 300px;
    font-size: 12px;
    margin-bottom: ${({ mb }) => mb || 48}px;
  }
`
