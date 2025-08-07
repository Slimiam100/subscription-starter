const Logo = ({ ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="512" height="512" rx="100" fill="#4F46E5" />
    <path
      d="M256 120C188 120 140 168 140 236C140 304 188 352 256 352C324 352 372 304 372 236C372 168 324 120 256 120ZM256 320C206 320 168 282 168 236C168 190 206 152 256 152C306 152 344 190 344 236C344 282 306 320 256 320Z"
      fill="#FFFFFF"
    />
    <path
      d="M200 400H312C318 400 324 404 326 410L340 450C342 456 338 462 332 462H180C174 462 170 456 172 450L186 410C188 404 194 400 200 400Z"
      fill="#FFFFFF"
    />
  </svg>
);

export default Logo;
