const notificationReducer = (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case "set_message":
      return action.message;
    case 'clear_message':
      return action.message
    default:
      return state;
  }
};

export const setMessage = (message) => {
  return {
    type: "set_message",
    message,
  };
};

export const clearMessage = (message) => {
  return {
    type: 'clear_message',
    message
  }
}
export default notificationReducer;
