"use client";
import styles from "./TextField.module.scss";

type TextFieldVariant = "line" | "fill";
// 에러, 앞 아이콘, 뒤 숨김 아이콘, 호버, 포커스,
interface TextFieldProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: TextFieldVariant;
  className?: string;
  placeholder?: string;
}

export default function TextField({
  children,
  onClick,
  variant = "fill",
  className,
  placeholder,
}: TextFieldProps) {
  const mergedClassName = [
    styles.text__field,
    styles[`text__field--${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div>
      <input
        placeholder={placeholder}
        className={mergedClassName}
        onClick={onClick}
      />
      {children}
    </div>
  );
}
