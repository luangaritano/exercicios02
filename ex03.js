// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.


let produto = {

    marca:"Samsung",
    modelo:"Notebook Serie 5",
    preco: 1500.00,
    precoDeCusto: 900.00,
    qtd: 50,
    cor:"cinza",

}

const value = 800.00;
let filter = {};

 for(let chave in produto){

    if(produto[chave] > value){

     filter[chave] = produto[chave];
    }


}

console.log(filter)