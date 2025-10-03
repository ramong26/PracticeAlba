"use client";

import Image from "next/image";
import Link from "next/link";
import "./Gnb.scss";

import MainLogo from "@/public/icons/main-logo.svg";
import MainLogoText from "@/public/icons/main-logo-text.svg";
import Menu from "@/public/icons/menu.svg";

export default function Gnb() {
  return (
    <div className="gnb">
      <div className="gnb__left">
        <Link href="/">
          <div className="gnb__logo">
            <div className="gnb__logo-img">
              <Image src={MainLogo} alt="Main Logo" width={60} height={40} />
            </div>
            <div className="gnb__logo-text">
              <Image
                src={MainLogoText}
                alt="Main Logo Text"
                width={248}
                height={48}
              />
            </div>
          </div>
        </Link>

        <div className="gnb__menu">
          <Link href="/albalist" className="gnb__menu-item">
            알바 목록
          </Link>
          <Link href="/albatalk" className="gnb__menu-item">
            알바 토크
          </Link>
          <Link href="/myalbaform" className="gnb__menu-item">
            내 알바폼
          </Link>
        </div>
      </div>
      <div className="gnb__right">
        <Image src={Menu} alt="Menu" />
      </div>
    </div>
  );
}
