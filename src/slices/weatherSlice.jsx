import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getLatLon } from "../utils/geolocation";
import { getCurrentWeather, getWeeklyWeather } from "../services";
import { setLoading } from './uiSlice'

const initialState = {
  currentWeather: {},
  weeklyWeather: []
}

export const fetchCurrentWeather = createAsyncThunk(
  'data/current-weather',
  async (_ , { dispatch }) => {
    dispatch(setLoading(true))
    const { lat, lon } = await getLatLon()
    const data = await getCurrentWeather(lat, lon)
    dispatch(setCurrentWeather(data))
    dispatch(setLoading(false))
  }
)

export const fectchWeeklyWeather = createAsyncThunk(
  'data/weekly-weather',
  async (_ , { dispatch }) => {
    dispatch(setLoading(true))
    const { lat, lon } = await getLatLon()
    const data = await getWeeklyWeather(lat, lon)
    dispatch(setWeeklyWeather(data))
    dispatch(setLoading(false))

  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload
    },
    setWeeklyWeather: (state, action) => {
      // console.log(action.payload)
      state.weeklyWeather = action.payload
    }
  }
})

export const { setCurrentWeather, setWeeklyWeather } = weatherSlice.actions
export default weatherSlice.reducer