import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Home from "./components/home";
import UsersList from "./components/users-list";
import UserDetails from "./components/user-details";
import NotFound from './components/not-found';
import Register from "./components/register";
import Search from "./components/search";
import UpdateUser from "./components/update-user";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
const AppRouter = ()=>{
    return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <Link
            className="text-decoration-none d-flex btn-outline-none mr-5 col-1"
            to="/"
          >
            {/* <Navbar.Brand>
              <img
                src="../public/logo512.png"
                width="30"
                height="30"
                className="d-flex mx-4 col-4"
                alt="logo"
              />
            </Navbar.Brand> */}
            <Button
              className=" text-center text-white col-8"
              variant="outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              <Nav className="">
                <h5 className="">Home</h5>
              </Nav>
            </Button>
          </Link>

          <div className="col-1"></div>

          <Link
            className="text-decoration-none d-flex btn-outline-none col-1"
            to="/users"
          >
            <Button
              className="m-auto text-center text-info"
              variant="outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-people"
                viewBox="0 0 16 16"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
              <Nav>
                <h5>Users</h5>
              </Nav>
            </Button>
          </Link>

          <Link
            className="text-decoration-none d-flex btn-outline-none col-1"
            to="/register"
          >
            <Button
              className="m-auto text-center text-warning "
              variant="outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                class="bi bi-person-plus"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                <path
                  fill-rule="evenodd"
                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
              <Nav>
                <h5>Register</h5>
              </Nav>
            </Button>
          </Link>

          <Link
            to="/search"
            className="text-decoration-none d-flex justify-content-end  col-8"
          >
            <Form className="mx-3 ">
              <FormControl
                type="text"
                value="Search"
                readonly
                className="mx-5"
              />
            </Form>
            <Button className="mx-5 " variant="outline-info">
              Search
            </Button>
          </Link>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/update/:id" component={UpdateUser} />
          <Route path="/user/:id" component={UserDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
}
export default AppRouter;

