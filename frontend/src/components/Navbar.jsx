import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Kresser</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {/* SOBRE NOSOTROS */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Sobre Nosotros</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/mision">Misión</Link></li>
                <li><Link className="dropdown-item" to="/vision">Visión</Link></li>
                <li><Link className="dropdown-item" to="/contacto">Contacto</Link></li>
              </ul>
            </li>

            {/* SERVICIOS */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Servicios</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/servicio1">Servicio 1</Link></li>
                <li><Link className="dropdown-item" to="/servicio2">Servicio 2</Link></li>
                <li><Link className="dropdown-item" to="/servicio3">Servicio 3</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/presupuesto">Presupuesto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
