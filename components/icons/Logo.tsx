const Logo = ({ ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="100%" height="100%" rx="16" fill="#4F46E5" />
    <path
      d="M8 10h4v12H8V10zm6 0h4v12h-4V10zm6 0h4v12h-4V10z"
      fill="#FFFFFF"
    />
  </svg>
);

export default Logo;
