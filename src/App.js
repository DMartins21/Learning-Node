import { useEffect, useState } from "react";
import Nome from "./Components/nome";

function App() {

  const[input, setInput] = useState('')
  const[tarefas, setTarefas] = useState([])

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa')

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }
  },[])

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  },[tarefas])

  function handleRegistro(event){
    event.preventDefault()
    setTarefas([...tarefas,input])
    setInput('')
  }

  return (
   <div>
    <h1>Cadastrando Usuario</h1>
    <form onSubmit={handleRegistro}>
      <label>Nome da Tarefa:</label><br/>
      <input placeholder="Digite seu Nome" 
      value={input} onChange={(event) => setInput(event.target.value)}
      required/><br/>

      <button type="submit">Registrar</button>
    </form>
    <br/>
    <div>
      {tarefas.map(tarefa => (
        <ul>
          <li key={tarefa}>{tarefa}</li>
        </ul>
      ))}
    </div>
   </div>
  );
}

export default App;