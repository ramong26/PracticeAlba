import "@/app/globals.css";

import UserGnb from "@/shared/components/UserGnb/UserGnb";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserGnb />
      {children}
    </>
  );
}
