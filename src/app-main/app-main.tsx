import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header/Header";
import RouterIndex from "../router/index";

const AppMain = () => {
  return (
    <div className="App AppContainer">
      <Router>
        <Header />
        <RouterIndex />
      </Router>
    </div>
  );
};
export default AppMain;
