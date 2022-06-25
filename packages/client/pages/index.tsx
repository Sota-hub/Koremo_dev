import React from "react";
import { PageFC } from "../types";
import titleSSG from "../helpers/functions/titleSSG";

const Index: PageFC = (props) => {
  const { router, currentUser } = props;

  console.log(router);
  console.log(currentUser);

  return <p>Index page</p>;
};

export const getStaticProps = titleSSG("index page");

export default Index;
