import React from 'react';

function Navigation(props) {
  const {
    currentPage,
    setCurrentPage
  } = props;

  return (
    <nav>
      <ul className='nav justify-content-center'>
        <li className={`nav-item mx-2 ${currentPage === 'about' && `navActive`}`}>
          <span className='nav-link navlink' onClick={() => setCurrentPage('about')}>
            About me
          </span>
        </li>
        <li className={`nav-item mx-2 ${currentPage === 'portfolio' && `navActive`}`}>
          <span className='nav-link navlink' onClick={() => setCurrentPage('portfolio')}>
            Portfolio
          </span>
        </li>
        <li className={`nav-item mx-2 ${currentPage === 'contact' && `navActive`}`}>
          <span className='nav-link navlink' onClick={() => setCurrentPage('contact')}>
            Contact
          </span>
        </li>
        <li className={`nav-item mx-2 ${currentPage === 'resume' && `navActive`}`}>
          <span className='nav-link navlink' onClick={() => setCurrentPage('resume')}>
            Resume
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;