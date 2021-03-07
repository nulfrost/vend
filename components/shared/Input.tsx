import React from "react";

type InputProps = {
  type:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  placeolder?: string;
};

export function Input({ type = "text", placeolder, ...props }: InputProps) {
  return (
    <input
      type={type}
      {...props}
      className="px-3 py-1 text-xl border-2 rounded-lg outline-none border-primray-100 focus:ring-4 ring-primary-500"
    />
  );
}
