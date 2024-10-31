import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div>
        <img src={img} alt='page not found' />
        <p>Page Not Found</p>
        <Link to='/'>Home</Link>
      </div>
    );
  }
  return <div>Error</div>;
};
export default Error;
