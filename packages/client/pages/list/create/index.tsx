import React, { useState } from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import ProductCreateOrg from "../../../organisms/ProductCreateOrg";
import Alert from "../../../atoms/Alert";
import auth from "../../../helpers/functions/auth";
import styles from "./styles.module.css";

const ProductCreate: PageFC = (props) => {
  const { currentUser } = props;
  const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <div className={styles.container}>
        <ProductCreateOrg currentUser={currentUser} setMessage={setMessage} />
      </div>
      {message && <Alert message={message} />}
    </>
  );
};

export default auth(ProductCreate);
