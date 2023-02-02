import { useState } from "react";
import Nome from "./Components/nome";

function App() {

  const [aluno, setAluno] = useState('Mateus')

  function handleChageName(nome){
    setAluno(nome)
  }

  return (
   <div>
    <h1>Componente App</h1>
    <br/>
    <h2>Olá:{aluno}</h2>
    <button onClick={() => handleChageName('Lucas Oliveira')}>
      Mudar nome
    </button>
    <Nome aluno="Lucas" idade={30}/>
    <br/>
    <Nome aluno="Matheus" idade={25}/>
   </div>
  );
}

export default App;