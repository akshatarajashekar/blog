import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbarConatiner">
          <div className="nav-item">
            <Link to="/home">Home</Link>
          </div>
          <div className="nav-item">
            <Link to="/recipies">Recipies</Link>
          </div>
          <div className="nav-item">
            <Link to="/about">About</Link>
          </div>
          <div className="nav-item">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
