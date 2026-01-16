
import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
