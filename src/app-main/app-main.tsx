import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/header/header";
import RouterIndex from "../router/index";
import ScrollBar from "../shared/scroll-bar/scroll-bar";
import Footer from '../components/footer/footer';
import { CardListPane } from "../shared/cardListPane";

const AppMain = () => {
  return (
    <div className="App">
    <ScrollBar>
      <div className="AppContainer">
        <Router>
          <Header/>
          <CardListPane title={""} skewLine={false} />
          <RouterIndex />
          <div className={"flexbox__flex"}></div>
          <Footer></Footer>
        </Router>
      </div>
      </ScrollBar>
    </div>
  );
};
export default AppMain;
