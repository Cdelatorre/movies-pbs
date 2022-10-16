import { NavLink } from "react-router-dom";

const NavBar = (): JSX.Element => {
  return (
    <nav className="navbar bg-dark text-light" style={{ height: "60px" }}>
      <div className="container h-100 d-flex align-items-center">
        <NavLink to="/" className="text-light me-5">
          <i className="fas fa-home" style={{ fontSize: "24px" }}></i>
        </NavLink>
        <div className="w-100 d-flex align-items-center justify-content-end">
          <NavLink to="/?genre=horror" className="text-light me-3 ms-5">
            Horror
          </NavLink>
          <NavLink to="/?genre=romance" className="text-light me-3">
            Romance
          </NavLink>
          <NavLink to="/?genre=comedy" className="text-light me-3">
            Comedy
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
