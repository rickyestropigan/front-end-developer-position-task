
import React from 'react';

import Navigation from '../../themes/learning/Navigation';


const Header = ({eventNavEnlarge}) => {
  return (
    <header>
        <nav className="container">
           <Navigation/>
        </nav>
    </header>
  );
};


export default Header;