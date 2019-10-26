import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import createSagaMiddleware from 'redux-saga';
import { watchAddNewTask, watchDeleteTask } from './store/tableTasks/saga';
import { watchModalStatus } from './store/stopwatch/saga';
import TaskInfo from './components/TaskInfo/TaskInfo'
import MainContainer from "./components/MainContainer/MainContainer";
import { Route, HashRouter } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(
  watchAddNewTask,
  watchDeleteTask,
  watchModalStatus
)

function Timer() {

  return (
    <Provider store={store}>
      <HashRouter >
        <Route exact path="/" component={MainContainer} />
        <Route path="/task/:id" component={TaskInfo} />
      </HashRouter>
    </Provider>
  );
}

export default Timer;
