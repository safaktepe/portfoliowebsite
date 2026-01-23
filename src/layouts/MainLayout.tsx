import { Sidebar } from "../components/Sidebar";

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
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
      }}
    >
      <Sidebar
        activeId={activeSectionId}
        onActiveChange={onActiveSectionChange}
        onNavLockChange={onNavLockChange}
      />
      <main style={{ flex: 1, padding: 32 }}>{children}</main>
    </div>
  );
}
