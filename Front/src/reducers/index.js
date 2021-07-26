import { combineReducers } from "redux";
import { users } from "./users";
// import { usersListReducer } from "./users-list-reducer";
// import { userDetailsReducer } from "./user-details-reducer";
// import { UserAddReducer } from "./user-add-reducer";
// import { UserDeleteReducer } from "./user-delete-reducer";
// import { UserUpdateReducer } from "./user-update-reducer";
// import { ClearDetailsReducer } from "./clear-details-reducer";
export default combineReducers({
  users,
  // usersListReducer,
  // userDetailsReducer,
  // UserAddReducer,
  // UserDeleteReducer,
  // UserUpdateReducer,
  // ClearDetailsReducer,
});

// import { userList } from "./user-list";
// import { userDetails } from "./user-details";
// export default combineReducers({
//     userList,
//     userDetail
// })