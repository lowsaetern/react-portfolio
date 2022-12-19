import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
  const {
    currentPage,
    setCurrentPage
  } = props;

  return (
    <header>
      <h1>Low Saetern</h1>
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Navigation>
    </header>
  );
}

export default Header;