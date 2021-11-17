import { Link } from "react-router-dom";
import "./navbar.scss";
import { NavTypeWrap, Navtype } from "../../common-types/types";

const Navbar = (props: NavTypeWrap) => {
  const propData: Navtype[] = props.navData;
  const navItem = propData.map(function (ele: Navtype, i: any) {
    return (
      <div className="nav-item" key={i}>
        <Link to={ele.path}>{ele.title}</Link>
      </div>
    );
  });
  return (
    <div>
      <nav className="navbar">
        <div className="navbarConatiner">{navItem}</div>
      </nav>
    </div>
  );
};
export default Navbar;
