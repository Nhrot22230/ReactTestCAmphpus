import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../../API/AuthAPI";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleGoogleLogin = async () => {
    window.location.href = import.meta.env.VITE_GOOGLE_LOGIN_URL as string;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const user = await AuthAPI.login(email, password);
      if (!user) {
        setError("Credenciales inválidas");
        return;
      }
      navigate("/home");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Error al iniciar sesión. Por favor, revisa tus credenciales.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full px-10">
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form className="w-full py-2" onSubmit={handleSubmit}>
          <div className="mb-4">
            <md-outlined-text-field
              id="correo"
              label="Correo"
              type="email"
              value={email}
              onInput={handleEmailChange}
              required
              class="w-full"
            ></md-outlined-text-field>
          </div>

          <div className="mb-4">
            <md-outlined-text-field
              id="password"
              label="Contraseña"
              type="password"
              value={password}
              onInput={handlePasswordChange}
              required
              class="w-full"
            ></md-outlined-text-field>
          </div>
          <button
            type="submit"
            className="hover:bg-blue-700 text-white w-full py-2 rounded focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: "#112F45" }}
          >
            Iniciar sesión
          </button>
        </form>
        <p className="w-full text-center text-gray-500">o</p>
        <button
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg p-2 hover:bg-gray-100 transition duration-200"
          onClick={handleGoogleLogin}
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google logo"
            className="h-6"
          />
          <span className="text-gray-500">Iniciar sesión con Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
