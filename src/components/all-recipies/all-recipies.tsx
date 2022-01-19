import './all-recipies.scss'
import RecipieCard from "../../shared/recipie-card/recipie-card";
import ScrollBar from "../../shared/scroll-bar/scroll-bar";
import { latestRecipieList } from "../../shared/data/recipieList.data";
import { CarouselListType } from "../../shared/common-type";


const cssPrefix = "all-recipies";
const AllReciepies = () => {
  return (
  <div className={`${cssPrefix}`}>
    <ScrollBar>
      {/* <CardListPane title="All Recipies" skewLine={true}/> */}
      <div className={`${cssPrefix}__container`}>
        {latestRecipieList.map((ele: CarouselListType, i: any) => {
          return <RecipieCard title={ele.title} image={ele.imgPath} key={i} />;
        })}
      </div>
      
    </ScrollBar>
  </div>)
};
export default AllReciepies;
