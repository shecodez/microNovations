import React from "react";
import { Link } from "gatsby";

import Hamburger from "./Hamburger";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import logo from "../../images/logo.svg";
import logoMobile from "../../images/logo-mobile.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuActive: false,
    };
  }

  toggleMenu = (mobileMenuActive) => {
    this.setState((prevState) => ({
      mobileMenuActive: !prevState.mobileMenuActive,
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img alt="microNovations Homepage" src={logo} />
            </Link>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              <img alt="microNovations Homepage" src={logoMobile} />
            </Link>
          </div>
          <MenuMobile active={this.state.mobileMenuActive} />
          <Menu />
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}

export default Header;
