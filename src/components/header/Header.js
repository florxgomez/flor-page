import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render(){
    return (
      <header className={`top ${this.props.border ? 'top-border' : ''}`}>
    <h1>
      <Link className='home-link' to='/'>
        <img src='https://s.cdpn.io/profiles/user/2184540/80.jpg?1569736779' alt="Flor Icon"/>
        <span>Florencia Gomez</span>
      </Link>
    </h1>
<nav className='nav-menu'>
  <ul id='menu-header'>
    <li className='menu-item'>
      <Link to='/aboutme'>About Me</Link>
    </li>
    <li className='menu-item'>
      <Link to='/projects'>Projects</Link>
    </li>
    <li className='menu-item'>
      <Link to='/skills'>My Skills</Link>
    </li>
    <li className='menu-item'>
      <Link to='/contact'>Contact</Link>
    </li>
  </ul>
  <ul className='header-social'>
    <li className='social-item'>
      <i className="fa fa-linkedin"></i>
    </li>
    <li className='social-item'>
      <i className="fa fa-github-square"></i>
    </li>
  <li className='social-item'>
      <i className="fa fa-codepen"></i>
  </li>
  </ul>
</nav>

</header>
    )
  }
  
}

export default Header;