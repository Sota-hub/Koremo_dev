import React, { FC } from "react";
import ButtonBase from "../../atoms/ButtonBase";
import ButtonIcon from "../../atoms/ButtonIcon";
import ButtonText from "../../atoms/ButtonText";
import styles from "./styles.module.css";
import { ButtonTextProps } from "../../types/buttonText";
import { ButtonIconProps } from "../../types/buttonIcon";

interface ButtonProps extends ButtonIconProps, ButtonTextProps {
  bgColor: number;
  form?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { bgColor, form, src, alt, text, textColor, onClick, disabled } = props;

  return (
    <ButtonBase
      bgColor={bgColor}
      form={form}
      onClick={onClick}
      disabled={disabled}
    >
      {src && alt && <ButtonIcon src={src} alt={alt} />}
      <ButtonText text={text} textColor={textColor} />
    </ButtonBase>
  );
};

export default Button;
