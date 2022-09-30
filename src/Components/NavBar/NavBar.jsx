
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navBar">
            <div className="tituloPag">
            <h2>
                <strong>Mi Ecommerce</strong>
            </h2>
            <CartWidget/>
            </div>
            <ul className="menuNav">
            <Link to="/">
                <li>Inicio</li>
            </Link>

            <Link to="/cat/nuevo">
                <li>Nuevo</li>
            </Link>

            <Link to="/cat/usado">
                <li>Usado</li>
            </Link>
            </ul>
        </div>        
    );
}

export default NavBar;