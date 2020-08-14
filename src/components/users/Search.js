import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [searchBoxText, setSearchBoxText] = useState('');

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (searchBoxText === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(searchBoxText);
      setSearchBoxText('');
    }
  };
  const onChangeHandle = (e) => {
    setSearchBoxText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandle} className="form">
        <input
          type="text"
          name="searchBoxText"
          placeholder="Search users..."
          value={searchBoxText}
          onChange={onChangeHandle}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
