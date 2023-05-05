import styled from 'styled-components'
import { useEffect } from 'react'
import moment from 'moment/moment'
import { useState } from 'react'
import { getIconWeather } from '../utils/get-icon-weather'

const WeeklyForecastCardStyled = styled.div`
  block-size: 177px;
  padding: 18px 22px;
  inline-size: 140px;
  box-sizing: border-box;
  background-color: var(--black-10);

  .day-title{
    font: var(--body-16);
    color: var(--white-10);
    margin: 0;
    text-align: center;
  }

`

function WeeklyForecastCard({ data }) {
  const [date, setDate] = useState()

  console.log(data)


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
      <img src={getIconWeather(data)} />
    </WeeklyForecastCardStyled>
    
  )
}

export default WeeklyForecastCard
