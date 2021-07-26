export const UserDeleteReducer = (state, action) => {
  if (action.type === "DELETE_USER") {
    return action.payload;
  }
  return state;
};
