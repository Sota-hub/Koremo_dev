import React from "react";
import { PageFC } from "../types";
import titleSSG from "../helpers/functions/titleSSG";

const Index: PageFC = (props) => {
  // const { router, currentUser } = props;

  // console.log(router);
  // console.log(currentUser);

  return (
    <>
      <form action="http://localhost:80/oauth/google" method="get" id="form2" />
      <button type="submit" form="form2">
        google oauth
      </button>
    </>
  );
};

export const getStaticProps = titleSSG("Development Trial Page");

export default Index;
