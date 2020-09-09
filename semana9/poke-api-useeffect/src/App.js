import React, { useState, useEffect } from "react"
import axios from "axios"
import PokeCard from "./components/PokeCard"
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:30px;
`


function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

   
  useEffect(() => {
    getPokemon()
  }, [])
 
 const getPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

 const changePokeName = event => {
    setPokeName(event.target.value)
  };

    return (
      <Container >
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            )
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </Container>
    )
  
}

export default App;
