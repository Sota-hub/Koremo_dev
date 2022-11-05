import React, { FC } from "react";
import IndexOrg from "../organisms/IndexOrg";
import titleSSG from "../helpers/functions/titleSSG";

const Index: FC = (props) => {
  return <IndexOrg />;
};

export const getStaticProps = titleSSG("Koremo");

export default Index;
