/* eslint-disable jsx-a11y/img-redundant-alt */

import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GetById, clearDetails, DeleteById } from "../actions";
import { Card } from "react-bootstrap";

class UserDetails extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="m-2 border border-2 p-2">{this.renderDetails(this.props)}</div>
        )
    }

    renderDetails({ details }) {
        if (details) {
            console.log(details)
            return (
              <>
                <Card className="d-flex bg-dark center  cardStyle">
                  <Card.Body className="text-center">
                    <Card.Title className="text-white ">
                      {details[0].name}
                    </Card.Title>
                  </Card.Body>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:3333/assets/images/${details[0].image}`}
                    alt="image"
                    onError={(e) => {
                      if (e.target.src !== "/images/profile/true_blue.jpg") {
                        e.target.src = "/images/profile/true_blue.jpg";
                      }
                    }}
                  />
                  <Card.Body>
                    <Card.Text className="text-white pt-3">
                      <h5>ID:</h5> {details[0]._id}
                    </Card.Text>
                    <Card.Text className="text-white pt-3">
                      <h5>E-mail:</h5> {details[0].email}
                    </Card.Text>
                    <Card.Text className="text-white">
                      <h5>Details:</h5>Some quick example text to build on the
                      card title and make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-end">
                      <Link
                        className="text-primary p-2 text-decoration-none mx-2"
                        variant="primary"
                      >
                        <button
                          onClick={() => {
                            this.Delete();
                          }}
                          className="btn btn-danger text-white btn-lg"
                        >
                          Delete
                        </button>
                      </Link>
                      <Link
                        to={`/update/${details[0]._id}`}
                        className="text-primary btn  text-decoration-none"
                        variant="primary"
                      >
                        <button
                          onClick={() => {
                            this.Update();
                          }}
                          className="btn btn-light btn-lg"
                        >
                          Update
                        </button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
        }
        return <p>
            no details available.
        </p>
    }

    Delete = () => {
    let ask = window.confirm('Do you Want to delete ? ');
    if (ask === true) {
      DeleteById(this.props.match.params.id)
        .then(() => {
          console.log("deleted");
        })
        .catch((err) => console.log(err));
      this.props.history.push('/')
    } else {
      console.log('User Not Deleted')
    }
  }

    Update = (id) => {
    let ask = window.confirm("Do you Want to Update ? ");
    if (ask === true) {
      this.props.history.push(`/update/${id}`);
    } else {
      console.log("Updated is Cancelled");
    }
  };
    componentDidMount() {
        
        this.props.GetById(this.props.match.params.id);
        // console.log(this.props.GetById(this.props.match.params.id))
    }

    componentWillUnmount(){
        this.props.clearDetails()
    }
}


export default connect(
    (state) => {
        return {
          details: state.users.details,
          DeleteUser: state.users.DeleteUser,
        };
    },
    (dispatch) => {
        return bindActionCreators({ GetById, clearDetails}, dispatch);
    })(UserDetails)