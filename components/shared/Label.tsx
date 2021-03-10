import React from "react";

export default function Label({
  htmlFor,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium" {...props}>
      {children}
    </label>
  );
}
