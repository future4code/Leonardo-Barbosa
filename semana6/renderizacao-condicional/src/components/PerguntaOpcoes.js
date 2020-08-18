import React from 'react'

export function PerguntaOpcoes(props) {
    return (
      <div>
        <p>{props.pergunta}</p>
        <select>
          {props.opcoes.map(opcao => (
            <option value={opcao}>{opcao}</option>
          ))}
        </select>
      </div>
    );
  }
  
  export default PerguntaOpcoes