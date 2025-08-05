import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        <div className="col-2 col-md-2 p-0">
          {/* Sidebar ซ้าย */}
          <Sidebar userName="Worapop" type="student" />
        </div>
        <div className="col-10 col-md-10 p-0">
          {/* Header ด้านบน */}
          <Header />
          {/* เนื้อหาหลัก */}
          <main className="flex-grow-1 p-4 min-vh-100">
            {/* Result Text */}

            < Outlet />

            {/* <div className="container text-center">
              <h2>Counter Page</h2>
              <p>Counter:</p>
              <button>Increase</button>
            </div> */}
          </main>

          {/* Footer ด้านล่าง */}
          <Footer year="2025" fullName="Worapop Kerdtongsook" studentId="670610729" />
        </div>
      </div>
    </div>
  );
}
