import { Link } from "react-router-dom";
function Contato(){
    return(
        <div>
            <h1>Pagina Contato</h1>
            <span>Contato da Empresa</span><br/>

            <Link to={'/sobre'}>Sobre</Link><br/>
            <Link to={'/'}>Home</Link><br/>
        </div>
    )
}

export default Contato;