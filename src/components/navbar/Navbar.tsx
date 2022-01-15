import { Link } from "react-router-dom";
import "./navbar.scss";
import { NavTypeWrap, Navtype } from "../../common-types/types";
import { setNavItem } from "../header/headerReducer";
import { useAppDispatch } from "../../hooks";
// import { useAppSelector } from "../../hooks";

const Navbar = (props: NavTypeWrap) => {
  const propData: Navtype[] = props.navData;
  const dispatch = useAppDispatch();
  // const count = useAppSelector((state) => state.headerStore.selectedNavItem);

  const onClickEvent = (item: string) => {
    dispatch(setNavItem(item));    
  };
  const navItem = propData.map((ele: Navtype, i: any) => {
    return (
      <div className="nav-item" key={i} onClick={(event: React.MouseEvent) => onClickEvent(ele.title)}>
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
