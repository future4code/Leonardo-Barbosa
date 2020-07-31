/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem Vindo ao jogo de Blackjack")
  
   if (confirm("Quer iniciar uma nova rodada?"))  {
      
      const carta = comprarCarta()
         
      const   cartaUm = comprarCarta()
      const   cartaDois = comprarCarta()
      const   cartaTres = comprarCarta()
         
      const   usuarioResultado = carta.valor + cartaUm.valor
      const   pcResultado = cartaDois.valor + cartaTres.valor
         
      console.log("Usuário - cartas:", carta.texto, cartaUm.texto, "- pontuação", usuarioResultado)
      console.log("Computado - cartas:", cartaDois.texto, cartaTres.texto, "- pontuação", pcResultado)
   
   if (pcResultado === usuarioResultado){
         console.log("Empate!")
   }  if (pcResultado > usuarioResultado) {
         console.log("O computador ganhou!")
   } else {
         console.log("O usuário ganhou!")
   }
   } else {
         console.log("O jogo Acabou!")
   }



