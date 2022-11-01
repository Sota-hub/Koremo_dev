import React, { FC } from "react";
import SearchInput from "../../atoms/SearchInput";
import SearchButton from "../../atoms/SearchButton";
import { SearchInputProps } from "../../types/searchInput";
import { SearchButtonProps } from "../../types/searchButton";
import styles from "./styles.module.css";

interface SearchBarProps extends SearchInputProps, SearchButtonProps {}

const SearchBar: FC<SearchBarProps> = (props) => {
  const { placeholder, onChange, onKeyDown, onClick } = props;

  return (
    <div className={styles.container}>
      <SearchInput
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <SearchButton onClick={onClick} />
    </div>
  );
};

export default React.memo(SearchBar);
