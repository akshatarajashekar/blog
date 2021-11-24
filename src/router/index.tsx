import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Home from "../components/home/home";
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
