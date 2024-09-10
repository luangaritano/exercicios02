// Manipulação de Objetos 
// 1. Acessando Propriedades de Objetos 
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor.
//  Use for in para iterar sobre as propriedades e exibir seus valores no console. 


let carro = {
    marca:"Chevrolet",
    modelo:"Onix",
    ano:"2013",
    cor:"preto"


}

for (let chave in carro){
    console.log(`${chave}: ${carro[chave]}`);
}


