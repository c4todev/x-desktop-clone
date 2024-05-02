import { GoHome, GoHomeFill } from "react-icons/go";
import PropTypes from "prop-types";

export default function Home({ selectedBottomTab }) {
  return selectedBottomTab === "Home" ? (
    <GoHomeFill className="w-7 h-7 text-[#E7E9EA]" />
  ) : (
    <GoHome className="w-7 h-7 text-[#E7E9EA]" />
  );
}

Home.propTypes = {
  selectedBottomTab: PropTypes.string.isRequired,
};
