import React from 'react';
import NavComponent from './Navbar';

const Header = ({title}) => {
    return (
      <header className="col-12 bg-primary text-white">
          <NavComponent 
            title = {title}
          />
        </header>
    )
}

export default Header;
