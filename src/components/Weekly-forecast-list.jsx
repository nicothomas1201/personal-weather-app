import styled from 'styled-components'
import { useSelector } from 'react-redux'
import WeeklyForecastCard from './Weekly-forecast-card'

const WeeklyForecastListStyled = styled.div`
  display: flex;
  gap: 26px;
  margin: auto;
  inline-size: 100%;
`

function WeeklyForecastList() {
  const weeklyWeather = useSelector(state => state.weather.weeklyWeather)

  return (
    <WeeklyForecastListStyled>
      {weeklyWeather ? weeklyWeather.map( (data, index) => {
        return <WeeklyForecastCard key={index} data={data} />
      }) : 'loading'}
      
    </WeeklyForecastListStyled>
    
  )
}

export default WeeklyForecastList
