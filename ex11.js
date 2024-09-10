/* 
Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.

*/


let requests = [

  { 
    client: "RG CELL IMPORTS",
    product: "SMARTPHONE S24 ULTRA 256GB",
    amount: 115
  },

  {
    client: "CARREFOUR",
    product: "SMART TV SAMSUNG 65' 4K",
    amount: 82
  },

  {
    client: "LOJAS AMERICANAS",
    product: "NOTEBOOK SAMSUNG ESSENTIALS CORE I5",
    amount: 45
  },

]

let totalAmountByClient = {};

requests.forEach(request => {


    totalAmountByClient[request.client] = request.amount;
  
});

console.log(totalAmountByClient);

