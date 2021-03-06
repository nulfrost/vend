import React from "react";

type TextProps = {
  as: keyof React.ReactHTML;
  size:
    | "xs"
    | "small"
    | "base"
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-4"
    | "heading-5";
  children: React.ReactChild;
};

export function Text({ as, size = "base", children, ...props }: TextProps) {
  return React.createElement(
    as,
    { className: `text-${size}`, ...props },
    children
  );
}
