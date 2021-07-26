export const UserUpdateReducer = (state, action) => {
  if (action.type === "UPDATE_USER") {
    return action.payload;
  }
  return state;
};
