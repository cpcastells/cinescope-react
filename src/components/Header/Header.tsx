import React from "react";
import logo from "/images/header-logo.svg";

const Header = (): React.ReactElement => {
  return (
    <header className="py-7">
      <img src={logo} alt="logo of cinescope" width={128} height={105} />
    </header>
  );
};

export default Header;
