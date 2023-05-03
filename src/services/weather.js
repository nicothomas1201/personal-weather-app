import { BASE_API, API_KEY } from "../utils/constants"

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
    const response = await fetch(`${BASE_API}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metric&cnt=${cnt}`)
    return response.json()
  } catch(err){
    throw new Error('cannot get weekly weather')
  }

}

export {
  getCurrentWeather,
  getWeeklyWeather
}