/* eslint-disable default-case */
export const users = (state = {}, action) => {
    console.log(action)
   switch (action.type) {
     case "USERS_LIST": {
       return { ...state, list: action.payload };
     }
     case "CLEAR_DETAILS":
     case "UPDATE_USER":
     case "USER_DETAILS": {
       return { ...state, details: action.payload };
     }
   }
    return state
}



