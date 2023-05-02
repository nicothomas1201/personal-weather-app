import styled from 'styled-components'

const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(400px, 459px) auto;
  grid-template-rows: 100vh;
  grid-template-areas: "sidebar main";

`

function Layout({ children }) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
    
  )
}

export default Layout
