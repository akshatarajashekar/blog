import './home.scss';
import { CardListPane } from "../../shared/cardListPane";
import ScrollBar from "../../shared/scroll-bar/scroll-bar";
import { latestRecipieList } from "../../shared/data/recipieList.data";
import Button from '../../shared/button/button';
import CarouselRecipieSlider from '../../shared/carousel/carousel';
import { setNavItem } from "../header/headerReducer";
import { useAppDispatch } from "../../hooks";
import { Link } from "react-router-dom";


const cssPrefix = "recipieCard";
const Home = () => {
  const dispatch = useAppDispatch();
  const onClickEvent = (item: string) => {
    console.log('here');
    dispatch(setNavItem(item));    
  };
  return ( <div>
    <ScrollBar>
      <CardListPane title="Latest Recipies" />
      <CarouselRecipieSlider data={latestRecipieList} slides={5}></CarouselRecipieSlider>
      <Link className={`${cssPrefix}__button_position`} onClick={(event: React.MouseEvent) => onClickEvent('all-recipies')} to={'all-recipies'}>
        <Button content="SHOW MORE" ></Button>
      </Link>
    </ScrollBar>
  </div>
  )
};
export default Home;
