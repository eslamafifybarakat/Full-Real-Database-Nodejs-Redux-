export const ClearDetailsReducer = (state, action) => {
  if (action.type === "CLEAR_DETAILS") {
    return action.payload;
  }
  return state;
};
