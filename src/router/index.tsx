import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Home from "../components/home/Home";
import Recipies from "../components/recipies/recipies";
import AllReciepies from "../components/all-recipies/all-recipies";

const RouterIndex: FC = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact component={Home} />
      <Route path="/recipies" exact component={Recipies} />
      <Route path="/about" exact component={About} />
      <Route path="/contact"exact  component={Contact} />
      <Route path="/all-recipies" exact component={AllReciepies} />
    </Switch>
  </div>
);
export default RouterIndex;
