import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


function TelaDois(props) {
  return (
    
    <div >
      <div>
        <label>Astro Match</label>
        <button onClick={props.alterarPagina} >Voltar</button>
      </div>
      <div>   
        <p>API</p>
      </div> 
    </div>
  );
}

export default TelaDois;