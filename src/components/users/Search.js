import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [searchBoxText, setSearchBoxText] = useState('');

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (searchBoxText === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(searchBoxText);
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
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
