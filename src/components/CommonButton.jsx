import PropTypes from "prop-types";

const CommonButton = ({ label, onClick, href, className }) => {
  return (
    <a
      href={href}
      target={href ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`px-6 py-3 bg-[#8bc7f3] text-white font-bold rounded-lg shadow-md hover:bg-[#72aedc] transition-colors ${className}`}
      onClick={onClick}
    >
      {label}
    </a>
  );
};

CommonButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default CommonButton;
