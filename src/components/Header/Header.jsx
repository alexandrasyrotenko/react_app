import React from "react";
import hdr1 from '../../img/hdr1.png';
import hdr from '../../img/hdr.png';

import './Header.scss';

export const Header = () => (
  <header className="header">
    <ul className="header-navigation">
    <li className="header-navigation__item ">
        <button className="header-navigation__link">
       
          <span className="arrow"> V</span>
        </button>
      </li>
      <li className="header-navigation__item ">
        <button
          className="header-navigation__link header-navigation__dashboard"
        >
         
          <span className="header-navigation__notification">5 user ONLINE</span>
        </button>
      </li>
    </ul>

    <ul className="header-navigation-panel">
<li className="header-navigation-panel__item">
<button className="header-navigation-panel__link">
  <span className="header-navigation-panel__refresh">↻</span>
</button>
</li>


<li className="header-navigation-panel__item">
<button className="header-navigation-panel__link">
  <span className="header-navigation-panel__dashboard"> Dashboard </span>
</button>
</li>
    </ul>




  </header>
);
