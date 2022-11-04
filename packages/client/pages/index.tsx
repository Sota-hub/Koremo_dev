import React from "react";
import { PageFC } from "../types";
import titleSSG from "../helpers/functions/titleSSG";

const Index: PageFC = (props) => {
  return <p>Index Page</p>;
};

export const getStaticProps = titleSSG("Koremo");

export default Index;
