import styled from 'styled-components'
import HeaderSidebar from './Header-sidebar'
import { useSelector } from 'react-redux'
import { getIconWeather } from "../utils/get-icon-weather"
import { useEffect } from 'react'


const SidebarStyled = styled.div`
  grid-area: sidebar;
  background-color: var(--black-10);
  padding: 42px 46px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .currentWeather-img img{
    vertical-align: middle;
  }

  .current-temp{
    font: var(--heading-big);
    margin: 0;

    .centigrades{
      color: var(--white-20);
      font: var(--heading-48);
    }
  }

  .current-name{
    font: var(--heading-36);
    color: var(--white-20);
  }
`


function Sidebar() {  
  let { currentWeather, temp, name } = useSelector(state => {
    console.log(state.weather.currentWeather.weather[0].description)
    return {
      currentWeather: state.weather.currentWeather,
      temp: state.weather.currentWeather.main.temp,
      name: state.weather.currentWeather.weather[0].description,
    }
  })
  
  

  return (
    <SidebarStyled> 
      <HeaderSidebar />
      <div className='currentWeather-img'>
        <img src={getIconWeather(currentWeather)}/>
      </div>

      <h2 className='current-temp'>
        {temp}<span className='centigrades'>°C</span>
      </h2>

      <h3 className='current-name'>{name}</h3>
    </SidebarStyled>
    
  )
}

export default Sidebar
