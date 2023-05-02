import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getLatLon } from "../utils/geolocation";
import { getCurrentWeather } from "../services";

const initialState = {
  currentWeather: []
}

export const fetchCurrentWeather = createAsyncThunk(
  'data/current-weather',
  async (_ , { dispatch }) => {
    const { lat, lon } = await getLatLon()
    const data = await getCurrentWeather(lat, lon)
    dispatch(setCurrentWeather(data))
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