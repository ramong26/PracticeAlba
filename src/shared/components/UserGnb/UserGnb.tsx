import Image from "next/image";
import Link from "next/link";
import styles from "./UserGnb.module.scss";

import MainLogo from "@/public/icons/main-logo.svg";
import MainLogoText from "@/public/icons/main-logo-text.svg";

export default function UserGnb() {
  return (
    <div className={styles.gnb}>
      {/* GNB left */}
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

      {/* GNB Menu right */}
      <div className={styles.gnb__menu}>
        <Link href="/albalist" className={styles["gnb__menu-item"]}>
          사장님 전용
        </Link>
        <Link href="/albatalk" className={styles["gnb__menu-item"]}>
          지원자 전용
        </Link>
      </div>
    </div>
  );
}
