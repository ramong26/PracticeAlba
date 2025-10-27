import "@/app/globals.css";

import Gnb from "@/shared/components/Gnb/Gnb";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Gnb />
      {children}
    </>
  );
}
