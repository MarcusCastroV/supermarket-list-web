import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 552px;
  height: 720px;
  background-color: white;
  border-radius: 24px;
`
export const BagImage = styled.img.attrs({
  src: '/images/shopping-bag.svg',
  alt: 'Shopping-bag'
})`
  width: 220px;
  height: auto;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 452px;
  margin-top: 24px;
`
