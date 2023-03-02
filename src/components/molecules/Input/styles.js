import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${props => props.screen === 'Home' ? '452px' : '95%'};
  height: 48px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;

  @media (max-width: 420px) {
    max-width: 300px;
  }
`

export const InputLabel = styled.label`
  font-size: 12px;
  margin: 0px;
  padding-left: 6px;
  padding-top: 6px;
  padding-bottom: 4px;
`
export const InputText = styled.input`
  border: none;
  margin-left: 6px;
  font-size: 16px;
  font-family: 'Avenir-Next';

  :focus {
    outline: none;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`
