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
}

// 조금 더 쉽게 할 수 있을 것 같다. if문 말고 다른 것은 없을까
export default function BasicButton({
  children,
  onClick,
  type = "button",
  variant = "fill",
  color = "orange",
  className,
}: BasicButtonProps) {
  const mergedClassName = [
    "basic__button",
    `basic__button--${variant}`,
    color && `basic__button--${variant}--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={mergedClassName} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
