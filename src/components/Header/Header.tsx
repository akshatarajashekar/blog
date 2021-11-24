import Navbar from "../navbar/Navbar";
import "./Header.scss";
import { data } from "./navdata";
import { NavTypeWrap } from "../../common-types/types";
import { useAppSelector } from "../../hooks";

const navBarProps: NavTypeWrap = {
  navData: data,
};

const Header = () => {
  const count = useAppSelector((state) => state.headerStore.selectedNavItem);
  
  console.log(count, "count");
  // Counter();
  return (
    <div className={"flexbox"}>
      <div className={"logoStyle"}>
        Blog
        {/* <Route path="/hello" component={Home} /> */}
      </div>
      <div className={"flexbox__flex"}></div>
      <div className={"flexbox__end-justify"}>
        <Navbar {...navBarProps} />
      </div>
    </div>
  );
};

export default Header;
