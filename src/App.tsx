import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "../src/components/about/About";
import Contact from "../src/components/contact/Contact";
import Home from "../src/components/home/Home";
import Header from "../src/components/Header/Header";
import Recipies from "../src/components/recipies/recipies";

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
      <Header/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact component={Home} />
          <Route path="/recipies" exact component={Recipies} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
