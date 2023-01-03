import React from "react";

export const variantButton = ["primary", "secondary", "primary-gradient", "secondary-gradient"]

export interface ButtonProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  type: "submit" | "button";
  className: string;
  variant: typeof variantButton[number] | string;
}

/**
 * Descripción
 * @param props
 * @returns
 */
const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button className={`btn ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
