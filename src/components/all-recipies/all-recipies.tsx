import "./all-recipies.scss";
import RecipieCard from "../../shared/recipie-card/recipie-card";
import ScrollBar from "../../shared/scroll-bar/scroll-bar";
import { latestRecipieList } from "../../shared/data/recipieList.data";
import { CarouselListType } from "../../shared/common-type";
import { Link } from "react-router-dom";
import { setNavItem } from "../../components/header/headerReducer";
import { useAppDispatch } from "../../hooks";
import { setRecipieItem } from "../../components/recipie-detail/recipieDetail";

const cssPrefix = "all-recipies";
const AllReciepies = () => {
  const dispatch = useAppDispatch();
  const onClickEvent = (item: string, recipieTitle: string) => {
    dispatch(setNavItem(item));
    localStorage.setItem("recipieName", recipieTitle);
    dispatch(setRecipieItem(recipieTitle));
  };
  return (
    <div className={`${cssPrefix}`}>
      <ScrollBar>
        <div className={`${cssPrefix}__container`}>
          {latestRecipieList.map((ele: CarouselListType, i: any) => {
            return (
              <div key={ele.title}>
                <Link onClick={(event: React.MouseEvent) =>
                        onClickEvent("recipie-detail", ele.title)
                      }
                  to={"recipie-detail"}>
                  <RecipieCard title={ele.title} image={ele.imgPath} key={i} />
                </Link>
              </div>
            );
          })}
        </div>
      </ScrollBar>
    </div>
  );
};
export default AllReciepies;
