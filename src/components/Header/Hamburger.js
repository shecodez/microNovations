import React from "react";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
    this.props.toggleMenu(this.state.isActive);
  };

  render() {
    return (
      <button
        id="toggle-main-menu-mobile"
        className={`hamburger is-hidden-tablet ${
          this.state.isActive ? "is-active" : ""
        }`}
        type="button"
        onClick={this.handleToggle}
      >
        <div className="menu-wrapper">
          <div className="hamburger-menu"></div>
        </div>
      </button>
    );
  }
}

export default Hamburger;
