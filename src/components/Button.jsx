import { Link, Outlet } from "react-router-dom";


const Button = () => {
  return (
    <>
      <button className="button">
        <Link to='/catalogue'>Catalogue</Link>
      </button>
      <Outlet />
    </>
  );
};

export default Button;
