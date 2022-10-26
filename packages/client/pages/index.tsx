import React from "react";
import { PageFC } from "../types";
import titleSSG from "../helpers/functions/titleSSG";

import ProductEditOrg from "../organisms/ProductEditOrg";

const Index: PageFC = (props) => {
  // const { router, currentUser } = props;

  // console.log(router);
  // console.log(currentUser);

  return (
    <>
      {/* <h1>Success!!</h1> */}
      {/* 1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl */}
      <ProductEditOrg />
    </>
  );
};

// type: string;
// name: string;
// placeholder: string;
// value?: string;
// id?: string;
// onChange?: (v: string) => void;

export const getStaticProps = titleSSG("Home");

export default Index;
