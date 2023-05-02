import styled from 'styled-components'

const ButtonStyled = styled.button`
  font: var(--body-16);
  color: var(--white-10);
  padding: 11px 18px;
  background-color: var(--white-40);
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: none;
`

const ButtonIcon = styled.button`
  padding: 9px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #FFFFFF33;
  inline-size: 40px;
  block-size: 40px;
  vertical-align: middle;
`

function Button({ type, text, icon }) {
  switch(type) {
    case 'icon': {
      return <ButtonIcon>
        {icon}
        {text}
      </ButtonIcon>
    }

    default: {
      return (
        <ButtonStyled>
          {icon}
          {text}
        </ButtonStyled>
      )
    }

  }
  
}

export default Button
