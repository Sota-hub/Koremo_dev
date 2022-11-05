import React, { FC } from "react";
import IndexInstruction from "../../atoms/IndexInstruction";
import { User, List, Check } from "../../public/images";
import styles from "./styles.module.css";

const IndexInstructions: FC = (props) => {
  return (
    <>
      <IndexInstruction src={User} alt="add friend" text="Add your friends" />
      <IndexInstruction
        src={List}
        alt="add to list"
        text="Add what you want to your list "
      />
      <IndexInstruction
        src={Check}
        alt="check friend list"
        text="Check your friend’s lists on the go "
      />
    </>
  );
};

export default IndexInstructions;
