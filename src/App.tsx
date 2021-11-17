import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../src/components/about/About";
import Contact from "../src/components/contact/Contact";
import Home from "../src/components/home/Home";
// import Navbar from "../src/components/navbar/Navbar";
import Header from "../src/components/Header/Header";

// function App() {
//   return (
//     <div className="App">
//      <HelloWorld/>
//     </div>
//   );
// }

const App = () => {
  return (
    <div className="App AppContainer">
      <Router>
        <Header />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
