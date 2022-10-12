import React, { FC } from "react";
import { SearchInputProps } from "../../types/searchInput";
import styles from "./styles.module.css";

const SearchInput: FC<SearchInputProps> = (props) => {
  const { placeholder, onChange, onKeyDown } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.input}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onKeyDown();
          e.currentTarget.blur();
        }
      }}
    />
  );
};

export default React.memo(SearchInput);
