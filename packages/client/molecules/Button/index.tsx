import React, { FC } from "react";
import ButtonBase from "../../atoms/ButtonBase";
import ButtonIcon from "../../atoms/ButtonIcon";
import ButtonText from "../../atoms/ButtonText";
import styles from "./styles.module.css";
import { ButtonTextProps } from "../../types/buttonText";
import { ButtonIconProps } from "../../types/buttonIcon";

interface ButtonProps extends ButtonIconProps, ButtonTextProps {
  bgColor: number;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  const { bgColor, src, alt, text, textColor, onClick } = props;

  return (
    <ButtonBase bgColor={bgColor} onClick={onClick}>
      {src && alt && <ButtonIcon src={src} alt={alt} />}
      <ButtonText text={text} textColor={textColor} />
    </ButtonBase>
  );
};

export default Button;
