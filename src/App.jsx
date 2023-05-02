import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCurrentWeather } from "./slices/weatherSlice"


function App() {
  const currentWeather = useSelector( state => state.weather.currentWeather )
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchCurrentWeather())
  }, [])

  

  return (
    <Layout>
      <Sidebar />
    </Layout>
  )
}

export default App
