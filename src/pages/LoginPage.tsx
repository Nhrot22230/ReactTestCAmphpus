import React, { useState } from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import bgImg from "../assets/img/bg_login.jpeg";
import pucpLogo from "../assets/img/pucp-logo.png";

const LoginPage: React.FC = () => {
  const [view, setView] = useState<"login" | "register">("login");
  return (
    <div className="flex h-screen">
      <div
        className="w-2/3 bg-cover"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      <div className="w-1/3 flex-col flex justify-center text-center">
        <img src={pucpLogo} alt="Logo" className="px-20 mb-8" />
        {view === "login" ? <Login /> : <Register />}
        <p className="text-gray-700 py-2">
          {view === "login"
            ? "¿No tienes una cuenta?"
            : "¿Ya tienes una cuenta?"}
          <button
            className="text-blue-600 font-semibold hover:underline ml-1"
            onClick={() => setView(view === "login" ? "register" : "login")}
          >
            {view === "login" ? "Regístrate aquí" : "Inicia sesión aquí"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
