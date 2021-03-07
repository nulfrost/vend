type ButtonProps = {
  size?: keyof typeof buttonSizes;
  disabled?: boolean;
  children: React.ReactText;
};

const buttonSizes = {
  sm: "px-8 py-2",
  md: "px-10 py-3",
  lg: "px-12 py-4",
};

export function Button({
  size = "md",
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${buttonSizes[size]} bg-primary-500 text-white rounded-lg w-max focus:ring-4 hover:bg-primary-400 duration-150`}
      disabled={disabled && disabled}
      {...props}
    >
      {children}
    </button>
  );
}
