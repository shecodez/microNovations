import React from "react";
import { Link } from "gatsby";

import Hamburger from "./Hamburger";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import logo from "../../images/mN_logo.png";
import logoMobile from "../../images/mN_logo_mobile.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuActive: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      mobileMenuActive: !prevState.mobileMenuActive,
    }));
  };

  render() {
    return (
      <header className="header">
        <div className="logo logo-fixed is-hidden-mobile">
          <Link to="/">
            <img alt="microNovations Homepage" src={logo} />
          </Link>
        </div>
        <div className="container">
          <div className="logo logo-mobile is-hidden-tablet">
            <Link to="/">
              <img alt="microNovations Homepage" src={logoMobile} />
            </Link>
          </div>
          <Menu />
          <MenuMobile isActive={this.state.mobileMenuActive} />
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </header>
    );
  }
}

export default Header;
