/* eslint-disable react/button-has-type */
const Button = ({
  onClick,
  disabled,
  className = "",
  isLoading,
  children,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${disabled ? "opacity-50" : ""} ${className}`}
    >
      {isLoading && <Loading />}
      {children}
    </button>
  );
};

const Loading = ({ className = "text-white" }) => {
  return (
    <svg
      className={`-ml-1 mr-2 h-5 w-5 animate-spin ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export default Button;
