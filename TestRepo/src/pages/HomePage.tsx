import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/User";
import AuthAPI from "../API/AuthAPI";

const HomePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthAPI.logout();
    navigate("/login");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await AuthAPI.getUser();
        setUser(userData as User);
      } catch (error) {
        alert(
          "Error al obtener los datos del usuario, redirigiendo a login." +
            error,
        );
        AuthAPI.logout();
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl mb-4">
          Bienvenido, {user.nombre} {user.apellido}!
        </h1>
        {user.avatar && (
          <img
            src={user.avatar}
            alt="Avatar"
            className="rounded-full w-24 mb-4"
          />
        )}
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Estado:</strong> {user.estado ? "Activo" : "Inactivo"}
        </p>
        {user.external_auth && (
          <p>
            <strong>Registrado con:</strong> {user.external_auth}
          </p>
        )}
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default HomePage;
