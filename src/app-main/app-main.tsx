import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/header/header";
import RouterIndex from "../router/index";
import ScrollBar from "../shared/scroll-bar/scroll-bar";
import Footer from '../components/footer/footer';

const AppMain = () => {
  return (
    <div className="App">
    <ScrollBar>
      <div className="AppContainer">
        <Router>
          <Header/>
          <RouterIndex />
          <Footer></Footer>
        </Router>
      </div>
      </ScrollBar>
    </div>
  );
};
export default AppMain;
