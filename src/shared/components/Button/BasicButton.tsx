"use client";
import "./BasicButton.scss";

type ButtonType = "button" | "submit" | "reset" | undefined;
type ButtonVariant = "line" | "fill";
type ButtonColor = "gray" | "orange" | "blue";

interface BasicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  variant?: ButtonVariant;
  color?: ButtonColor;
  className?: string;
  disabled?: boolean;
}

export default function BasicButton({
  children,
  onClick,
  type = "button",
  variant = "fill",
  color = "orange",
  className,
  disabled = false,
}: BasicButtonProps) {
  const mergedClassName = [
    "basic__button",
    `basic__button--${variant}`,
    color && `basic__button--${variant}--${color}`,
    disabled && "basic__button--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={mergedClassName}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
