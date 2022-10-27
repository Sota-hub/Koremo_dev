import { Dispatch, SetStateAction } from "react";

interface Product {
  product: string;
  shop: string;
  price: string;
  supplement: string;
}

interface Input extends Product {
  imageId: null | string;
}

interface SetInput extends Product {
  imageId: null;
}

export interface InputProps {
  input: Input;
}

export interface SetInputProps {
  setInput: Dispatch<SetStateAction<SetInput>>;
}
