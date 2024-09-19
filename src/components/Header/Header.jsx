import React, { useState } from "react";

import Logo from "../../assets/Img/Logo/Logo.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  const menuItems = ["Home", "About", "Experience", "Projects"];
  const [hideRight, setHideRight] = useState("-right-[1000px]");
  const onOpen = () => {
    setHideRight("right-0");
  };
  const onClose = () => {
    setHideRight("-right-[1000px]");
  };
  return (
    <>
      <div className="max-[900px]:hidden ">
        <DesktopNav Logo={Logo} menuItems={menuItems} />
      </div>

      <div className="min-[900px]:hidden">
        <MobileNav
          Logo={Logo}
          onOpen={onOpen}
          onClose={onClose}
          hideRight={hideRight}
          menuItems={menuItems}
        />
      </div>
    </>
  );
};

export default Header;
