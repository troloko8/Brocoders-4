import { combineReducers } from "redux";
import { mainContainerReducer } from "./mainContainer/reducers";
import { stopwatchReducer } from "./stopwatch/reducers";

export default combineReducers({
  mainContainer: mainContainerReducer,
  stopwatch: stopwatchReducer
});