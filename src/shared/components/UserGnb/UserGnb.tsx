import Image from "next/image";
import Link from "next/link";
import styles from "./UserGnb.module.scss";

import UserGnbClient from "./UserGnbClient";

import MainLogo from "@/public/icons/main-logo.svg";
import MainLogoText from "@/public/icons/main-logo-text.svg";

export default async function UserGnb() {
  return (
    <div className={styles["gnb"]}>
      {/* GNB left */}
      <Link href="/">
        <div className={styles["gnb__logo"]}>
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
      <div className={styles["gnb__menu"]}>
        {/*클라이언트말고 서버로 할수있는 방법 없나*/}
        <UserGnbClient />
      </div>
    </div>
  );
}
