// import { CarouselDataTypeWrap } from './types';
import "./carousel.scss";
import styled from "styled-components";
import RecipieCard from "../recipie-card/recipie-card";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { CarouselListType, CarouselListPropType } from "../common-type";
import { useState } from "react";

const ContainerStyle = styled.div`
  display: flex;
  overflow: hidden;
`;

const ArrowContainer = styled.div`
  align-self: center;
  cursor: pointer;
  padding: 0px;
`;

const cssPrefix = "carousel";
const CarouselRecipieSlider = (props: CarouselListPropType) => {
  const slides = props.slides;
  const carouselListLength: number = props.data.length;
  const initialDataList = props.data.slice(0, slides);
  const [displayItemList, setInput] =
    useState<CarouselListType[]>(initialDataList);
  const [carouselLeftIndexNumber, setCarouselInput] = useState<number>(1);
  const [carouselRightIndexNumber, setCarouselRightIndexInput] =
    useState<number>(slides);

  const onClickRightEvent = () => {
    let listOfItems: CarouselListType[] = [];
    const tempDataList = [...props.data];
    let flag = false;
    console.log(
      carouselLeftIndexNumber,
      carouselRightIndexNumber,
      "carouselLeftIndexNumber"
    );
    for (
      let i = carouselLeftIndexNumber;
      i < carouselLeftIndexNumber + slides;
      i++
    ) {
      if (i === carouselListLength) {
        listOfItems = [
          ...listOfItems,
          ...[tempDataList[carouselListLength - i]],
        ];
      } else if (i > carouselListLength - 1) {
        flag = true;
        listOfItems = [
          ...listOfItems,
          ...[tempDataList[i - carouselListLength]],
        ];
      } else {
        listOfItems = [...listOfItems, ...[tempDataList[i]]];
      }
    }
    if (flag) {
      setCarouselInput(0);
    } else {
      setCarouselInput(carouselLeftIndexNumber + 1);
    }
    setCarouselRightIndexInput(carouselLeftIndexNumber + slides - 1);
    setInput(listOfItems);
  };

  const onClickLeftEvent = () => {
    let listOfItems: CarouselListType[] = [];
    const tempDataList = [...props.data];
    for (let i = 1; i < slides + 1; i++) {
      const neededIndex = carouselRightIndexNumber - i - 1;
      if (neededIndex < 0) {
        listOfItems = [
          ...[tempDataList[carouselListLength + neededIndex]],
          ...listOfItems,
        ];
      } else if (neededIndex === carouselListLength) {
        listOfItems = [...[tempDataList[0]], ...listOfItems];
      } else {
        listOfItems = [...[tempDataList[neededIndex]], ...listOfItems];
      }
    }
    if (carouselRightIndexNumber === 0) {
      setCarouselRightIndexInput(carouselListLength - 1);
    } else {
      setCarouselRightIndexInput(carouselRightIndexNumber - 1);
    }
    if (carouselLeftIndexNumber === carouselListLength) {
      setCarouselInput(0);
    } else if (carouselLeftIndexNumber === 0) {
      setCarouselInput(carouselListLength);
    } else {
      setCarouselInput(carouselLeftIndexNumber - 1);
    }
    setInput(listOfItems);
  };

  const itemList = displayItemList.map((ele: CarouselListType, i: any) => {
    return (
      <div key={ele.title}>
        <RecipieCard title={ele.title} image={ele.imgPath} />
      </div>
    );
  });

  return (
    <div className={`${cssPrefix}`}>
      <ArrowContainer onClick={() => onClickLeftEvent()}>
        <FaCaretLeft />
      </ArrowContainer>
      <ContainerStyle>{itemList}</ContainerStyle>
      <ArrowContainer onClick={() => onClickRightEvent()}>
        <FaCaretRight />
      </ArrowContainer>
    </div>
  );
};
export default CarouselRecipieSlider;
