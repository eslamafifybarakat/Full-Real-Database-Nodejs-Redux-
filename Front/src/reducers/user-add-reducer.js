export const UserAddReducer = (state, action) => {
  if (action.type === "ADD-USER") {
    return action.payload;
  }
  return state;
};
