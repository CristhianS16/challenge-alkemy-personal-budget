import React from 'react';
import Navigation from './Navigation';

const Header = ({title}) => {
    return (
      <header className="col-12 bg-primary text-white">
          <Navigation 
            title = {title}
          />
        </header>
    )
}

export default Header;
