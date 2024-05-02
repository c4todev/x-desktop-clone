import PropTypes from "prop-types";
import NavbarTabs from "./HeaderComponents/NavbarTabs";

import { FiSettings } from "react-icons/fi";

export default function NavbarMobileMD({
  selectedTab,

  handleSettings,
  setSelectedTab,
}) {
  return (
    <header className="min-w-[375px] flex left-0 pl-14 backdrop-blur-md w-full top-0 z-20 fixed transition-transform duration-300 ease-[cubic-bezier(0, 0, 1, 1)] scroll-smooth border-b border-[#2f3336]">
      <nav className="min-w-[375px] w-full text-white flex flex-row items-center justify-around">
        <NavbarTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="flex items-center">
          <FiSettings
            className="w-[1.12rem] h-[1.12rem] cursor-pointer"
            onClick={handleSettings}
          />
        </div>
      </nav>
    </header>
  );
}
NavbarMobileMD.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  handleSettings: PropTypes.func.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};
