import "./time-meter.scss";
import { TimeMeterType } from "./time-meter-type";

const cssPrefix = "time-meter-container";

const TimeMeter = (props: TimeMeterType) => {
  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}__borderStyle`}>
        <div className={`${cssPrefix}__header`}>Preparation Time</div>
        <span>
          {props.prepTime.hour ? props.prepTime.hour : ''}
        </span>
        <span>{props.prepTime.hour ? ' Hour ' : ' '}</span>
        <span>
          {props.prepTime.minutes ? props.prepTime.minutes : ''}
        </span>
        <span>{props.prepTime.minutes ? ' Minutes' : ' '}</span>
      </div>
      <div className={`${cssPrefix}__borderStyle`} style={{borderLeft: '0px'}}>
      <div className={`${cssPrefix}__header`}>Cooking Time</div>
        <span>
          {props.cookTime.hour ? props.cookTime.hour : ''}
        </span>
        <span>{props.cookTime.hour ? ' Hour ' :' '}</span>
        <span>
          {props.cookTime.minutes ? props.cookTime.minutes : ''}
        </span>
        <span>{props.cookTime.minutes ? ' Minutes ' :''}</span>
      </div>
      <div className={`${cssPrefix}__borderStyle`} style={{borderLeft: '0px'}}>
      <div className={`${cssPrefix}__header`}>Total Time</div>
        <span>
          {props.totalTime.hour > 0 ? props.totalTime.hour :''}
        </span>
        <span>{props.totalTime.hour > 0 ? ' Hour ' :' '}</span>
        <span>
          {props.totalTime.minutes > 0 ? props.totalTime.minutes : ''}
        </span>
        <span>{props.totalTime.hour > 0 ? ' Minutes' :' '}</span>
      </div>
    </div>
  );
};
export default TimeMeter;
