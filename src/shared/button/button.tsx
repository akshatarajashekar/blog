import { buttonType } from "./types";
import styled from "styled-components";

const ButtonStyle = styled.div`
  width: fit-content;
  height: fit-content;
  border: 2px solid black;
  padding: 4px 5px;
  font-size: 0.7em;
  font-weight: 500;
  cursor: pointer;
`;

const cssPrefix = "rx-button";
const CardListPane = (props: buttonType) => (
  <div className={`${cssPrefix}`}>
    <ButtonStyle>
      <span className={`${cssPrefix}__textStyle`}>{props.content}</span>
    </ButtonStyle>
  </div>
);
export default CardListPane;
