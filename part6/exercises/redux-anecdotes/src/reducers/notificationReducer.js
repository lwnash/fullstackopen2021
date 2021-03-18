let timer

const notificationReducer = (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case "set_message":
      return action.message;
    default:
      return state;
  }
};

export const setNotification = (message, seconds) => {
  return async dispatch => {
    dispatch({
      type: 'set_message',
      message,
    })
    clearTimeout(timer)
    timer = setTimeout(() => dispatch({
      type: 'set_message',
      message: null
    }), 1000 * seconds);
  }
};

export default notificationReducer;
