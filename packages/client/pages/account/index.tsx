import React from "react";
import { PageFC } from "../../types";
import Header from "../../organisms/Header";

import AccountInfo from "../../molecules/AccountInfo";

const Account: PageFC = () => {
  return (
    <>
      <Header />
      <AccountInfo
        imageId="1S7QSL-_Z_ro5spc4AeevmekB6CaDK-bl"
        userName="user111"
        userId="74895123"
      />
    </>
  );
};

export default Account;
