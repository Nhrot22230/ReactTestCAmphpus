import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get("token");
    const token = localStorage.getItem("token") || urlToken;
    if (token) {
      localStorage.setItem("token", token);
      navigate("/home");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
