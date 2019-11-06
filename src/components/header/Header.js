import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render(){
    return (
      <header class='top'>
    <h1>
      <Link class='home-link' to='/'>
        <img src='https://s.cdpn.io/profiles/user/2184540/80.jpg?1569736779' alt="Flor Icon"/>
        <span>Florencia Gomez</span>
      </Link>
    </h1>
<nav class='nav-menu'>
  <ul id='menu-header'>
    <li class='menu-item'>
      <Link to='/aboutme'>About Me</Link>
    </li>
    <li class='menu-item'>
      <Link to='/projects'>Projects</Link>
    </li>
    <li class='menu-item'>
      <Link to='/skills'>My Skills</Link>
    </li>
    <li class='menu-item'>
      <Link to='/contact'>Contact</Link>
    </li>
  </ul>
  <ul class='header-social'>
    <li class='social-item'>
      <i class="fa fa-linkedin"></i>
    </li>
    <li class='social-item'>
      <i class="fa fa-github-square"></i>
    </li>
  <li class='social-item'>
      <i class="fa fa-codepen"></i>
  </li>
  </ul>
</nav>

</header>
    )
  }
  
}

export default Header;