import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { useEffect } from "react";
import Home from "./pages/Home.jsx";
import Register from "./components/Register.jsx";
import LoginStudent from "./components/LoginStudent.jsx";
import VerifyOTP from "./components/VerifyOTP.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import LoginCompany from "./components/LoginCompany.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";
import CompanyDashboard from "./components/CompanyDashboard.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "./pages/Profile.jsx";

function App() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: false,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home />}
          errorElement={<PageNotFound />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login/student" element={<LoginStudent />}></Route>
        <Route path="/login/student/verify-otp" element={<VerifyOTP />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        ></Route>
        <Route path="/login/company" element={<LoginCompany />}></Route>
        <Route path="/student-dashboard" element={<StudentDashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/company-dashboard" element={<CompanyDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
