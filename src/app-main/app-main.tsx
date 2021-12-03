import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/header/header";
import RouterIndex from "../router/index";
import ScrollBar from "../shared/scroll-bar/scroll-bar";

const AppMain = () => {
  return (
    <div className="App AppContainer">
    <ScrollBar>
      <Router>
        <Header />
        <RouterIndex />
      </Router>
      </ScrollBar>
    </div>
  );
};
export default AppMain;
