import styled from 'styled-components'
import { useEffect } from 'react'
import moment from 'moment/moment'
import { useState } from 'react'

const WeeklyForecastCardStyled = styled.div`
  block-size: 177px;
  /* inline-size: 100%; */
  padding: 18px 22px;
  background-color: var(--black-10);

  .day-title{
    font: var(--body-16);
    color: var(--white-10);
  }

`

function WeeklyForecastCard({ data }) {
  const [date, setDate] = useState()


  useEffect(() => {
    if(parseInt(moment(data.dt_txt).format('D')) === parseInt(moment().format('D')) + 1){
      setDate('Tomorrow')
    } else {
      setDate(moment(data.dt_txt).format('ddd, D MMM '))
    }    
  }, [data.dt_txt])

  return (
    <WeeklyForecastCardStyled>
      <h3 className='day-title'>{date}</h3>
    </WeeklyForecastCardStyled>
    
  )
}

export default WeeklyForecastCard
