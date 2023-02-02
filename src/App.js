/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useEffect, useState } from "react";
import './style.css';

function App() {

  const[nutri,setNutri] = useState([])

  useEffect(() => {
      function loadApi(){
          let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
          //Buscar api pela url
          fetch(url)
          // Transformando o resultado em JSON
          .then((r) => r.json()
          .then((json) => {
            setNutri(json)
          })
          )
      }
      loadApi()
  },[])

  return (
      <div className="conteiner">
        <header>
          <strong>React Nutri</strong>
        </header>
        {nutri.map((item) => {
          return(
            <article key={item.id} className="post">
              <strong className="titulo">
                {item.titulo}
              </strong>
              <img src={item.capa} alt={item.titulo} className="capa"/>
              <p className="subtitulo">
                {item.subtitulo}
              </p>
              <h1> Categoria: {item.categoria}</h1>
              <a className="botao">Acessar</a>
            </article>
          )
        })}
      </div>
  )
}

export default App;