import { FC } from "react";
import { CardListPane } from "../../shared/cardListPane";
import RecipieCard from "../../shared/recipie-card/recipie-card";
import { latestRecipieList, featuredRecipieList } from "./recipieList.data";
import { RecipieListType } from "./types";

const Home: FC = () => (
  <div>
    <CardListPane title="Latest Recipies" />
    {latestRecipieList.map((ele: RecipieListType, i: any) => {
      return <RecipieCard title={ele.title} image={ele.imgPath} key={i}/>;
    })}
    <CardListPane title="Features" />
    {featuredRecipieList.map((ele: RecipieListType, i: any) => {
      return <RecipieCard title={ele.title} image={ele.imgPath} key={i}/>;
    })}
  </div>
);
export default Home;
