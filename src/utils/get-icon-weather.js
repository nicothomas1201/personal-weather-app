import { BASE_ICON_API } from "./constants";

export function getIconWeather({ weather }) {
  const { icon: iconCode } = weather.find( item => item.icon ) 
  return `${BASE_ICON_API}/${iconCode}.png`
}

