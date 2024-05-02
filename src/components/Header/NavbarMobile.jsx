import PropTypes from "prop-types";
import { FiSettings } from "react-icons/fi";
import NavbarTabs from "./HeaderComponents/NavbarTabs";

export default function Navbar({
  selectedTab,
  handleSettings,
  scrollPosition,
  setSidebarOpen,
  setSelectedTab,
}) {
  const topNavbarTransform = `translateY(-${scrollPosition}px)`;
  return (
    <header
      className="min-w-[375px] left-0 backdrop-blur-md w-full top-0 z-20 fixed transition-transform duration-300 ease-[cubic-bezier(0, 0, 1, 1)] scroll-smooth border-b border-[#2f3336]"
      style={{ transform: topNavbarTransform }}
    >
      <nav className="min-w-[375px] text-tw flex flex-col gap-1 ">
        <div className="flex justify-between items-center px-4 my-2">
          <a
            onClick={() =>
              setSidebarOpen((prevSideBarOpen) => !prevSideBarOpen)
            }
          >
            <img
              className="aspect-square object-cover w-8 h-8 rounded-full"
              src="/man2.jpg"
            />
          </a>
          <img src="./logo.svg" className="w-6 h-6" />
          <div>
            <FiSettings
              className="w-[1.12rem] h-[1.12rem] cursor-pointer"
              onClick={handleSettings}
            />
          </div>
        </div>
        <NavbarTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  handleSettings: PropTypes.func.isRequired,
  scrollPosition: PropTypes.number.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};
