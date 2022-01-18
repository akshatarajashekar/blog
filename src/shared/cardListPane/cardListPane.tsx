import "./cardListPane.scss";
import { cardListType } from './types';

const cssPrefix = 'cardListPane';
const CardListPane = (props: cardListType) => (
  <div className={`${cssPrefix}__container flexbox`}>
    {props.title !== '' ? <span className={`${cssPrefix}__headerFont`}>{props.title}</span> : <span></span>}
    {/* <div className={"flexbox__flex"}></div> */}
    <div className={`${cssPrefix}__headerStyle${props.skewLine ? ` ${cssPrefix}__headerStyle_skewLine` : ''}`}></div>
  </div>
);
export default CardListPane;
