export interface CarouselListType {
  title: string;
  imgPath: string;
  ingridients: string[];
  instructions: string[];
  timeMeter: TimeMeterType
}


export interface CarouselListPropType {
  data: CarouselListType[];
  slides: number;
}

export interface TimeMeterType {
  prepTime: TimeDivisionType;
  cookTime: TimeDivisionType;
  totalTime: TimeDivisionType;
}
export interface TimeDivisionType {
  hour : number;
  minutes : number;
}