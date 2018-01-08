export default (state = null, action) => {
  switch (action) {
    case "select_library":
      return action.payload;
      break;
    default:
      return state;
  }
};
