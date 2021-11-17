import { FC } from "react";
import Navbar from "../navbar/Navbar";
import "./Header.scss";

const Header: FC = () => (
  <div className={"flexbox"}>
    <div className={"logoStyle"}>
      Blog
      {/* <Route path="/hello" component={Home} /> */}
    </div>
    <div className={"flexbox__flex"}></div>
    <div className={"flexbox__end-justify"}>
      <Navbar />
    </div>
  </div>
);
export default Header;
