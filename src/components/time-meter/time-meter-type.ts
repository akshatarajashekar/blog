export interface TimeMeterType {
  prepTime: TimeDivisionType;
  cookTime: TimeDivisionType;
  totalTime: TimeDivisionType;
}
export interface TimeDivisionType {
  hour : number;
  minutes : number;
}