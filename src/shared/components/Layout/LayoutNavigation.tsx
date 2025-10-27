"use client";
import { usePathname } from "next/navigation";
import UserGnb from "@/shared/components/UserGnb/UserGnb";
import Gnb from "@/shared/components/Gnb/Gnb";

export default function LayoutNavigation() {
  const pathname = usePathname();
  const isLandingPage =
    pathname === "/" || pathname === "/about" || pathname === "/features";

  return <>{isLandingPage ? <Gnb /> : <UserGnb />}</>;
}
