import React from "react";
import { PageFC } from "../types";
import titleSSG from "../helpers/functions/titleSSG";

const Index: PageFC = (props) => {
  const { router, currentUser } = props;

  console.log(router);
  console.log(currentUser);

  return (
    <>
      <form action="http://localhost:80/login" method="post">
        <label>Email</label>
        <input type="email" name="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <input type="submit" value="Log in" />
      </form>

      <form action="http://localhost:80/info" method="get">
        <input type="submit" value="Get info" />
      </form>
    </>
  );
};

export const getStaticProps = titleSSG("Development Trial Page");

export default Index;
