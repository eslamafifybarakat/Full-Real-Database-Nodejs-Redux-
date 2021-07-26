/* eslint-disable jsx-a11y/alt-text */
import {Link} from 'react-router-dom'
import { Card } from "react-bootstrap";
const User = ({ info }) => {
  // const dispatch = useDispatch();


  if (info) {
    return (
      <>
        
        <Card className="d-flex bg-dark center  cardStyle">
          <Card.Body className="text-center">
            <Card.Title className="text-white ">{info.name}</Card.Title>
          </Card.Body>
          <Card.Img
            variant="top"
            src={`http://localhost:3333/assets/images/${info.image}`}
            onError={(e) => {
              if (e.target.src !== "/images/profile/true_blue.jpg") {
                e.target.src = "/images/profile/true_blue.jpg";
              }
            }}
          />
          <Card.Body>
            <Card.Text className="text-white pt-3">ID:{info._id}</Card.Text>
            <Card.Text className="text-white">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="d-flex justify-content-end">
              <Link
                className="text-primary btn btn-outline-info text-decoration-none"
                variant="primary"
                to={`/user/${info._id}`}
              >
                More...
              </Link>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
  return (
      <p>
        There is not any Users Data,please add any data,
        <Link to="/register">Register now....</Link>
      </p>
    
  );
}

export default User;