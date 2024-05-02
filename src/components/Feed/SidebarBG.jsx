import PropTypes from "prop-types";

export default function SidebarBG({ sidebarOpen, setSidebarOpen }) {
  return (
    <div
      onClick={() => setSidebarOpen((prevSideBarOpen) => !prevSideBarOpen)}
      className={`w-full h-full  fixed top-0 z-30 transition duration-500 ease-in-out ${
        sidebarOpen ? "flex bg-[#5B708366]" : "opacity-0 bg-[#5B708300] -z-30"
      }`}
    ></div>
  );
}

SidebarBG.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};
