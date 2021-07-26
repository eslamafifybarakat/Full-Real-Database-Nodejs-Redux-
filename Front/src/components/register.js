import { createRef,  useRef } from "react";
import FormData from 'form-data'
import { connect } from "react-redux";
import * as actions from '../actions/index.js';
const Register = (props) => {
  const name = useRef();
  const email = useRef();
  const image = createRef();
  let InsertedData = () =>{
     let formData = new FormData();
     formData.append('photo',image.current.files[0])
     formData.append('name',name.current.value)
     formData.append('email',email.current.value)
     formData.append('image',image.current.files[0].name)
    
    actions.AddNewUser(formData).then((val) => { console.log(val) }).catch((err) => console.log(err))
    props.history.push("/users")
  }
    return (
      <>
        <div className="container d-flex m-auto w-100 mt-5 pt-5 ">
          <div className="col-5 form-control register-l bg-blue">
            <h1 className="pt-5 text-dark">Hi,..</h1>
            <h4 className="text-italic mx-4 text-black-50">
              Enjoy my dear...!
            </h4>
            <h5 className="text-danger mx-5 px-5">Register now...</h5>
          </div>
          <div className="col-9 register-r ">
            <form className="form-control text-center w-100 ">
              <input
                ref={name}
                className="form-control mb-4 w-75 m-auto mt-5 btn-outline-dark"
                type="text"
                required
                placeholder="Enter your name...."
              />
              <input
                ref={email}
                className="form-control mb-4 w-75 m-auto btn-outline-dark"
                type="email"
                required
                placeholder="Enter your email..."
              />
              <input
                ref={image}
                className="form-control w-75 m-auto btn-outline-dark"
                type="file"
                required
                placeholder="Choose your Image..."
              />
              <input
                onClick={InsertedData}
                className="form-control btn btn-light  text-dark mt-5 w-25 text-center btn-outline-success"
                type="button"
                value="Confirm"
              />
            </form>
          </div>
        </div>
      </>
    );
}
export default connect((state) => {
  return { UserAdd: state.UserAdd }
}, actions)(Register)