import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import createSagaMiddleware from 'redux-saga';
import { watchAddNewTask } from './store/tableTasks/saga';
import TaskInfo from './components/TaskInfo/TaskInfo'
import MainContainer from "./components/MainContainer/MainContainer";
import { Route, BrowserRouter } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAddNewTask)

function Timer() {

  return (
    <Provider store={store}>
      <BrowserRouter >
        <Route exact path="/" component={MainContainer} />
        <Route path="/task/:id" component={TaskInfo} />
      </BrowserRouter>
    </Provider>
  );
}

export default Timer;
