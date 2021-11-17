import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import Recipies from "../components/recipies/recipies";
const RouterIndex: FC = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact component={Home} />
      <Route path="/recipies" exact component={Recipies} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>
);
export default RouterIndex;
