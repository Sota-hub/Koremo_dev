import React, { useState } from "react";
import { PageFC } from "../../../../types";
import Header from "../../../../organisms/Header";
import HomeDetailOrg from "../../../../organisms/HomeDetailOrg";
import Alert from "../../../../atoms/Alert";
import styles from "./styles.module.css";

const Detail: PageFC = (props) => {
  const { router } = props;
  const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <div className={styles.container}>
        <HomeDetailOrg router={router} setMessage={setMessage} />
      </div>
      {message && <Alert message={message} />}
    </>
  );
};

export default Detail;
