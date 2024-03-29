import React, { useState } from "react";
import { PageFC } from "../../../../types";
import Header from "../../../../organisms/Header";
import HomeListDetailOrg from "../../../../organisms/HomeListDetailorg";
import Alert from "../../../../atoms/Alert";
import titleSSG from "../../../../helpers/functions/titleSSG";
import auth from "../../../../helpers/functions/auth";
import styles from "./styles.module.css";

const Detail: PageFC = (props) => {
  const { router } = props;
  const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <div className={styles.container}>
        <HomeListDetailOrg router={router} setMessage={setMessage} />
      </div>
      {message && <Alert message={message} />}
    </>
  );
};

export const getStaticProps = titleSSG("Home Detail");

export default auth(Detail);
