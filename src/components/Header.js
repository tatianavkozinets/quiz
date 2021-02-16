import React from "react";
import PropTypes from "prop-types";

const Header = ({ titleText }) => {
  return <h1>{titleText}</h1>;
};

Header.propTypes = {
  titleText: PropTypes.string
};

export default Header;
