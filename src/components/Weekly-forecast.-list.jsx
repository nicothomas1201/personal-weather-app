import styled from 'styled-components'
import { fectchWeeklyWeather } from '../slices/weatherSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const WeeklyForecastListStyled = styled.div`

`

function WeeklyForecastList() {
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(fectchWeeklyWeather())
  }, [])

  return (
    <WeeklyForecastListStyled>
      
    </WeeklyForecastListStyled>
    
  )
}

export default WeeklyForecastList
