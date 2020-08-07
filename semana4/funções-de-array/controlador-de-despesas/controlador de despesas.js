function cadastrarDespesas() {
    const formularioValor = document.getElementById("valor")
    let valor = formularioValor.value 
    console.log(valor)
    formularioValor.value = ""
    
    const formularioDescricao = document.getElementById("descricao")
    let descricao = formularioDescricao.value 
    console.log(descricao)
    formularioDescricao.value = ""

    let tiposDeDespesas = document.getElementById("tipos-de-despesas")
    let despesas = tiposDeDespesas.value
    tiposDeDespesas.value = ""
    console.log(despesas)

    const despesasCadastradas = {
        Valor: valor ,
        Despesas: descricao,
        Descrição: despesas
    }
    console.log(despesasCadastradas)

    if (valor === ""  && descricao === "" || despesas === ""){
        alert("Você deixou algum campo Vazio. Verifique novamente.")
    }
}


function filtrarDespesas(){

}

function limparFiltro(){
    const inputMinimo = document.getElementById("valor-minimo")
    const inputMaximo = document.getElementById("valor-maximo")
    
    inputMinimo.value = ""
    inputMaximo.value = ""
}