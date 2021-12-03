import { FC } from "react";
import { CardListPane } from "../../shared/cardListPane";
import RecipieCard from "../../shared/recipie-card/recipie-card";
import ScrollBar from '../../shared/scroll-bar/scroll-bar';
import { latestRecipieList, featuredRecipieList } from "./recipieList.data";
import { RecipieListType } from "./types";

const Home: FC = () => (
  <div>
    <ScrollBar>
    <CardListPane title="Latest Recipies" />
    {latestRecipieList.map((ele: RecipieListType, i: any) => {
      return <RecipieCard title={ele.title} image={ele.imgPath} key={i}/>;
    })}
    <CardListPane title="Features" />
    {featuredRecipieList.map((ele: RecipieListType, i: any) => {
      return <RecipieCard title={ele.title} image={ele.imgPath} key={i}/>;
    })}
    </ScrollBar>
  </div>
);
export default Home;
