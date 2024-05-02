import { PiBell, PiBellFill } from "react-icons/pi";
import PropTypes from "prop-types";

export default function Notifications({ selectedBottomTab }) {
  return selectedBottomTab === "Notifications" ? (
    <PiBellFill className="w-7 h-7 text-[#E7E9EA]" />
  ) : (
    <PiBell className="w-7 h-7 text-[#E7E9EA]" />
  );
}

Notifications.propTypes = {
  selectedBottomTab: PropTypes.string.isRequired,
};
