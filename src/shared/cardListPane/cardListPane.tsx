import "./cardListPane.scss";
import { cardListType } from './types';

const cssPrefix = 'cardListPane';
const CardListPane = (props: cardListType) => (
  <div className={"flexbox"}>
    <span className={`${cssPrefix}__headerFont`}>{props.title}</span>
    {/* <div className={"flexbox__flex"}></div> */}
    <div className={`${cssPrefix}__headerStyle`}></div>
  </div>
);
export default CardListPane;
