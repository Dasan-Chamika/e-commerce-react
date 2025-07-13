/** @format */

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function MainLayout() {
  return (
    <div className="w-100 h-screen">
      <Header />
      <div className="py-[68px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
