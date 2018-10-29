import React from 'react';

const Search = ({ match }) => {
  return (
    <div>
      <h1> Henlo (OvO") {match.params.id}</h1>
    </div>
  );
};

export default Search;
