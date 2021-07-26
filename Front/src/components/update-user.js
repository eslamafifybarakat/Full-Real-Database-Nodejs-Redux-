import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
const UpdateUser = (props) => {
  const id = props.match.params.id;
  const [Info, SetInfo] = useState({});
  const name = useRef();
  const email = useRef();
  let Update = () => {
    var ask = window.confirm("Do You Want to Update Data ?");
    if (ask === true) {
      actions
        .UpdateById(id, {
          name: name.current.value,
          email: email.current.value,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      props.history.push(`/user/${id}`);
      window.alert("Data is Updated");
    } else {
      window.alert("data Not Updated");
    }
  };
  const UpdatedUser = (val) => {
    let userData = val.details;
    SetInfo(userData[0]);
  };
  useEffect(() => {
    actions
      .GetById(id)
      .then((val) => {
        UpdatedUser(val);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="container p-5 update">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-10 m-auto">
          <form className="form-control text-center p-4 formUpdate bg-warning">
            <input
              ref={name}
              defaultValue={Info.name}
              className="form-control mb-4 w-75 m-auto mt-5 btn-outline-dark "
              type="text"
              required
              placeholder="Update your Name"
            />
            <input
              ref={email}
              defaultValue={Info.email}
              className="form-control mb-4 w-75 m-auto mt-5 btn-outline-dark"
              type="email"
              required
              placeholder="Enter your E-mail"
            />
            <input
              onClick={() => {
                Update();
              }}
              className="form-control btn btn-light bg-dark  text-white mt-5 w-25 text-center btn-outline-white"
              type="button"
              value="Update"
            />
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};
export default connect((state) => {
  return { UpdateUser: state.UpdateUser };
}, actions)(UpdateUser);
