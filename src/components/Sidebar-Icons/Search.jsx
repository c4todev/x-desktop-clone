import { LuSearch } from "react-icons/lu";
import PropTypes from "prop-types";

export default function Search({ selectedBottomTab }) {
  return (
    <LuSearch
      className={`w-7 h-7 text-[#E7E9EA] ${
        selectedBottomTab === "Search" ? "stroke-[3]" : ""
      }`}
    />
  );
}

Search.propTypes = {
  selectedBottomTab: PropTypes.string.isRequired,
};
