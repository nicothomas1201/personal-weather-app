import { BASE_API, API_KEY } from "../utils/constants"
import moment from "moment/moment"

async function getCurrentWeather(lat, lon){
  try{
    const response = await fetch(`${BASE_API}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    return response.json()
  } catch(err){
    throw new Error('Error la obtener el clima actual')
  }
}

async function getWeeklyWeather(lat, lon, cnt = 5){
  try{
    const response = await fetch(`${BASE_API}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metric`)
    const { list } = await response.json()
    let newList = []
    // console.log(list)
    for(let i = 1; i <= 5; i++){
      let nextDayDate = moment().add(i, 'days').format('YYYY-MM-DD')
      // console.log(nextDayDate)
      // let newItem = list.find( item => console.log(item.dt_txt.include(nextDayDate)))
      // console.log(newItem)
      // newList.push(newItem)
    }

    console.log(newList)

    return response.json()
  } catch(err){
    throw new Error('cannot get weekly weather')
  }

}

export {
  getCurrentWeather,
  getWeeklyWeather
}