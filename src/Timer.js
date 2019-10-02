import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
// import './Timer.css';
import MainContainer from "./components/MainContainer";

const store = createStore(rootReducer);

function Timer() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

export default Timer;
