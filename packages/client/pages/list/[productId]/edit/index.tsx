import React, { useState } from "react";
import { PageFC } from "../../../../types";
import Header from "../../../../organisms/Header";
import ProductEditOrg from "../../../../organisms/ProductEditOrg";
import Alert from "../../../../atoms/Alert";
import auth from "../../../../helpers/functions/auth";
import styles from "./styles.module.css";

const ProductEdit: PageFC = (props) => {
  const { router } = props;
  const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <div className={styles.container}>
        <ProductEditOrg router={router} setMessage={setMessage} />
      </div>
      {message && <Alert message={message} />}
    </>
  );
};

export default auth(ProductEdit);
