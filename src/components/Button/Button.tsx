import React from "react";
import clsx from "clsx";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

// eslint-disable-next-line no-unused-vars
export const Button = ({ primary = false, size = "medium", backgroundColor, label, ...props }: ButtonProps) => {
  const mode = primary ? "primary" : "storybook-button--secondary";
  return (
    <button type="button" className={clsx(`${mode} ${backgroundColor} `)} {...props}>
      {label}
    </button>
  );
};
