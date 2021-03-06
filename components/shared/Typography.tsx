import tw, { styled } from "twin.macro";

type TextProps = {
  size:
    | "xs"
    | "small"
    | "base"
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-4"
    | "heading-5";
};

export const Text = styled.p(({ size = "base" }) => [tw`text-${size}`]);
