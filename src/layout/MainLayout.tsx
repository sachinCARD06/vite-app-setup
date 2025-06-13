import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 mt-[64px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
