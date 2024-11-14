import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* İçerik burada render edilecek */}
      <Footer />
    </div>
  );
}

export default MainLayout;