/* 
15- Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.

*/


let transaction = [

  {
      type:"entrada",
      value: 4000,
    },
  {
     type:"saida",
     value: 3200,
  },

  {
    type:"entrada",
    value: 5000,
  } ,
  {
    type:"saida",
    value: 2500,
  },
] 

const operations = {

  entrada: (saldo, valor) => saldo + valor,
  saida: (saldo, valor) => saldo - valor,

}




let finalValue = 0;

transaction.forEach(trans => {

  const { type, value } = trans;
  finalValue = operations[type](finalValue, value);

});


console.log(finalValue);



