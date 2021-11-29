import { FC } from "react";
import {CardListPane} from '../../shared/cardListPane';

const Home: FC = () => (
  <div>
    <CardListPane title="Latest Recipies"/>
    <CardListPane title="Features"/>
  </div>
);
export default Home;
