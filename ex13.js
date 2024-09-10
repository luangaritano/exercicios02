/* 
Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.

*/


let buyCar = [
  {
    itens: [{

      name:"Playstation 5",
      amount: 5,
      unitPrice: 4000,
    },
  {
     name:"NOTEBOOK SAMSUNG CORE I5",
     amount: 10,
     unitPrice: 3200,
  },

  {
    name:"SMARTV SAMSUNG 65' 4K",
    amount: 8,
    unitPrice: 5000
  }] 
}
]

totalValue = 0;

buyCar[0].itens.forEach(item => {

totalValue+= item.amount * item.unitPrice 

});


console.log(totalValue.toFixed(2))


