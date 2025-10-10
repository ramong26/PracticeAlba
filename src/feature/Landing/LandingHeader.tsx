'use client';
import Image from "next/image";
import "./LandingHeader.scss";

import BasicButton from "@/shared/components/Button/BasicButton";

import MainLogoText from "@/public/icons/main-logo-text.svg";
import LandingImage from '@/public/icons/landing.svg'

export default function LandingHeader() {
  return (
    <header className="header">
        <div className="header__top">
          <Image src={MainLogoText} alt="Main Logo" width={248} height={48} />
          <h1 className="header__text">한 곳에서 관리하는 알바 구인 플랫폼</h1>
          <BasicButton onClick={() => alert('알바폼 시작하기 클릭!')}>알바폼 시작하기</BasicButton>
        </div>
        <Image className="header__image" src={LandingImage} alt="Landing Image " width={964} height={610}/>
      </header>
  );
}