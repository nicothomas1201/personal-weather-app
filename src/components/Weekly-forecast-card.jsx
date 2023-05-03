import styled from 'styled-components'
import { useEffect } from 'react'

const WeeklyForecastCardStyled = styled.div`

`

function WeeklyForecastCard({ data }) {
  useEffect(() => {
    console.log(data)
  })
  return (
    <WeeklyForecastCardStyled>
      WeeklyForecastCard
    </WeeklyForecastCardStyled>
    
  )
}

export default WeeklyForecastCard
