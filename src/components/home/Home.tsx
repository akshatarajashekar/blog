import { FC } from "react";
import { CardListPane } from "../../shared/cardListPane";
import RecipieCard from "../../shared/recipie-card/recipie-card";
import ScrollBar from "../../shared/scroll-bar/scroll-bar";
import { latestRecipieList } from "./recipieList.data";
import { CarouselListType } from "../../shared/common-type";
import Button from '../../shared/button/button';
import CarouselRecipieSlider from '../../shared/carousel/carousel';

const Home: FC = () => (
  <div>
    <ScrollBar>
      <CardListPane title="Latest Recipies" />
      {/* {latestRecipieList.map((ele: CarouselListType, i: any) => {
        return <RecipieCard title={ele.title} image={ele.imgPath} key={i} />;
      })} */}
      <CarouselRecipieSlider data={latestRecipieList} slides={4}></CarouselRecipieSlider>
      <Button content="SHOW MORE"></Button>
      <CarouselRecipieSlider data={latestRecipieList} slides={3}></CarouselRecipieSlider>
      {/* <CardListPane title="Features" />
      {featuredRecipieList.map((ele: RecipieListType, i: any) => {
        return <RecipieCard title={ele.title} image={ele.imgPath} key={i} />;
      })} */}
    </ScrollBar>
  </div>
);
export default Home;
