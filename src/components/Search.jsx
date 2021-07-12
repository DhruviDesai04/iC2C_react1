import React from "react";

function Search() {
  return (
    <div className="container">
      <form className="d-flex searchbar2">
        <div className="inputIcon2">
          <i className="fas fa-search fa-lg icon2"></i>
          <input
            className="search2 shadow-sm"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
