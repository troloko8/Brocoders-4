import { CONTAINER_CHANGE_BUTTON_TEXT } from './action';

const defaultState = {
  text: 'start',
};

export const mainContainerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONTAINER_CHANGE_BUTTON_TEXT:
      return {
        ...state,
        text: action.payload
      }
  }
  return state;
}