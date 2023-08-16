import React from 'react';
import './Header.scss';


const Header = (props) => {
  return (
    <header>
      <img src=
    <svg id="b" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="107.596" height="17.577" viewBox="0 0 107.596 17.577">
  <g id="c" data-name="Layer 1">
    <g>
      <path d="m0,0h5.843v12.799h7.823v4.531H0V0Z" fill="#e8e8e8"/>
      <path d="m27.332,14.309h-6.585l-1.164,3.02h-5.942L21.217,0h5.744l7.576,17.33h-6.041l-1.164-3.02Zm-1.609-4.209l-1.683-4.357-1.684,4.357h3.367Z" fill="#e8e8e8"/>
      <path d="m45.455,17.33l-2.995-4.63-2.921,4.63h-6.66l6.264-8.739L33.101,0h6.561l2.946,4.357,2.872-4.357h6.288l-6.016,8.368,6.388,8.962h-6.685Z" fill="#e8e8e8"/>
      <path d="m52.437,14.359c0-1.906,1.411-3.169,3.268-3.169s3.268,1.263,3.268,3.169c0,1.882-1.411,3.218-3.268,3.218s-3.268-1.337-3.268-3.218Z" fill="#e8e8e8"/>
      <path d="m60.879,0h5.843v17.33h-5.843V0Z" fill="#e8e8e8"/>
      <path d="m86.626,0v17.33h-4.803l-6.585-7.873v7.873h-5.694V0h4.803l6.586,7.873V0h5.694Z" fill="#e8e8e8"/>
      <path d="m96.504,11.586l-1.312,1.461v4.283h-5.744V0h5.744v6.288l5.694-6.288h6.362l-6.932,7.625,7.278,9.705h-6.758l-4.333-5.744Z" fill="#e8e8e8"/>
    </g>
  </g>
</svg> alt="logo" />
      <div className="menu">{props.children}</div>
    </header>
    )
}

export default Header;
