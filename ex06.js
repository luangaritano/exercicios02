/* 
6. Filtrando Arrays de Objetos 
○ Objetivo: Crie um array de objetos funcionarios, 
onde cada objeto contém informações como nome, cargo, e salario. 
Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico. 

*/



let funcionarios = [

    { 
      nome: "Luan",
      cargo: "Advogado",
      salario: 3500


    },

    {
      nome: "Rafael",
      cargo: "Eletricista",
      salario: 2000

    },

    {

      name: "Ricardo",
      cargo: "Contador",
      salario: 2800
    }

]

let valor = 3000
let filtro = {}


for (const funcionario of funcionarios) {

  if(funcionario.salario > valor){

    filtro = funcionario

  }

    
}

console.log(filtro)