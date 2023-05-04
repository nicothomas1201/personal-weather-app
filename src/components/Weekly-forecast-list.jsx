import styled from 'styled-components'
import { useSelector } from 'react-redux'
import WeeklyForecastCard from './Weekly-forecast-card'

const WeeklyForecastListStyled = styled.div`

`

function WeeklyForecastList() {
  const weeklyWeather = useSelector(state => state.weather.weeklyWeather)

  return (
    <WeeklyForecastListStyled>
      {weeklyWeather.list ? weeklyWeather.list.map( (data, index) => {
        return <WeeklyForecastCard key={index} data={data} />
      }) : 'loading'}
      
    </WeeklyForecastListStyled>
    
  )
}

export default WeeklyForecastList
