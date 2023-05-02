import styled from 'styled-components'
import HeaderSidebar from './Header-sidebar'

const SidebarStyled = styled.div`
  grid-area: sidebar;
  background-color: var(--black-10);
  padding: 42px 46px;
`
function Sidebar() {
  return (
    <SidebarStyled> 
      <HeaderSidebar />
    </SidebarStyled>
    
  )
}

export default Sidebar
