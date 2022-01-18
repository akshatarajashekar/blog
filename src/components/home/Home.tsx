import "./home.scss";
import { CardListPane } from "../../shared/cardListPane";
import ScrollBar from "../../shared/scroll-bar/scroll-bar";
import { latestRecipieList } from "../../shared/data/recipieList.data";
import Button from "../../shared/button/button";
import CarouselRecipieSlider from "../../shared/carousel/carousel";
import { setNavItem } from "../header/headerReducer";
import { useAppDispatch } from "../../hooks";
import { Link } from "react-router-dom";

const cssPrefix = "recipieCard";
const weekOftheRecipie = "waffle.jpg";

const Home = () => {
  const dispatch = useAppDispatch();
  const onClickEvent = (item: string) => {
    dispatch(setNavItem(item));
  };
  return (
    <div>
      <ScrollBar>
        
        <div className={`${cssPrefix}__weekOfRecipie_container`}>
          <div
            className={`${cssPrefix}__weekOfRecipie_background`}
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/assets/" + weekOftheRecipie
              })`,
            }}
          ></div>
          <div className={`${cssPrefix}__weekOfRecipie_layer`}>
            <div className={`${cssPrefix}__weekOfRecipie_layer_header`}>
              Recipie of the week
            </div>
            <div className={`${cssPrefix}__weekOfRecipie_layer_recipieHeader`}>
              Waffle
            </div>
            <div className={`${cssPrefix}__weekOfRecipie_layer_viewMore`}>
              View Recipie...
            </div>
          </div>
        </div>
        <CardListPane title="Latest Recipies" skewLine={true} />
        <div className={`${cssPrefix}__carouselContainer`}>
          <CarouselRecipieSlider
            data={latestRecipieList}
            slides={5}
          ></CarouselRecipieSlider>
          <Link
            className={`${cssPrefix}__button_position`}
            onClick={(event: React.MouseEvent) => onClickEvent("all-recipies")}
            to={"all-recipies"}
          >
            <Button content="SHOW MORE"></Button>
          </Link>
        </div>
      </ScrollBar>
    </div>
  );
};
export default Home;
