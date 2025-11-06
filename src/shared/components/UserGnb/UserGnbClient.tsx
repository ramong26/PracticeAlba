"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "@/shared/components/UserGnb/UserGnb.module.scss";

export default function UserGnbClient() {
  const pathname = usePathname();
  const isSignupPage = pathname.startsWith("/signup");
  const basePath = isSignupPage ? "/signup" : "/signin";

  return (
    <>
      <Link href={`${basePath}/owner`} className={styles["gnb__menu-item"]}>
        사장님 전용
      </Link>
      <Link href={`${basePath}/applicant`} className={styles["gnb__menu-item"]}>
        지원자 전용
      </Link>
    </>
  );
}
