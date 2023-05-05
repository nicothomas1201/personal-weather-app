import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar"
import { useEffect } from "react"
import {  useDispatch } from "react-redux"
import { fetchCurrentWeather } from "./slices/weatherSlice"
import { useSelector } from "react-redux"
import WeeklyForecastList from "./components/Weekly-forecast-list"
import Wrapper from "./components/Wrapper"


function App() {
  const loading = useSelector(state => state.ui.loading)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchCurrentWeather())
  }, []) 

  if(!loading){
    return (
      <Layout>
        <Sidebar />
        <Wrapper>
          <WeeklyForecastList />        
        </Wrapper>
      </Layout>
    )
  } 

  return <span>Loading...</span>
}

export default App
