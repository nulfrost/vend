type ButtonProps = {
  size: keyof typeof buttonSizes;
  children: React.ReactText;
};

const buttonSizes = {
  sm: "text-xs",
  md: "px-5 py-3 text-base",
  lg: "text-xl px-5 py-3",
};

export function Button({ size = "md", children, ...props }: ButtonProps) {
  return (
    <button
      className={`${buttonSizes[size]} bg-primary-500 text-white rounded-lg w-max focus:ring-4 hover:bg-primary-400 duration-150`}
      {...props}
    >
      {children}
    </button>
  );
}
