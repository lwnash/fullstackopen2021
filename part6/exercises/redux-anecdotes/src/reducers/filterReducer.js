const filterReducer = (state = '', {type, inputField}) => {
  switch (type) {
    case "filter":
      return inputField;
    default:
      return state;
  }
};

export const filter = (inputField) => {
  return {
    type: 'filter',
    inputField
  }
}

export default filterReducer;
