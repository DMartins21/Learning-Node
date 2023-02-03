import {Link} from 'react-router-dom'

function Home() {
  return (
      <div>
         <h1>Bem Vindo a pagina Home</h1>

         <Link to={'/sobre'}>Sobre</Link><br/>
         <hr/>

         <Link to={'/produto/123456'}>Produto</Link>
      </div>

      
  )
}

export default Home;