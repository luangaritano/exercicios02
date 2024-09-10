/* 
10. Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.

*/


let sales = [

  { 
    product: "SMARTPHONE S24 ULTRA 256GB",
    amount: 40,
    value: 6500
  },

  {
    product: "SMART TV SAMSUNG 65' 4K",
    amount: 35,
    value: 4500
  },

  {
    product: "NOTEBOOK SAMSUNG ESSENTIALS CORE I5",
    amount: 20,
    value: 3000
  },

]

let totalSales = 0;

sales.forEach(sale => {

  salesByProduct += sale.amount * sale.value;
 
  
});


console.log(totalSales)