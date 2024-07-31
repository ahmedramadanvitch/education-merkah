import { Outlet } from "react-router-dom";
// import Footer from "../Footer/Footer";

// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function LayOut() {
  return (
    <>
      {/* <div className="min-h-screen grid grid-rows-[auto_1fr_auto]"> */}
      <Navbar />
      <Outlet />
      <Footer />
      {/* </div> */}
    </>
  );
}
