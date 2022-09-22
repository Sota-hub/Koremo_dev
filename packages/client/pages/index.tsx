import React from "react";
import { PageFC } from "../types";
import titleSSG from "../helpers/functions/titleSSG";

const Index: PageFC = (props) => {
  const { router, currentUser } = props;

  console.log(router);
  console.log(currentUser);

  return <></>;
};

export const getStaticProps = titleSSG("Development Trial Page");

export default Index;
