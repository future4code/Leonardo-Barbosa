import React, {useState} from 'react'
import styled from 'styled-components'
import TelaUm from './Components/TelaUm'
import TelaDois from './Components/TelaDois'
import axios from 'axios'



const ContainerPai = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  gap: 30px;
`

const ContainerMenu = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:100px;    
  background-color:floralwhite;
  border: 15px groove gold;
  height:510px;
  width: 410px;  
`

function App() {

  const [pagina, setPagina] = useState(true)

  const alterarPagina = () => {
    if (pagina === true){
      setPagina(false)
    }else {
      setPagina(true)
    }
  }

  const paginaAtual = () => {
    switch (pagina){
      case true:
        return <TelaUm alterarPagina={alterarPagina}/>
      case false:
        return <TelaDois alterarPagina={alterarPagina}/>
    }
  }

  
  const limparCatchs = () => {
    const headers = {
      headers:{
        "Content-Type": "application/json"
      }
    }    
      axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/clear", headers)
        .then(response => {})
        .catch(erro => {})
  }

  return (
  <ContainerPai>
    <ContainerMenu>
      {paginaAtual()}
    </ContainerMenu>
      <button onClick={ () => limparCatchs()} >Zerar matches</button>
  </ContainerPai>  
  );
}

export default App;
