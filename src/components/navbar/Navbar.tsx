import { Link } from "react-router-dom";
import "./navbar.scss";
import { NavTypeWrap, Navtype } from "../../common-types/types";

const Navbar = (props: NavTypeWrap) => {
  const propData: Navtype[] = props.navData;
  const currentState = propData.map(function (ele: any, i: any) {
    return (
      <div className="nav-item" key={i}>
        <Link to={ele.path}>{ele.title}</Link>
      </div>
    );
  });
  return (
    <div>
      <nav className="navbar">
        <div className="navbarConatiner">{currentState}</div>
      </nav>
    </div>
  );
};
export default Navbar;
