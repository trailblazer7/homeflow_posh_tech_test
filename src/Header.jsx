import React from 'react';
import SearchBox from './SearchBox';

function Header({ setSearchTerm }) {
  return (
    <header className="flex flex-col md:flex-row justify-between">
      <h1 className="text-8xl">
        Posh Properties
      </h1>
      <SearchBox setSearchTerm={setSearchTerm} />
    </header>
  );
};

export default Header;
