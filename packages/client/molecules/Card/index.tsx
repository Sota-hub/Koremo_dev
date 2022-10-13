import React, { FC } from "react";
import CardBase from "../../atoms/CardBase";
import CardIcon from "../../atoms/CardIcon";
import CardText from "../../atoms/CardText";
import { CardIconProps } from "../../types/cardIcon";
import { CardTextProps } from "../../types/cardText";
import styles from "./styles.module.css";

interface CardProps extends CardIconProps, CardTextProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card: FC<CardProps> = (props) => {
  const { imageId, isItem, mainText, subText, children, onClick } = props;

  return (
    <CardBase onClick={onClick}>
      <CardIcon imageId={imageId} isItem={isItem} />
      <CardText mainText={mainText} subText={subText} />
      {children}
    </CardBase>
  );
};

export default Card;
