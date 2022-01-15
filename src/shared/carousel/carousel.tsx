// import { CarouselDataTypeWrap } from './types';
import './carousel.scss';
import styled from "styled-components";
import RecipieCard from '../recipie-card/recipie-card';
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";
import { CarouselListType, CarouselListPropType } from '../common-type';
import { useState } from 'react';

const ContainerStyle = styled.div`
  display: flex;
  overflow: hidden;
`;

const ArrowContainer = styled.div`
  align-self: center;
  cursor: pointer;
  padding: 10px;
`;

const cssPrefix = 'carousel';
const CarouselRecipieSlider = (props: CarouselListPropType) => {
  const slides = props.slides;
  const carouselListLength: number = props.data.length;
  let carouselRightIndexNumber: number = 0;
  const initialDataList = props.data.slice(0, slides);
  const [displayItemList, setInput] = useState<CarouselListType[]>(initialDataList);
  const [carouselLeftIndexNumber, setCarouselInput] = useState<number>(1);
  
  const onClickRightEvent = () => {
    let listOfItems: CarouselListType[] = [];
    const tempDataList = [...props.data];
      let flag = false;
      for (let i = carouselLeftIndexNumber; i < (carouselLeftIndexNumber + slides); i++) {
        if (i === carouselListLength) {
          listOfItems = [...listOfItems, ...[tempDataList[carouselListLength - i]]];
        } else if (i > carouselListLength - 1) {
          flag = true;
          listOfItems = [...listOfItems, ...[tempDataList[i - carouselListLength]]];
        } else {
          listOfItems = [...listOfItems, ...[tempDataList[i]]];
        }
      }
      if(flag) {
        setCarouselInput(0);
      } else {
        setCarouselInput(carouselLeftIndexNumber + 1);
      }
    setInput(listOfItems);
  };
  
  const onClickLeftEvent = () => {
    let listOfItems: CarouselListType[] = [];
    const tempDataList = [...props.data];
      let flag = false;
      for (let i = 0; i < (slides); i ++) {
        const index = carouselLeftIndexNumber + 1;
        const neededIndex = index - i - 1;
        if (neededIndex < 0) {
          flag = true;
          listOfItems = [ ...[tempDataList[carouselListLength - 1]], ...listOfItems];
        } else  if (neededIndex === carouselListLength) {
          listOfItems = [...[tempDataList[0]], ...listOfItems];
        } else {
          listOfItems = [...[tempDataList[neededIndex]], ...listOfItems];
        }
      }
      setCarouselInput(carouselLeftIndexNumber -  1);
      if(flag) {
        setCarouselInput(carouselListLength);
      } else {
        setCarouselInput(carouselLeftIndexNumber - 1);
      }
    setInput(listOfItems);
  };

  const itemList = displayItemList.map((ele: CarouselListType, i: any) => {
    return (<div key={ele.title}><RecipieCard title={ele.title} image={ele.imgPath} /></div>)
  });

  return (
    <div className={`${cssPrefix}`}>
      <ArrowContainer onClick={() => onClickLeftEvent()}><FaArrowLeft/></ArrowContainer>
      <ContainerStyle>
        {itemList}
      </ContainerStyle>
      <ArrowContainer onClick={() => onClickRightEvent()}><FaArrowRight/></ArrowContainer>
      

      
    </div>);
}
export default CarouselRecipieSlider;
