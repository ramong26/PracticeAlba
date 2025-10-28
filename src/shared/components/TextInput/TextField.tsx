"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./TextField.module.scss";

import VisibilityOn from "@/public/icons/visibility-on.svg";
import VisibilityOff from "@/public/icons/visibility-off.svg";

type TextFieldVariant = "line" | "fill";

// 개 복잡하다 단순히 할 수 있을 것 같다
interface TextFieldProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: TextFieldVariant;
  className?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  prefixIcon?: React.ReactNode;
  type?: string;
}

export default function TextField({
  children,
  onClick,
  variant = "fill",
  className,
  placeholder,
  error = false,
  errorMessage = "에러가 발생했습니다.",
  prefixIcon,
  type = "text",
}: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === "password";

  const handleVisibilityClick = () => {
    setShowPassword(!showPassword);
  };

  const mergedClassName = [
    styles.text__field,
    styles[`text__field--${variant}`],
    error ? styles[`text__field--${variant}--error`] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={styles.text__field__container}>
      <input
        placeholder={placeholder}
        className={mergedClassName}
        onClick={onClick}
        type={isPasswordType ? (showPassword ? "text" : "password") : type}
      />
      {prefixIcon && <span className={styles.prefix__icon}>{prefixIcon}</span>}
      {isPasswordType && (
        <span
          className={styles.visibility__icon}
          onClick={handleVisibilityClick}
        >
          {showPassword ? (
            <Image
              src={VisibilityOff}
              alt="비밀번호 숨김"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src={VisibilityOn}
              alt="비밀번호 보기"
              width={24}
              height={24}
            />
          )}
        </span>
      )}
      {children}
      {error && <span className={styles.error__message}>{errorMessage}</span>}
    </div>
  );
}
