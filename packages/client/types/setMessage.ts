import { Dispatch, SetStateAction } from "react";

export interface SetMessageProps {
  setMessage: Dispatch<SetStateAction<string>>;
}
