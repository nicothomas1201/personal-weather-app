import styled from 'styled-components'
import Button from './Button'
import Icon from './icons'

const HeaderSidebarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  inline-size: 100%;
`

function HeaderSidebar() {
  return (
    <HeaderSidebarStyled>
      <Button text="Search for places" />
      <Button type="icon" icon={
        <Icon name="navigation" />
      } />
    </HeaderSidebarStyled>
    
  )
}

export default HeaderSidebar
