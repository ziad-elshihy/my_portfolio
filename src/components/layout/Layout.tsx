import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { PageTransition } from "@/components/animations/PageTransition";
import BackToTop from "../ui/BackToTop";
import LoadingScreen from "../ui/LoadingScreen";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
          <LoadingScreen />
  
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-0">
        <PageTransition>{children}</PageTransition>
      </main>
      <BackToTop />
    </div>
    </>
  );
}
