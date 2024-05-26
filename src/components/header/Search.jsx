import { useState } from "react";

export const Search = () => {
  const [changeInputSearch, setChangeInputSearch] = useState("");

  function searchInput(e) {
    setChangeInputSearch(e.target.value);
    console.log(changeInputSearch);
  }

  return (
    <div>
      <div className="input-group w-75">
        <input
          onChange={searchInput}
          type="text"
          className="form-control rounded-3 search-input-header"
          placeholder="جستجو"
        />
        <span className="search-header-input-group search-header-icon">
          <i className="bi bi-search search-icon "></i>
        </span>
      </div>
      {console.log(changeInputSearch)}
    </div>
  );
};
