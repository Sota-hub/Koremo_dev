import React from "react";
import { PageFC } from "../types";
import titleSSG from "../helpers/functions/titleSSG";

import Card from "../molecules/Card";

const Index: PageFC = (props) => {
  // const { router, currentUser } = props;

  // console.log(router);
  // console.log(currentUser);

  return (
    <>
      {/* <h1>Success!!</h1> */}
      <Card
        imageId="1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl"
        isItem
        mainText="main-fsfasdfasdtext"
        subText="sub-text"
      ></Card>
      <Card imageId="" isItem mainText="main-text" subText="sub-text"></Card>
    </>
  );
};

export const getStaticProps = titleSSG("Development Trial Page");

export default Index;
