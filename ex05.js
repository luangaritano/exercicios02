/* 
5. Calculando Valores em Arrays de Objetos 
○ Objetivo: Crie um array de objetos alunos, 
cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das 
notas de cada aluno e exibir o nome do aluno junto com sua média.
*/



let alunos = [

    { name: "Luan",
      note1: 10,
      note2: 3,
      note3: 6  


    },

    {
      name: "Rafael",
      note1: 8,
      note2: 5,
      note3: 6


    },

    {


      name: "Ricardo",
      note1: 7,
      note2: 4,
      note3: 3
    }


]


for (const aluno of alunos) {

    let media = (aluno.note1 + aluno.note2 + aluno.note3) / 3

    console.log(`A média do aluno ${aluno.name} é: ` + media)

    
}