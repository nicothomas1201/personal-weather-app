import { BASE_API, API_KEY } from "../utils/constants"

export async function getCurrentWeather(lat, lon){
  try{
    const response = await fetch(`${BASE_API}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    return response.json()
  } catch(err){
    throw new Error('Error la obtener el clima actual')
  }
}