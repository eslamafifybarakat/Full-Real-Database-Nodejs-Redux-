import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <p className="mt-5 pError">Oops! Something is wrong.</p>

      <p className="font-weight-bold pError">
        Page is not found,
        <Link
          to="/"
          className="text-primary p-2 text-decoration-none mx-2"
          variant="primary"
        >
          <button className="btn btn-white text-black btn-lg btn-outline-dark">
            go home
          </button>
        </Link>
      </p>
      <h1 className="h1Error">404</h1>
    </>
  );
};
export default NotFound;
