import AdsIcon from "../Sidebar-Icons/AdsIcon";
import BookmarksIcon from "../Sidebar-Icons/BookmarksIcon";
import CommunitiesIcon from "../Sidebar-Icons/CommunitiesIcon";
import EarningMoneyIcon from "../Sidebar-Icons/EarningMoneyIcon";
import ListsIcon from "../Sidebar-Icons/ListsIcon";
import LogoutIcon from "../Sidebar-Icons/LogoutIcon";
import PlusIcon from "../Sidebar-Icons/PlusIcon";
import PremiumIcon from "../Sidebar-Icons/PremiumIcon";
import ProfileIcon from "../Sidebar-Icons/ProfileIcon";
import SettingsPrivacyIcon from "../Sidebar-Icons/SettingsPrivacyIcon";
import PropTypes from "prop-types";

const SidebarItems = [
  { icon: <ProfileIcon />, title: "Profil" },
  { icon: <PremiumIcon />, title: "Premium" },
  { icon: <ListsIcon />, title: "Listeler" },
  { icon: <BookmarksIcon />, title: "Yer İşaretleri" },
  { icon: <CommunitiesIcon />, title: "Topluluklar" },
  { icon: <EarningMoneyIcon />, title: "Para kazanma" },
  { icon: <AdsIcon />, title: "Reklamlar" },
  { icon: <SettingsPrivacyIcon />, title: "Ayarlar ve Gizlilik" },
  { icon: <LogoutIcon />, title: "Çıkış yap" },
];

const hiddenItems = SidebarItems.map((SidebarItem, index) => (
  <div key={index}>
    <a className="flex justify-start items-center p-4">
      <span className="mr-6">{SidebarItem.icon}</span>
      <span className="text-[#E7E9EA] text-nowrap text-xl font-bold">
        {SidebarItem.title}
      </span>
    </a>
  </div>
));

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full transition-transform duration-500 ease-in-out w-72 bg-black z-40 ${
        !isOpen ? "-translate-x-full" : "translate-x shadow-2xl"
      }`}
    >
      <div className="flex flex-col gap-2 p-4">
        <div className="flex justify-between">
          <div className="border rounded-full border-[#536471] bg-transparent w-[30px] h-[30px] flex justify-center items-center">
            <PlusIcon />
          </div>
        </div>
        <div>
          <p className="text-white text-[17px] font-bold">Mike Hannigan</p>
          <p className="text-white opacity-50 font-normal">@mikehann</p>
        </div>
        <div className="flex flex-nowrap text-nowrap gap-5">
          <a>
            <span className="text-white">178</span>
            <span className="text-white opacity-50">Takip edilen</span>
          </a>
          <a>
            <span className="text-white">25</span>
            <span className="text-white opacity-50">Takipçi</span>
          </a>
        </div>
      </div>
      <div>{hiddenItems}</div>
    </div>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
