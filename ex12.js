/* 
12. Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

*/


let stocks = [

  { 
    min: 25,
    product: "SMARTPHONE S24 ULTRA 256GB",
    amount: 10
  },

  {
    min: 40,
    product: "SMART TV SAMSUNG 65' 4K",
    amount: 82
  },

  {
    min: 10,
    product: "NOTEBOOK SAMSUNG ESSENTIALS CORE I5",
    amount: 8
  },

]


stocks.forEach(stock => {


   while(stock.amount < stock.min){

    stock.amount*= 2;

   }

   
console.log(stock.amount)

});



