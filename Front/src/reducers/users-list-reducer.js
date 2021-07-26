export const usersListReducer = (state = null, action) => {
    console.log(action)
    if (action.type === "USERS_LIST") {
        return action.payload
    }
    return state
}

