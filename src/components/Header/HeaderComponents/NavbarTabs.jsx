import PropTypes from "prop-types";

export default function NavbarTabs({ selectedTab, setSelectedTab }) {
  return (
    <div className="flex justify-around text-tw text-base font-bold min-w-[375px]">
      <a
        className="w-full flex-[1_1_100%] flex justify-center cursor-pointer active:bg-[#3E4144] active:transition-opacity duration-500 border-b border-transparent"
        onClick={() => setSelectedTab("Sana özel")}
      >
        <div>
          <div className="py-4 flex flex-col relative w-full">
            <span
              className={`${
                selectedTab === "Takip edilenler" ? "opacity-50" : ""
              }`}
            >
              Sana özel
            </span>
            {selectedTab === "Sana özel" ? (
              <div className="bg-[#1d9bf0] absolute min-w-[3.5rem] w-full h-1 bottom-0 self-center rounded-full"></div>
            ) : null}
          </div>
        </div>
      </a>
      <a
        className="w-full flex-[1_1_100%] flex justify-center cursor-pointer active:bg-[#3E4144] active:transition-opacity duration-500 border-b border-transparent"
        onClick={() => setSelectedTab("Takip edilenler")}
      >
        <div>
          <div className="py-4 flex flex-col relative w-full">
            <span
              className={`${
                selectedTab === "Sana özel" ? "opacity-50" : ""
              } text-opacity-0`}
            >
              Takip edilenler
            </span>
            {selectedTab === "Takip edilenler" ? (
              <div className="bg-[#1d9bf0] absolute min-w-[3.5rem] w-full h-1 bottom-0 self-center rounded-full"></div>
            ) : null}
          </div>
        </div>
      </a>
    </div>
  );
}

NavbarTabs.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};
