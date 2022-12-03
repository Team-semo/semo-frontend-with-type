import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  type?: "primary" | "danger" | "light" | "dark";
  style?: "fill" | "outline";
  display?: "inline" | "block" | "full";

  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}>;

const Button = (props: Props) => {
  const {
    type = "primary",
    style = "fill",
    disabled,
    className,
    children,
    ...rest
  } = props;
  return (
    <button {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
