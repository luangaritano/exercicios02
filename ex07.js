/* 
Manipulação de Arrays de Objetos com forEach
7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço. 

*/


let products = [

  { 
    name: "Notebook",
    value: 1900.50,
    discount: 10
  },

  {
    name: "SMART TV 65 4K",
    value: 4500,
    discount: 10
  },

  {

    name: "Playstation 5",
    value: 5000,
    discount: 10
 
  }

]


products.forEach(function(product) {

  let discountValue = product.value * product.discount / 100;
  let finalValue = product.value - discountValue;

  console.log(`O valor do ${product.name} com desconto de 10% é: ` + "R$ " + `${finalValue}`)
  
});

