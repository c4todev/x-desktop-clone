import PropTypes from "prop-types";
import { getSidebarItemsFixed } from "./SidebarItemsFixed";
import NewTweet from "./NewTweet";
import TWLogo from "../Sidebar-Icons/TWLogo";

export default function Sidebar({
  back,
  selectedBottomTab,
  setSelectedBottomTab,
}) {
  const sidebarItemsFixed = getSidebarItemsFixed(selectedBottomTab);
  const lockedItems = sidebarItemsFixed
    .slice(0, 10)
    .map((sidebarItemFixed, index) => (
      <div
        key={index}
        className="flex justify-center items-center"
        onClick={() => setSelectedBottomTab(`${sidebarItemFixed.name}`)}
      >
        <a className="flex justify-center items-center p-3">
          <span>{sidebarItemFixed.icon}</span>
        </a>
      </div>
    ));
  return (
    <div className="fixed  top-0 left-0 h-full w-[4.25rem] border-r border-[#2f3336] bg-black z-40 flex flex-col items-center px-1">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <TWLogo />
          <div>{lockedItems}</div>
          <div className="rounded-full bg-[#1D9BF0] self-center p-[13px] drop-shadow-lg shadow-sm  transition-opacity duration-50 active:opacity-70">
            <NewTweet back={back} />
          </div>
        </div>
        <div className="place-items-end absolute bottom-0 p-3 mb-3">
          <img
            className="aspect-square object-cover rounded-full w-10 h-10"
            src="/man2.jpg"
          />
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  back: PropTypes.func.isRequired,
  width: PropTypes.number,
  selectedBottomTab: PropTypes.string.isRequired,
  setSelectedBottomTab: PropTypes.func.isRequired,
};
