
import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
          <LoadingScreen />

      <Navbar />
      <main >{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
