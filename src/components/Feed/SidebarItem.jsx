import PropTypes from "prop-types";

export default function SidebarItem({ icon, title }) {
  return (
    <div>
      {icon}
      <p>{title}</p>
    </div>
  );
}

SidebarItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
