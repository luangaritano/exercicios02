/* 
Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.

*/


let clients = [

  { 
    name: "Luan",
    age: 35,
    city: "Rio de janeiro",
  },

  {
    name: "Thiago",
    age: 29,
    city: "São Paulo",
  },

  {
    name: "Durval",
    age: 45,
    city: "Rio Grande do Sul",
  },

]

let contador = 0;

clients.forEach(function(client) {

  if(client.age > 30){
    contador++

  }
  
});

console.log(`O total de clientes acima de 30 anos é: ${contador}`)
