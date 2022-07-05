import "./recipie-detail.scss";
import { useAppSelector } from "../../hooks";
import { latestRecipieList } from "../../shared/data/recipieList.data";
import { CarouselListType } from "../../shared/common-type";
import { useEffect, useState } from "react";
import TimeMeter from "../time-meter/time-meter";

const cssPrefix = "recipie-detail_container";

const RecipieDetail = () => {
  const selectedRecipie = useAppSelector(
    (state) => state.recipieDetailStore.selectedRecipieName
  );
  const [selectedStorageName, setSelectedStorageName] = useState("");
  const [selectedRecipieDetail, setSelectedRecipieDetail] =
    useState<CarouselListType>({
      imgPath: "",
      title: "",
      ingridients: [],
      instructions: [],
      timeMeter: {
        prepTime: {
          minutes: 0,
          hour: 0,
        },
        cookTime: {
          minutes: 0,
          hour: 0,
        },
        totalTime: {
          minutes: 0,
          hour: 0,
        }
      }
    });

  useEffect(() => {
    const recipieSelectedFromSession =
      localStorage.getItem("recipieName") || "";
    const name: string =
      recipieSelectedFromSession !== ""
        ? recipieSelectedFromSession
        : selectedRecipie || "";
    setSelectedStorageName(name);

    const fetchRecipieDetails: CarouselListType = latestRecipieList.filter((ele: any) => ele.title === selectedStorageName)[0];
    if (fetchRecipieDetails) {
      console.log(fetchRecipieDetails, 'fetchRecipieDetails');
      setSelectedRecipieDetail({
        imgPath: fetchRecipieDetails.imgPath || "",
        title: fetchRecipieDetails.title || "",
        ingridients: fetchRecipieDetails.ingridients || [],
        instructions: fetchRecipieDetails.instructions || [],
        timeMeter: {
          prepTime: fetchRecipieDetails.timeMeter.prepTime,
          cookTime: fetchRecipieDetails.timeMeter.cookTime,
          totalTime: fetchRecipieDetails.timeMeter.totalTime,
        } || {
          prepTime: {
            minutes: 0,
            hour: 0,
          },
          cookTime: {
            minutes: 0,
            hour: 0,
          },
          totalTime: {
            minutes: 0,
            hour: 0,
          }
        }
      });
    }
  }, [selectedStorageName]);

  return (
    <div className={`${cssPrefix}`}>
      <div className={`${cssPrefix}__block`}>
        <TimeMeter
          prepTime={selectedRecipieDetail.timeMeter.prepTime }
          cookTime={selectedRecipieDetail.timeMeter.cookTime}
          totalTime={selectedRecipieDetail.timeMeter.totalTime}
        />
        <div className={`${cssPrefix}__block__header`}>Ingredients</div>
        <ul>
          {selectedRecipieDetail.ingridients.map((ele: string, index: any) => {
            return <li key={index}>{ele}</li>;
          })}
        </ul>
        <div className={`${cssPrefix}__block__header`}>Instructions</div>
        <div>
        <ul>
          {selectedRecipieDetail.instructions.map((ele: string, index: any) => {
            return <li key={index}>{ele}</li>;
          })}
        </ul>
        </div>
      </div>
      <div
        className={`${cssPrefix}__background`}
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/" + selectedRecipieDetail.imgPath
          })`,
        }}
      ></div>
    </div>
  );
};

export default RecipieDetail;
