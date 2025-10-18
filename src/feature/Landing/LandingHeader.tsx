"use client";
import Image from "next/image";
import "./LandingHeader.scss";

import BasicButton from "@/shared/components/Button/BasicButton";

import MainLogoText from "@/public/icons/main-logo-text.svg";
import LandingImage from "@/public/icons/landing/landing.svg";

export default function LandingHeader() {
  return (
    <header className="header">
      <div className="header__top">
        <Image
          src={MainLogoText}
          alt="Main Logo"
          className="header__logo"
          width={124}
          height={24}
          priority
        />
        <h1 className="header__text">한 곳에서 관리하는 알바 구인 플랫폼</h1>
        <BasicButton
          color="blue"
          className="header__button"
          onClick={() => alert("알바폼 시작하기 클릭!")}
        >
          알바폼 시작하기
        </BasicButton>
      </div>
      <Image
        className="header__image"
        src={LandingImage}
        alt="Landing Image "
        width={386}
        height={244}
        priority
      />
    </header>
  );
}
