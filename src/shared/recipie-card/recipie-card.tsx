import './recipie-card.scss';
import { recpipeCardtType } from './types';

const cssPrefix = 'recipieCard';
const RecipieCard = (props: recpipeCardtType) => ( <div className={`${cssPrefix}`}>
  <div className={`${cssPrefix}__container`}></div>
  <div className={`${cssPrefix}__title`}>{props.title}</div>
</div>);
export default RecipieCard;
