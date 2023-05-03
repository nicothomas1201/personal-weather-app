import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar"
import { useEffect } from "react"
import {  useDispatch } from "react-redux"
import { fetchCurrentWeather, fectchWeeklyWeather } from "./slices/weatherSlice"
import { useSelector } from "react-redux"
import WeeklyForecastList from "./components/Weekly-forecast.-list"


function App() {
  const loading = useSelector(state => state.ui.loading)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchCurrentWeather())
    dispatch(fectchWeeklyWeather())
  }, []) 

  if(!loading){
    return (
      <Layout>
        <Sidebar />
        <WeeklyForecastList />
        
      </Layout>
    )
  } 

  return <span>Loading...</span>
}

export default App
