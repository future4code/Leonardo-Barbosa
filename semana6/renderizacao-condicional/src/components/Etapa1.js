import React from 'react'

function Etapa1(){
    return(
        <div>
            <h3>ETAPA 1 - Dados Gerais</h3>
                <p>1. Qual o Seu Nome?</p>
                <input></input>
                <p>2. Qual a sua Idade?</p>
                <input></input>
                <p>3. Qual o Seu Email?</p>
                <input></input>
                <p>4. Qual a sua Escolaridade</p>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>

        </div>       
    )
}

export default Etapa1