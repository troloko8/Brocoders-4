import { GET_MODAL_STATUS } from './actions'

const defaultState = {
  status: false
};

export const stopwatchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_MODAL_STATUS':
      return {
        ...state,
        status: action.payload
      }
  }
  return state;
}

// import {
//   GET_STOPWATCH_NAME_TASK,
//   GET_STOPWATCH_TIME_TO_START,
//   GET_STOPWATCH_TIME_TO_END,
//   GET_STOPWATCH_TIME_TO_SPEND
// } from './actions';

// const defaultState = {
//   name: ' ',
//   timeToStart: ' ',
//   timeToStop: ' ',
//   timeToSpend: ' '
// };

// export const stopwatchReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case GET_STOPWATCH_NAME_TASK:
//       return {
//         ...state,
//         name: action.payload
//       }
//     case GET_STOPWATCH_TIME_TO_START:
//       return {
//         ...state,
//         timeToStart: action.payload
//       }
//     case GET_STOPWATCH_TIME_TO_END:
//       return {
//         ...state,
//         timeToStop: action.payload
//       }
//     case GET_STOPWATCH_TIME_TO_SPEND:
//       return {
//         ...state,
//         timeToSpend: action.payload
//       }
//   }

//   return state;
// }