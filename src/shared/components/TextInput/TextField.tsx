"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./TextField.module.scss";

import VisibilityOn from "@/public/icons/visibility-on.svg";
import VisibilityOff from "@/public/icons/visibility-off.svg";

type TextFieldVariant = "line" | "fill";
type InputType = "text" | "password" | "email" | "number";

interface TextFieldProps {
  variant?: TextFieldVariant;
  className?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  prefixIcon?: React.ReactNode;
  type?: InputType;
}

export default function TextField({
  variant = "fill",
  className,
  placeholder,
  error = false,
  errorMessage = "에러가 발생했습니다.",
  prefixIcon,
  type = "text",
}: TextFieldProps) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (visible ? "text" : "password") : type;

  const mergedClassName = [
    styles.text__field,
    styles[`text__field--${variant}`],
    error ? styles["text__field--error"] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={styles["text__field-wrapper"]}>
      <div className={styles["text__field-container"]}>
        {prefixIcon && (
          <span className={styles["prefix__icon"]}>{prefixIcon}</span>
        )}

        <input
          type={inputType}
          placeholder={placeholder}
          className={mergedClassName}
          aria-invalid={error}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((prev) => !prev)}
            className={styles["visibility__icon"]}
            aria-label={visible ? "비밀번호 숨기기" : "비밀번호 보기"}
          >
            <Image
              src={visible ? VisibilityOff : VisibilityOn}
              alt={visible ? "비밀번호 숨김" : "비밀번호 보기"}
              width={24}
              height={24}
            />
          </button>
        )}
      </div>

      {error && (
        <p className={styles["error__message"]} role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
