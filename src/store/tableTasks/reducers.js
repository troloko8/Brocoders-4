import { GENERATE_NEW_TASKS } from './actions';

const lastTasks = JSON.parse(localStorage.getItem('tasks'))

export const defaultState = lastTasks === null ? [] : lastTasks;


export const tableTasksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GENERATE_NEW_TASKS:
      return [
        ...state = [],
        ...action.payload
      ]
    case 'ADD_NEW_TASK':
      return [
        ...state,
        action.payload
      ]
    case 'DELETE_ROW_TASK':
      return [
        ...state.filter((el) => el.number !== action.payload)
      ]
    default:
      break
  }

  return state;
}