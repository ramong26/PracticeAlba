import Image from "next/image";
import Link from "next/link";
import styles from "./Gnb.module.scss";

import MainLogo from "@/public/icons/main-logo.svg";
import MainLogoText from "@/public/icons/main-logo-text.svg";
import Menu from "@/public/icons/menu.svg";

export default function Gnb() {
  return (
    <div className={styles.gnb}>
      <div className={styles.gnb__left}>
        <Link href="/">
          <div className={styles.gnb__logo}>
            <div className={styles["gnb__logo-img"]}>
              <Image src={MainLogo} alt="Main Logo" width={60} height={40} />
            </div>
            <div className={styles["gnb__logo-text"]}>
              <Image
                src={MainLogoText}
                alt="Main Logo Text"
                width={248}
                height={48}
              />
            </div>
          </div>
        </Link>

        <div className={styles.gnb__menu}>
          <Link href="/albalist" className={styles["gnb__menu-item"]}>
            알바 목록
          </Link>
          <Link href="/albatalk" className={styles["gnb__menu-item"]}>
            알바 토크
          </Link>
          <Link href="/myalbaform" className={styles["gnb__menu-item"]}>
            내 알바폼
          </Link>
        </div>
      </div>
      <div className={styles.gnb__right}>
        <Image src={Menu} alt="Menu" />
      </div>
    </div>
  );
}
