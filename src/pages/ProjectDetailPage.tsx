import { useParams } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <MainLayout
      activeSectionId="projects"
      onActiveSectionChange={() => {}}
      onNavLockChange={() => {}}
    >
      <section style={{ padding: 40 }}>
        <h1 style={{ margin: 0 }}>Project: {slug}</h1>
        <p style={{ opacity: 0.7 }}>
          Buraya case study içeriği gelecek.
        </p>
      </section>
    </MainLayout>
  );
}
