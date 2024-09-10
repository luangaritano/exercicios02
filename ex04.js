// 4. Iterando Sobre Arrays de Objetos 
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome,
//  idade, e cidade. Use for of para exibir as 
// informações de cada pessoa no console. 



let people = [
    {

    name: "Luan",
    age: 30,
    city: "Rio de janeiro"

},


{
    name: "Rodrigo",
    age: 34,
    city: "São Paulo"


},

{
    name: "Fernando",
    age: 22,
    city: "Belo Horizonte"



}
]


for(let person of people){

    console.log(person)
}


