import { Dispatch, SetStateAction } from "react";

export interface Input {
  imageId: null | string;
  product: string;
  shop: string;
  price: string;
  supplement: string;
}

export interface InputProps {
  input: Input;
}

export interface SetInputProps {
  setInput?: Dispatch<SetStateAction<Input>>;
}
