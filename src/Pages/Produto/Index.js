import { useParams } from "react-router-dom";

function Produto(){

    const { id } = useParams()

    return(
        <div>
            <h2>Pagina de Produto</h2>
            <span>Meu Produto É {id}</span>
        </div>
    )
}

export default Produto;