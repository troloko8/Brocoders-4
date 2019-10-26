import { combineReducers } from "redux";
import { stopwatchReducer } from "./stopwatch/reducers";
import { tableTasksReducer } from "./tableTasks/reducers";

export default combineReducers({
  stopwatch: stopwatchReducer,
  tableTasks: tableTasksReducer,
});