function criarTarefa(){
    //console.log("Botao-foi-clicado")
    
    const minhaTarefa = document.getElementById("tarefa")
    let valor = minhaTarefa.value
    //console.log(valor)

    const diaSemana = document.getElementById("dias-semana")
    let semana = diaSemana.value
    minhaTarefa.value = ""
    //console.log(semana)

       
    
     switch (semana){
        case "domingo":
            document.getElementById("domingo").innerHTML += `<li>${valor}</li>`
            break
        case "segunda":
            document.getElementById("segunda").innerHTML += `<li>${valor}</li>`
            break
        case "terca":
            document.getElementById("terca").innerHTML += `<li>${valor}</li>`
            break
        case "quarta":
            document.getElementById("quarta").innerHTML += `<li>${valor}</li>`
            break
        case "quinta":
            document.getElementById("quinta").innerHTML += `<li>${valor}</li>`
            break
        case "sexta":
            document.getElementById("sexta").innerHTML += `<li>${valor}</li>`            
            break
        default:
            document.getElementById("sabado").innerHTML += `<li>${valor}</li>`            
            break
        


}

}