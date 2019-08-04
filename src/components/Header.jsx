import React from 'react';

class Header extends React.Component {

  onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  render() {
    return (
      <div className="header">
        <div className="mylogo">
          <a className="mainLogo" href="index.html">
            <img className="mainLogo" src="https://image.flaticon.com/icons/svg/83/83900.svg" alt="main-logo" /></a>
        </div>
        <div id="menu-bar">
          <div id="menu" onClick={this.onClickMenu}>
            <div id="bar1" class="bar"></div>
            <div id="bar2" class="bar"></div>
            <div id="bar3" class="bar"></div>
          </div>
          <ul class="nav" id="nav">
            <li><a href="#">References</a></li>
            <li><a href="#">My Skills</a></li>
          </ul>
          <div class="menu-bg" id="menu-bg"></div>
        </div>
      </div>
    );
  }
}

export default Header;
