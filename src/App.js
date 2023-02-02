import { useState } from "react";
import Nome from "./Components/nome";

function App() {

  const [nome,setNome] = useState('')
  const [email,setEmail] = useState('')
  const [idade,setIdade] = useState('')

  const [user,setUser] = useState()

  function handleRegistro(event){
    event.preventDefault()
    setUser({
      nome: nome,
      idade: idade,
      email: email
  })
  }

  return (
   <div>
    <h1>Cadastrando Usuario</h1>
    <form onSubmit={handleRegistro}>
      <label>Nome:</label><br/>
      <input placeholder="Digite seu Nome" 
      value={nome} onChange={(event) => setNome(event.target.value)}
      required/><br/>
      
      <label>Email:</label><br/>
      <input placeholder="Digite seu Email" 
      value={email} onChange={(event) => setEmail(event.target.value)}
      required/><br/>

      <label>Idade:</label><br/>
      <input placeholder="Digite seu Idade"
      value={idade} onChange={(event) => setIdade(event.target.value)}
      required/><br/>

      <button type="submit">Registrar</button>
    </form>
    <br/>
    <div>
      <span>Bem vindo: {user.nome}</span><br/>
      <span>Idade: {user.idade}</span><br/>
      <span>Email: {user.email}</span><br/>
    </div>
   </div>
  );
}

export default App;