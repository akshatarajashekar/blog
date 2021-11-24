import { Link } from "react-router-dom";
import "./navbar.scss";
import { NavTypeWrap, Navtype } from "../../common-types/types";
import { setNavItem } from "../header/headerReducer";
import { useAppDispatch } from "../../hooks";
import { useAppSelector } from "../../hooks";

const Navbar = (props: NavTypeWrap) => {
  const propData: Navtype[] = props.navData;
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.headerStore.selectedNavItem);
  
  const onClickEvent = () => {
    console.log('here');
    dispatch(setNavItem("asd"));
    
  console.log(count, "count");
  };
  const navItem = propData.map(function (ele: Navtype, i: any) {
    return (
      <div className="nav-item" key={i} onClick={() => onClickEvent}>
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
