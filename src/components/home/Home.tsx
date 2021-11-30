import { FC } from "react";
import {CardListPane} from '../../shared/cardListPane';
import RecipieCard from '../../shared/recipie-card/recipie-card';

const Home: FC = () => (
  <div>
    <CardListPane title="Latest Recipies"/>
    <RecipieCard title="abc"/>
    <RecipieCard title="abc"/>
    <CardListPane title="Features"/>
  </div>
);
export default Home;
