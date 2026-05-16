import "./Cuenta.css";
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import { eliminarCuenta } from "../helpers/funciones";

const Cuenta = () => {
  return (
    <>
      <div className="cuenta-container">
        <div className="overlay"></div>

        <div className="cuenta-card">

          <h1>GESTIÓN DE CUENTA</h1>

          <div className="avatar">
            👤
          </div>

          <p className="bienvenida">
            BIENVENIDO, USUARIO
          </p>

          <Link to="/cuenta/informacion" className="btn-cuenta info">
            📇 Información de mi Cuenta
            <span>Ver y editar detalle</span>
          </Link>

          <Link to="/cuenta/actualizar" className="btn-cuenta editar">
            ⚙️ Actualizar Cuenta
            <span>Modificar plan, datos personales</span>
          </Link>

          <button className="btn-cuenta eliminar"
          onClick={eliminarCuenta}>
            🗑️ Eliminar Cuenta
          </button>

          <p className="footer-text">
            Para asistencia, contacta a soporte
          </p>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cuenta;