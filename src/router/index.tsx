import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Home from "../components/home/Home";
import Recipies from "../components/recipies/recipies";
import AllReciepies from "../components/all-recipies/all-recipies";
import RecipieDetail from "../components/recipie-detail/recipie-detail";

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
      <Route path="/recipie-detail" exact component={RecipieDetail}></Route>
    </Switch>
  </div>
);
export default RouterIndex;
