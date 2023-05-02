import { combineReducers } from "redux";
import weatherSlice from "../slices/weatherSlice";

const rootReducer = combineReducers({
  weather: weatherSlice
})

export default rootReducer