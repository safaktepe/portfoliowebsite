import type React from "react";
import { Sidebar } from "../components/Sidebar";
import "../styles/layout.css";

type MainLayoutProps = {
  children: React.ReactNode;
  activeSectionId: string;
  onActiveSectionChange: (id: string) => void;
  onNavLockChange: (id: string | null) => void;
};

export function MainLayout({
  children,
  activeSectionId,
  onActiveSectionChange,
  onNavLockChange,
}: MainLayoutProps) {
  return (
    <div className="appFrame">
      <Sidebar
        activeId={activeSectionId}
        onActiveChange={onActiveSectionChange}
        onNavLockChange={onNavLockChange}
      />
      <main className="appMain">{children}</main>
    </div>
  );
}
