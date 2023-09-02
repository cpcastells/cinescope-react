import React, { useState } from "react";

const SearchBar = (): React.ReactElement => {
  const [searchInput, setSearchInput] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="w-3/4 h-12 mx-auto relative" onSubmit={handleOnSubmit}>
      <label htmlFor="search" hidden>
        search
      </label>
      <input
        type="text"
        placeholder="Search movies, series,..."
        id="search"
        value={searchInput}
        autoComplete="off"
        onChange={handleOnChange}
        className="w-full h-full rounded-[5px] pl-11 text-white bg-[#ffffff23] backdrop-blur-[2px]"
      />
    </form>
  );
};

export default SearchBar;
