import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Landing-page.jsx";
import LoginRegisterForm from "./LoginSignup.jsx";
import StudentDashboard from "./StudentDashboard.jsx";
import RegistrationForm from "./RegistrationForm.jsx";
import ForumPage from "./ForumPage.jsx";
import WebinarLayout from "./WebinarLayout.jsx"
import ChatLayout from "./ChatLayout.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginRegisterForm />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/chat" element={<ChatLayout />} />
        <Route path="/webinar" element={<WebinarLayout />} />

          {/* <Route path="" element={} /> */}
            {/* // <Route path="" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}
