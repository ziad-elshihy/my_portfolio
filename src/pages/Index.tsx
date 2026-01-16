import { Layout } from "@/components/layout/Layout";
import {Hero} from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import ScrollProgress from '@/components/ui/ScrollProgress';
import TestingProcess from "@/components/ui/TestingProcess";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import { Bug } from "lucide-react";
import BugSamples from "@/components/ui/BugSamples";
import ScanLines from "@/components/ui/Scanlines";

const Index = () => {
  return (
    <Layout>
      <ScrollProgress />
      <ScanLines />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <TestingProcess />
      <BugSamples />
      <Contact />
    </Layout>
  );
};

export default Index;
