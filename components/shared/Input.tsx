import { useRef } from "react";

export default function Input({
  type,
  name,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  const innerRef = useRef(null);

  return (
    <input
      type={type}
      name={name}
      ref={innerRef}
      className="w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
      {...props}
    />
  );
}
