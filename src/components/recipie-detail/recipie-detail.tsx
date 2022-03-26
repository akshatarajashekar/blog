import "./recipie-detail.scss";
import { useAppSelector } from "../../hooks";
import { latestRecipieList } from "../../shared/data/recipieList.data";

const cssPrefix = "recipie-detail";
const RecipieDetail = () => {
  const recipieSelectedFromSession = sessionStorage.getItem('recipieName');
  const selectedRecipie = useAppSelector(
    (state) => state.recipieDetailStore.selectedRecipieName
  );
  const selectedSessionName = recipieSelectedFromSession !== '' ? recipieSelectedFromSession : selectedRecipie;
  const fetchRecipieDetails = latestRecipieList.filter(
    (ele: any) => ele.title === selectedSessionName
  )[0] || {
    imgPath: "",
    title: "",
  };
  console.log(selectedRecipie, fetchRecipieDetails);
  return (
    <div className={`${cssPrefix}`}>
      <div
        className={`${cssPrefix}__background`}
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/" + fetchRecipieDetails.imgPath
          })`,
        }}
      ></div>
    </div>
  );
};

export default RecipieDetail;