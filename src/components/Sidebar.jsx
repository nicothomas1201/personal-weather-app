import styled from 'styled-components'
import HeaderSidebar from './Header-sidebar'
import { useSelector } from 'react-redux'
import { getIconWeather } from "../utils/get-icon-weather"
import moment from 'moment/moment'
import Icon from './icons'


const SidebarStyled = styled.div`
  grid-area: sidebar;
  background-color: var(--black-10);
  padding: 42px 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
    margin: 0;
  }

  .current-day{
    color: var(--white-30);
    font: var(--body-18);
  }

  .location{
    display: flex;
    align-items: center;
    gap: 9px;
    font: var(--body-18);
    color: var(--white-30);
  }
`


function Sidebar() {  
  let { currentWeather, temp, name, location } = useSelector(state => {
    return {
      currentWeather: state.weather.currentWeather,
      temp: state.weather.currentWeather.main.temp,
      name: state.weather.currentWeather.weather[0].description,
      location: state.weather.currentWeather.name
    }
  })
  
  

  return (
    <SidebarStyled> 
      <HeaderSidebar />
      <div className='currentWeather-img'>
        <img src={getIconWeather(currentWeather)} width={70} height={70}  />
      </div>

      <h2 className='current-temp'>
        {temp}<span className='centigrades'>°C</span>
      </h2>

      <h3 className='current-name'>{name}</h3>

      <span className='current-day'>Today - {moment().format('ddd D MMMM')}</span>

      <div className='location'>
        <Icon name="pin" size={24} color="var(--white-30)" />
        <span>{location}</span>
      </div>
    </SidebarStyled>
    
  )
}

export default Sidebar
