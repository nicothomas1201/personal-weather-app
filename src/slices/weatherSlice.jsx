import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getLatLon } from "../utils/geolocation";
import { getCurrentWeather } from "../services";
import { setLoading } from './uiSlice'

const initialState = {
  currentWeather: {}
}

export const fetchCurrentWeather = createAsyncThunk(
  'data/current-weather',
  async (_ , { dispatch, state }) => {
    dispatch(setLoading(true))
    const { lat, lon } = await getLatLon()
    const data = await getCurrentWeather(lat, lon)
    dispatch(setCurrentWeather(data))
    dispatch(setLoading(false))
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload
    }
  }
})

export const { setCurrentWeather } = weatherSlice.actions
export default weatherSlice.reducer