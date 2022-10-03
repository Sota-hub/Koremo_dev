import React from "react";
import { PageFC } from "../types";
import titleSSG from "../helpers/functions/titleSSG";

const Index: PageFC = (props) => {
  // const { router, currentUser } = props;

  // console.log(router);
  // console.log(currentUser);

  return (
    <>
      <h1>Success!!</h1>
    </>
  );
};

export const getStaticProps = titleSSG("Development Trial Page");

export default Index;
