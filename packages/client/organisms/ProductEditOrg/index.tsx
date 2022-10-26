import React, { FC, useState } from "react";
import ImageUploader from "../../molecules/ImageUploader";
import ProductInputs from "../../molecules/ProductInputs";
import Button from "../../molecules/Button";
import { BgColor, TextColor } from "@koremo/enums";
import styles from "./styles.module.css";

const ProductEditOrg: FC = (props) => {
  // 初期値はuseProductQueryで持ってくる
  const [input, setInput] = useState({
    product: "",
    shop: "",
    price: "",
    supplement: "",
  });

  return (
    <div className={styles.container}>
      <div>
        <ImageUploader imageId={null} />
      </div>
      <div>
        <div className={styles.inputs}>
          <ProductInputs input={input} setInput={setInput} />
        </div>
        <div className={styles.button}>
          <Button
            bgColor={BgColor.Pink}
            text="Update"
            textColor={TextColor.White}
            onClick={() => {
              console.log("update");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductEditOrg;
