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

/**
 * clearTinout
 *
 */

export const setNotification = (message, seconds) => {
  return async dispatch => {
    dispatch({
      type: 'set_message',
      message,
    })// thunk
   // clearTimeout(timer)
   // timer = setTimeout(() => dispatch({
    //  type: 'set_message',
    //  message: null// <></> <Nomessage />
   // }), 1000 * seconds);
    // promise 
  }
};

export default notificationReducer;
