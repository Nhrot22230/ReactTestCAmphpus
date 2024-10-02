import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../../API/AuthAPI";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleLastnameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLastname(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleConfirmationChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmation(e.target.value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    try {
      const user = await AuthAPI.register(name, lastname, email, password);
      if (!user) {
        setError(
          "Error en el registro. Por favor, revisa los datos ingresados.",
        );
        return;
      }
      navigate("/home");
    } catch (error) {
      console.error(error);
      setError("Error en el registro. Por favor, revisa los datos ingresados.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full px-10">
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form className="w-full py-2" onSubmit={handleSubmit}>
          <div className="mb-4">
            <md-outlined-text-field
              id="nombre"
              label="Nombre"
              type="text"
              value={name}
              onInput={handleNameChange}
              required
              class="w-full"
            ></md-outlined-text-field>
          </div>
          <div className="mb-4">
            <md-outlined-text-field
              id="apellido"
              label="Apellido"
              type="text"
              value={lastname}
              onInput={handleLastnameChange}
              required
              class="w-full"
            ></md-outlined-text-field>
          </div>
          <div className="mb-4">
            <md-outlined-text-field
              id="correo"
              label="Correo Electrónico"
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
          <div className="mb-4">
            <md-outlined-text-field
              id="passwordConfirmation"
              label="Confirmar Contraseña"
              type="password"
              value={passwordConfirmation}
              onInput={handleConfirmationChange}
              required
              class="w-full"
            ></md-outlined-text-field>
          </div>
          <button
            type="submit"
            className="hover:bg-blue-700 text-white w-full py-2 rounded focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: "#112F45" }}
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
