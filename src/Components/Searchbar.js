import React from "react";
import { useTranslation } from 'react-i18next';
const { useState } = React;

const Searchbar = (props) => {
  const { t, i18n } = useTranslation(['translate']);
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder={t("search")} onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}></button>
      </div>
    </div>
  );
};

export default Searchbar;
