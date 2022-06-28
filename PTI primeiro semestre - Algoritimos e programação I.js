//PTI
alert ('Descubra qual combustível é mais vantajoso')
alert ('')

do{
  alert ('Nota: Utilise ponto (.) em vez de vírgula (,)')
  valorA = prompt('Digite o preço do álcool: ')
  valorB = prompt('Digite o preço da gasolina: ')
  
  relconsumo = parseFloat(valorA) / parseFloat(valorB)
  alert (relconsumo)
  
  if(relconsumo >= 0){
    if (relconsumo <0.7){
      alert ('Vale a pena abastecer com álcool!')
    }
    else if(relconsumo >0.7){
      alert ('Vale a pena abastecer com gasolina!')
    }
    else {
      alert ('Tanto faz abastecer com um ou outro!')
    }
   
  }
  else{
    alert ('Valor invalido')
  }
  alert('')
    do{
      alert ('Deseja efetuar um novo cálculo?')
      alert ('1 - Sim, efetuar novo cálculo')
      alert ('2 - Não, encerrar o programa')
      
      opcao = prompt('Opção: ')
      
      if (opcao == '1'){
        alert('Ok, vamos fazer um novo cálculo!')
        alert('')
      }
      else if (opcao == '2'){
        alert('')
        alert ('Encerramos por aqui, até mais!!!')
        alert('')
      }
      else {
        alert ('Opção invalida')
        alert('')
      }
    }while(opcao != '1' & opcao != '2')
}while(opcao != '2')