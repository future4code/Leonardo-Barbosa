import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import astromatch from '../img/astromatch.svg'


const ContainerHeader = styled.div`
  display:flex;
  justify-content:space-between;
  margin-right:150px;
  padding:5px;

  button{
    display:flex;
    justify-content: flex-start;
    background:none;
    border:none;
    outline:none;
    cursor:pointer;
  }
img {
  height:30px;
  width:150px;
  margin-right:-30px;
   
}
`


function TelaDois(props) {
  return (
    
    <div >
      <ContainerHeader>
        <button onClick={props.alterarPagina} ><ArrowBackIosIcon /></button>
        <img src={astromatch}/>
      </ContainerHeader>
      <div>   
        <p>API</p>
      </div> 
    </div>
  );
}

export default TelaDois;