import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className='min-h-full grid items-center justify-center pt-10'>
        <img src={img} alt='not found' />
        <h3 className='text-2xl text-center pt-10'>Ohh!</h3>
        <p className='text-2xl text-center pt-10'>
          We cannot seem to find page you are looking for
        </p>
        <Link to='/' className='text-2xl text-center capitalize pt-10'>
          back home
        </Link>
      </div>
    );
  }
  return <div>Error</div>;
};
export default Error;
