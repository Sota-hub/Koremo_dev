import React, { FC, useState } from "react";
import ImageUploader from "../../molecules/ImageUploader";
import ProductInputs from "../../molecules/ProductInputs";
import Button from "../../molecules/Button";
import { BgColor, TextColor } from "@koremo/enums";
import styles from "./styles.module.css";

const ProductCreateOrg: FC = (props) => {
  const [input, setInput] = useState({
    imageId: null,
    product: "",
    shop: "",
    price: "",
    supplement: "",
  });

  return (
    <div className={styles.container}>
      <div>
        <ImageUploader imageId={input.imageId} setInput={setInput} />
      </div>
      <div>
        <div className={styles.inputs}>
          <ProductInputs input={input} setInput={setInput} />
        </div>
        <div className={styles.button}>
          <Button
            bgColor={BgColor.Pink}
            text="Create"
            textColor={TextColor.White}
            onClick={() => {
              console.log("create");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreateOrg;
