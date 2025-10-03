"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import "./Gnb.scss";

import MainLogo from "@/public/icons/main-logo.svg";
import MainLogoText from "@/public/icons/main-logo-text.svg";
import Menu from "@/public/icons/menu.svg";

export default function Gnb() {
  const router = useRouter();

  // 함수 하나로 이동 처리
  const handleMenuItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="gnb">
      <div className="gnb__left">
        <Link href="/">
          <div className="gnb__logo">
            <div className="gnb__logo-img">
              <Image src={MainLogo} alt="Main Logo" />
            </div>
            <div className="gnb__logo-text">
              <Image
                src={MainLogoText}
                alt="Main Logo Text"
                height={40}
                width={216}
              />
            </div>
          </div>
        </Link>

        <div className="gnb__menu">
          <span
            className="gnb__menu-item"
            role="link"
            aria-label="알바 목록"
            onClick={() => {
              handleMenuItemClick("/albalist");
            }}
          >
            알바 목록
          </span>
          <span
            className="gnb__menu-item"
            role="link"
            aria-label="알바 토크"
            onClick={() => {
              handleMenuItemClick("/albatalk");
            }}
          >
            알바 토크
          </span>
          <span
            className="gnb__menu-item"
            role="link"
            aria-label="내 알바폼"
            onClick={() => {
              handleMenuItemClick("/myalbaform");
            }}
          >
            내 알바폼
          </span>
        </div>
      </div>
      <div className="gnb__right">
        <Image src={Menu} alt="Menu" />
      </div>
    </div>
  );
}
