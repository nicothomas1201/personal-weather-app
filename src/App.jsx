import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar"
import { useEffect } from "react"
import {  useDispatch } from "react-redux"
import { fetchCurrentWeather } from "./slices/weatherSlice"
import { useSelector } from "react-redux"


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
      </Layout>
    )
  } 

  return <span>Loading...</span>
}

export default App
