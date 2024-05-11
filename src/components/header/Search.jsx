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
          className="form-control rounded-3 input-test"
          placeholder="جستجو"
        />
        <span className="input-group-addon span-search-header">
          <i className="bi bi-search search-icon "></i>
        </span>
      </div>
      {console.log(changeInputSearch)}
    </div>
  );
};
