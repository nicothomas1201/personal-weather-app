import { combineReducers } from "redux";
import weatherSlice from "../slices/weatherSlice";
import uiSlice from "../slices/uiSlice";

const rootReducer = combineReducers({
  weather: weatherSlice,
  ui: uiSlice
})

export default rootReducer