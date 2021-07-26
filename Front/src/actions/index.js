import axios from "axios"

const ApiURL = "http://localhost:3333/api/user/allUser";

// Getting All Users
export const getAllUsers = async () => {
  let response = null;
  try {
    response = await axios.get(ApiURL);
  } catch (err) {
    console.log(err);
  }

  return {
    type: "USERS_LIST",
    payload: response.data,
  };
};

//Getting a Specific User By Name
export const getUserByName = async (name)=>{
    console.log(name);
    let response = "";
    try {
        response = await axios.get(`${ApiURL}/${name}`);
        
    } catch (err) {
        console.log(err)
    }
    //filter by Name
    return{
        type:"USERS_LIST",
        payload:response.data
    }
}

//Getting a Specific User By ID
const ApiURLById = "http://localhost:3333/api/user/getOneUser";
export const GetById = async (id) => {
  let response;
  try {
    response = await axios.get(`${ApiURLById}/${id}`);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "USER_DETAILS",
    payload: response.data,
  };
};

//Inserting a new User
const NewUserURL = "http://localhost:3333/api/user/addNewUser";
export const AddNewUser = async (user) => {
  let response;
  let config = {
    headers: {
      "content-type": "multipart/form-data", 
    },
  };
  try {
    response = await axios.post(`${NewUserURL}`, user, config);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "ADD-USER",
    payload: response.data
  };
};


//Deleting a Specific User
const DeleteURLById = "http://localhost:3333/api/user/deleteUser";
export const DeleteById = async (id) => {
  let response;
  try {
    response = await axios.delete(`${DeleteURLById}/${id}`);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "DELETE_USER",
    payload: response.data,
  };
};


//Updating a Specific User
const UpdateURLById = "http://localhost:3333/api/user/updateUser";
export const UpdateById = async (id, user) => {
  console.log(user);
  let response;
  try {
    response = await axios.put(`${UpdateURLById}/${id}`, user);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "UPDATE_USER",
    payload: response.data,
  };
};


export const clearDetails = ()=>{
    return {
        type:'CLEAR_DETAILS',
        payload:null
    }
}
// let result = await action()
// dispatch(result)
