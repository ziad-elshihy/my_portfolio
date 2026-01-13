import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SkillsPreview } from "@/components/home/SkillsPreview";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SkillsPreview />
      <FeaturedProjects />
    </Layout>
  );
};

export default Index;
