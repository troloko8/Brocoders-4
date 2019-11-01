const defaultState = {
  status: false
};

export const stopwatchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_MODAL_STATUS':
      return {
        ...state,
        status: action.payload
      }
    default:
      break
  }
  return state;
}