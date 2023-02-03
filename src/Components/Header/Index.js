import { Link } from "react-router-dom";
import './Style.css'

function Header(){
    return(
        <header>
            <h2>Texto</h2>
            <div className="menu">
                <Link to={'/'}>Home</Link>
                <Link to={'/Contato'}>Contato</Link>
                <Link to={'/Sobre'}>Sobre</Link>
            </div>
        </header>
    )
}

export default Header;