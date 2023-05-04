import styled from 'styled-components'
import { useEffect } from 'react'
import moment from 'moment/moment'
import { useState } from 'react'

const WeeklyForecastCardStyled = styled.div`

`

function WeeklyForecastCard({ data }) {
  const [date, setDate] = useState(data.dt_txt)


  useEffect(() => {
    if(parseInt(moment(date).format('D')) === parseInt(moment().format('D')) + 1){
      setDate('Tomorrow')
    } else {
      setDate(moment(date).format('ddd, D MMM '))
    }
    
  }, [data.dt_txt])
  return (
    <WeeklyForecastCardStyled>
      <h3 className='day-title'>{date}</h3>
    </WeeklyForecastCardStyled>
    
  )
}

export default WeeklyForecastCard
