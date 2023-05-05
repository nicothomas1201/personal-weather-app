import styled from 'styled-components'

const WrapperStyled = styled.div`
  margin-inline: 150px;

`

function Wrapper({  children }) {
  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
    
  )
}

export default Wrapper
