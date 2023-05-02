import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCurrentWeather } from "./slices/weatherSlice"
import { getIconWeather } from "./utils/get-icon-weather"


function App() {
  const currentWeather = useSelector( state => state.weather.currentWeather )
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchCurrentWeather())
  }, [])

  useEffect(() => {
    console.log(currentWeather)
    let url = getIconWeather(currentWeather)
    console.log(url)
  }, [currentWeather])

  

  return (
    <Layout>
      <Sidebar />
    </Layout>
  )
}

export default App
