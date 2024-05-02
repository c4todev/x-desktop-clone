import { HiOutlineMail, HiMail } from "react-icons/hi";
import PropTypes from "prop-types";

export default function Messages({ selectedBottomTab }) {
  return selectedBottomTab === "Messages" ? (
    <HiMail className="w-7 h-7 text-[#E7E9EA]" />
  ) : (
    <HiOutlineMail className="w-7 h-7 text-[#E7E9EA]" />
  );
}

Messages.propTypes = {
  selectedBottomTab: PropTypes.string.isRequired,
};
