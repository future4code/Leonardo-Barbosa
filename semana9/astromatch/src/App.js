import React, {useState} from 'react'
import styled from 'styled-components'
import TelaUm from './Components/TelaUm'
import TelaDois from './Components/TelaDois'



const ContainerPai = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  gap: 30px;
`

const ContainerMenu = styled.div`
  display:flex;
  /* align-items:center; */
  flex-direction:column;
  margin-top:100px;    
  background-color:gold;
  border: 2px solid black;
  height:500px;
  width: 400px;
   
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

  return (
  <ContainerPai>
    <ContainerMenu>
      {paginaAtual()}
    </ContainerMenu>
      <button>Zerar matches</button>
  </ContainerPai>  
  );
}

export default App;
