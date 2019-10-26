// import { SET_ROW_TASKS } from './actions';
import { DELETE_ROW_TASKS } from './actions';
import { GENERATE_NEW_TASKS } from './actions';
// import { GET_NEW_TASK } from './actions';
// import { getNewTask } from './actions'



const lastTasks = JSON.parse(localStorage.getItem('tasks'))

export const defaultState = lastTasks === null ? [] : lastTasks;


export const tableTasksReducer = (state = defaultState, action) => {
  switch (action.type) {
    // case SET_ROW_TASKS:
    //   return [
    //     ...state,
    //     action.payload,
    //   ]
    // case DELETE_ROW_TASKS:
    //   return [
    //     ...state.filter((el) => el.number !== action.payload)
    //   ]
    case GENERATE_NEW_TASKS:
      return [
        ...state = [],
        ...action.payload
      ]
    case 'GET_NEW_ROW_TASK':
      return [
        ...state,
        action.playload
      ]
    case 'DELETE_ROW_TASKS':
      return [
        ...state.filter((el) => el.number !== action.payload)
      ]
  }

  return state;
}

// export const getNewTaskThunk = (task) => {
//   return dispatch => {
//     console.log('thunk is work')
//     dispatch(getNewTask(task))
//   }
// }