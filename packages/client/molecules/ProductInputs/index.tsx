import React, {
  FC,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import Input from "../../atoms/Input";
import styles from "./styles.module.css";

interface Product {
  product: string;
  shop: string;
  price: string;
  supplement: string;
}

interface ProductInputsProps {
  input: Product;
  setInput: Dispatch<SetStateAction<Product>>;
}

const ProductInputs: FC<ProductInputsProps> = (props) => {
  const { input, setInput } = props;

  return (
    <>
      <p className={styles.subheading}>Product :</p>
      <Input
        type="text"
        name="product name"
        value={input.product}
        onChange={useCallback(
          (v: string) =>
            setInput((prev) => ({
              ...prev,
              product: v,
            })),
          []
        )}
      />
      <p className={styles.subheading}>Shop :</p>
      <Input
        type="text"
        name="shop name"
        value={input.shop}
        onChange={useCallback(
          (v: string) =>
            setInput((prev) => ({
              ...prev,
              shop: v,
            })),
          []
        )}
      />
      <p className={styles.subheading}>Price :</p>
      <Input
        type="text"
        name="product price"
        value={input.price}
        onChange={useCallback(
          (v: string) =>
            setInput((prev) => ({
              ...prev,
              price: v,
            })),
          []
        )}
      />
      <p className={styles.subheading}>Supplement :</p>
      <Input
        type="text"
        name="supplement"
        value={input.supplement}
        onChange={useCallback(
          (v: string) =>
            setInput((prev) => ({
              ...prev,
              supplement: v,
            })),
          []
        )}
      />
    </>
  );
};

export default ProductInputs;
