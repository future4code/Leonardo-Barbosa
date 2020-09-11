import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const ContainerHeader = styled.div`
  display:flex;
  justify-content:space-between;
  margin-right:150px;
  padding:5px;

   button{
    display:flex;
    justify-content: flex-start;
   }
button {
  background:none;
  border:none;
  outline:none;
  cursor:pointer;
}
`


function TelaDois(props) {
  return (
    
    <div >
      <ContainerHeader>
        <button onClick={props.alterarPagina} ><ArrowBackIosIcon /></button>
        <label>Astro Match</label>
      </ContainerHeader>
      <div>   
        <p>API</p>
      </div> 
    </div>
  );
}

export default TelaDois;