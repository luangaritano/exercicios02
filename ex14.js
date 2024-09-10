/* 
14. Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.

*/


let company = [
  {
    departaments: [{

      name:"Administração",
      employees: ["Fernando", "Roberta","Camila"],
    
    },
  {
    name:"Financeiro",
    employees: ["Roberto", "Douglas","Maicon"],
  },

  {
    name:"Recursos Humanos",
    employees: ["Amanda", "Julia","Letícia"],
  }] 
}
]


for (const departament of company[0].departaments) {

  console.log(`Departamento: ${departament.name}`);
  
  for (const employee of departament.employees) {
    console.log(`  Funcionário: ${employee}`);
  }

    
  }




