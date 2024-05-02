import Home from "../Sidebar-Icons/Home";
import Search from "../Sidebar-Icons/Search";
import AdsIcon from "../Sidebar-Icons/AdsIcon";
import Messages from "../Sidebar-Icons/Messages";
import MoreIcon from "../Sidebar-Icons/MoreIcon";
import ListsIcon from "../Sidebar-Icons/ListsIcon";
import LogoutIcon from "../Sidebar-Icons/LogoutIcon";
import PremiumIcon from "../Sidebar-Icons/PremiumIcon";
import ProfileIcon from "../Sidebar-Icons/ProfileIcon";
import Notifications from "../Sidebar-Icons/Notifications";
import BookmarksIcon from "../Sidebar-Icons/BookmarksIcon";
import CommunitiesIcon from "../Sidebar-Icons/CommunitiesIcon";
import EarningMoneyIcon from "../Sidebar-Icons/EarningMoneyIcon";
import SettingsPrivacyIcon from "../Sidebar-Icons/SettingsPrivacyIcon";

export const getSidebarItemsFixed = (selectedBottomTab) => [
  {
    icon: <Home selectedBottomTab={selectedBottomTab} />,
    title: "Anasayfa",
    name: "Home",
  },
  {
    icon: <Search selectedBottomTab={selectedBottomTab} />,
    title: "Keşfet",
    name: "Search",
  },
  {
    icon: <Notifications selectedBottomTab={selectedBottomTab} />,
    title: "Bildirimler",
    name: "Notifications",
  },
  {
    icon: <Messages selectedBottomTab={selectedBottomTab} />,
    title: "Mesajlar",
    name: "Messages",
  },
  {
    icon: <ListsIcon selectedBottomTab={selectedBottomTab} />,
    title: "Listeler",
    name: "Lists",
  },
  {
    icon: <BookmarksIcon selectedBottomTab={selectedBottomTab} />,
    title: "Yer İşaretleri",
    name: "Bookmarks",
  },
  {
    icon: <CommunitiesIcon selectedBottomTab={selectedBottomTab} />,
    title: "Topluluklar",
    name: "Communities",
  },
  {
    icon: <PremiumIcon selectedBottomTab={selectedBottomTab} />,
    title: "Premium",
    name: "Premium",
  },
  {
    icon: <ProfileIcon selectedBottomTab={selectedBottomTab} />,
    title: "Profil",
    name: "Profile",
  },
  {
    icon: <MoreIcon selectedBottomTab={selectedBottomTab} />,
    title: "Daha fazla",
    name: "More",
  },
  {
    icon: <EarningMoneyIcon selectedBottomTab={selectedBottomTab} />,
    title: "Para kazanma",
    name: "Earning Money",
  },
  {
    icon: <AdsIcon selectedBottomTab={selectedBottomTab} />,
    title: "Reklamlar",
    name: "Ads",
  },
  {
    icon: <SettingsPrivacyIcon selectedBottomTab={selectedBottomTab} />,
    title: "Ayarlar ve Gizlilik",
    name: "Settings and Privacy",
  },
  {
    icon: <LogoutIcon selectedBottomTab={selectedBottomTab} />,
    title: "Çıkış yap",
    name: "Logout",
  },
];
