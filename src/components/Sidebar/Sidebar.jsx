import React from "react";
import ava from '../../img/ava.png'
import dots from '../../img/dots.png'
import board from '../../img/board.png'
import projects from '../../img/projects.png'
import settings from '../../img/settings.png'
import logout from '../../img/logout.png'
import upgrade from '../../img/upgrade.png'

import './Sidebar.scss';

export const Sidebar = () => (
  <aside className="sidebar">

    <nav className="navigation">
<a href='#/mypage'>
      <button className="sidebar__ava">
        <h1 className="visually-hidden">Ava</h1>
        <img
          src={ava}
          width="55"
          height="26"
          alt="ava"
        />
        <span class="numb1">2</span>
      </button>
      </a>

      <ul className="admin-panel-navigation">
        
        <a href='#/dots' className="admin-panel-navigation__item">
          <button className="admin-panel-navigation__link admin-panel-navigation__dots-icon dush">
          <img
          src={dots}
          width="19"
          height="26"
          alt="dots"          
        />
          </button>
        </a>

        <a href='#/board' className="admin-panel-navigation__item">
          <button className="admin-panel-navigation__link admin-panel-navigation__board-icon  dush">
          <img
          src={board}
          width="19"
          height="26"
          alt="board"          
        />
          </button>
        </a>

        <a href='#/board' className="admin-panel-navigation__item">
          <button className="admin-panel-navigation__link admin-panel-navigation__board  dush">
         Board
          </button>
        </a>



        <a href='#/projects' className="admin-panel-navigation__item">
          <button className="admin-panel-navigation__link admin-panel-navigation__project-icon  dush">
          <img
          src={projects}
          width="19"
          height="26"
          alt="projects"          
        />
        <span className='numb11'>9</span>
          </button>
        </a>

        <a href='#/projects' className="admin-panel-navigation__item">
          <button className="admin-panel-navigation__link admin-panel-navigation__projects  dush">
         Projects
          </button>
        </a>

        <a   href='#/dots' className="admin-panel-navigation__item">
          <button className="admin-panel-navigation__link admin-panel-navigation__dots-icon dush">
          <img
          src={dots}
          width="19"
          height="26"
          alt="dots"          
        />
          </button>
        </a>


        <a   href='#/settings' className="admin-panel-navigation__item">
          <button className="admin-panel-navigation__link admin-panel-navigation__settings-icon dush">
          <img
          src={settings}
          width="19"
          height="26"
          alt="settings"          
        />
          </button>
      
        </a>
        <a   href='#/settings' className="admin-panel-navigation__item">
          <button className="admin-panel-navigation__link admin-panel-navigation__settings dush">
         Settings
          </button>
        </a>

        <a   href='#/dots' className="admin-panel-navigation__item">
          <button className="admin-panel-navigation__link admin-panel-navigation__dots-icon dush">
          <img
          src={dots}
          width="19"
          height="26"
          alt="dots"          
        />
          </button>


        </a>
        </ul>


      <div className="user-navigation__item">
        <ul className="user-navigation">

        <a   href='#/dots'>
        <button className="user-navigation__dots-icon dush">
        <img
          src={dots}
          width="19"
          height="26"
          alt="dots"
          
        />
        </button>
      
        </a>


        <a   href='#/upgrade'>
        <button className="user-navigation__upgraded-icon dush">
        <img
          src={upgrade}
          width="19"
          height="26"
          alt="dots"
          
        />
        </button>
      
        </a>
        <li>
        <button className="user-navigation__upgrade user-navigation__link">
          Upgrade
        </button>
        </li>
         
     <a   href='#/logout'>
        <button className="user-navigation__logout-icon dush">
        <img
          src={logout}
          width="19"
          height="26"
          alt="dots"
          
        />
        </button>
      
        </a>

     <li>
        <button className="user-navigation__logout user-navigation__link">
          Logout
        </button>
        </li>
        <li>
        <button className="user-navigation__upgrade user-navigation__link">
          Upgrade
        </button>
        </li>
        </ul>
      </div>


      
    </nav>
 </aside>
);
