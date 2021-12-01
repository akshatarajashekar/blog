import "./recipie-card.scss";
import { recpipeCardType } from "./types";

const cssPrefix = "recipieCard";
const RecipieCard = (props: recpipeCardType) => (
  <div className={`${cssPrefix}`} >
    <div className={`${cssPrefix}__container`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/' + props.image})` }}></div>
    <div className={`${cssPrefix}__title`}>{props.title}</div>
  </div>
);
export default RecipieCard;
