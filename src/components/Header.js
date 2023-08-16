import React from 'react';
import './Header.scss';


const Header = (props) => {
  return (
    <header>
      <img src= 'https://res.cloudinary.com/laxdotcom/image/upload/v1692218727/Asset_1li_k9ocb8.svg' alt="logo" />
      <div className="menu">{props.children}</div>
    </header>
    )
}

export default Header;
