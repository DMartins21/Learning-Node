import Nome from "./Components/nome";

function App() {
  return (
   <div>
    <h1>Componente App</h1>
    <Nome aluno="Lucas" idade={30}/>
    <br/>
    <Nome aluno="Matheus" idade={25}/>
   </div>
  );
}

export default App;