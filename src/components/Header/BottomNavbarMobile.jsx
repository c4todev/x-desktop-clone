import PropTypes from "prop-types";
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { PiBell } from "react-icons/pi";
import { PiBellFill } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
export default function BottomNavbar({
  scrollPosition,
  selectedBottomTab,
  setSelectedBottomTab,
}) {
  const bottomNavbarOpacity = Math.max(1 - scrollPosition / 100, 0.5);
  return (
    <header
      className="z-20 min-w-[375px] bottom-0 left-0 w-full fixed text-white transition-opacity duration-300 ease-[cubic-bezier(0, 0, 1, 1)] bg-black scroll-smooth border-t border-[#2f3336] py-1"
      transform={{ opacity: bottomNavbarOpacity }}
    >
      <div className="min-w-[375px] flex items-center justify-around cursor-pointer">
        <div
          className="cursor pointer w-full"
          onClick={() => setSelectedBottomTab("Home")}
        >
          <a className="border-b-2 border-transparent flex justify-center flex-0">
            <div className="">
              <div className="rounded-full active:bg-gray-700 active:bg-opacity-40 p-1.5 w-full">
                {selectedBottomTab === "Home" ? (
                  <GoHomeFill className="w-[1.8rem] h-[1.8rem]" />
                ) : (
                  <GoHome className="w-[1.8rem] h-[1.8rem]" />
                )}
              </div>
            </div>
          </a>
        </div>
        <div
          className="cursor-pointer w-full  font-sans"
          onClick={() => setSelectedBottomTab("Search")}
        >
          <a className="border-b-2 border-transparent flex justify-center flex-0">
            <div>
              <div className="rounded-full active:bg-gray-700 active:bg-opacity-40 p-1.5 w-full">
                <LuSearch
                  className={`w-[1.6rem] h-[1.6rem] ${
                    selectedBottomTab === "Search" ? "stroke-[3]" : ""
                  }`}
                />
              </div>
            </div>
          </a>
        </div>
        <div
          className="cursor-pointer w-full"
          onClick={() => setSelectedBottomTab("Notifications")}
        >
          <a className="border-b-2 border-transparent flex justify-center flex-0">
            <div>
              <div className="rounded-full active:bg-gray-700 active:bg-opacity-40 p-1.5 w-full">
                {selectedBottomTab === "Notifications" ? (
                  <PiBellFill className="w-[1.8rem] h-[1.8rem]" />
                ) : (
                  <PiBell className="w-[1.8rem] h-[1.8rem]" />
                )}
              </div>
            </div>
          </a>
        </div>
        <div
          className="cursor-pointer w-full"
          onClick={() => setSelectedBottomTab("Messages")}
        >
          <a className="border-b-2 border-transparent flex justify-center flex-0">
            <div>
              <div className="rounded-full active:bg-gray-700 active:bg-opacity-40 p-1.5 w-full">
                {selectedBottomTab === "Messages" ? (
                  <HiMail className="w-[1.8rem] h-[1.8rem]" />
                ) : (
                  <HiOutlineMail className="w-[1.8rem] h-[1.8rem]" />
                )}
              </div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
BottomNavbar.propTypes = {
  scrollPosition: PropTypes.number.isRequired,
  selectedBottomTab: PropTypes.string.isRequired,
  setSelectedBottomTab: PropTypes.func.isRequired,
};
