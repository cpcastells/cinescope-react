import React from "react";
import { NavLink } from "react-router-dom";
import { FavoriteIcon, HomeIcon } from "../Icons/Icons";

const Navbar = (): React.ReactElement => {
  return (
    <nav className="w-full h-[80px] flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-xl fixed bottom-0 z-50">
      <NavLink
        to="/home"
        className="w-1/2 flex items-center justify-center border-r border-r-[#0F111D]"
        aria-label="home"
      >
        {({ isActive }) => <HomeIcon color={isActive ? "#ffcf55" : "white"} />}
      </NavLink>
      <NavLink
        to="/favorites"
        className="w-1/2 flex items-center justify-center"
        aria-label="favorites"
      >
        {({ isActive }) => (
          <FavoriteIcon color={isActive ? "#ffcf55" : "white"} />
        )}
      </NavLink>
    </nav>
  );
};

export default Navbar;
