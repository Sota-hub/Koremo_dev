import React, { useState } from "react";
import { PageFC } from "../../../types";
import Header from "../../../organisms/Header";
import ProductOrg from "../../../organisms/ProductOrg";
import Alert from "../../../atoms/Alert";
import titleSSG from "../../../helpers/functions/titleSSG";
import auth from "../../../helpers/functions/auth";
import styles from "./styles.module.css";

const Product: PageFC = (props) => {
  const { router } = props;
  const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <div className={styles.container}>
        <ProductOrg router={router} setMessage={setMessage} />
      </div>
      {message && <Alert message={message} />}
    </>
  );
};

export const getStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps = titleSSG("List Detail");

export default auth(Product);
