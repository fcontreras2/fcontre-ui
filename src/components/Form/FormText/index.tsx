import React from "react";
import clsx from "clsx";

type Ref = HTMLInputElement;

/* eslint-disable-next-line */
export interface FormTextProps {
  id: string;
  name: string;
  type?: string;
  className?: string;
  containerClassName?: string;
  autoFocus?: boolean;
  placeholder?: string;
  hasError?: string | boolean;
  disabled?: boolean;
  value: string | number;
  autoComplete?: string;
  onClickIconRight?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  loading?: boolean;
}

export const FormText = React.forwardRef(
  (
    {
      containerClassName,
      hasError,
      placeholder,
      disabled,
      loading,
      className,
      autoComplete,
      onClickIconRight,
      ...props
    }: FormTextProps,
    ref: React.Ref<Ref>
  ) => {
    return (
      <div className={clsx(`relative`, containerClassName)}>
        <input
          className={clsx(className,"input", hasError && "input__error")}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          {...props}
          ref={ref}
        />

        {placeholder && (
          <span
            className={clsx(
              "input__placeholder",
              disabled && "input__icon-right-error"
            )}
          >
            {placeholder}
          </span>
        )}
        {hasError && (
          <span className={"input__error-label"}>
            {"* "}
            {hasError}
          </span>
        )}
      </div>
    );
  }
);

FormText.defaultProps = {
  autoComplete: "off",
  type: "text",
};

export default FormText;
