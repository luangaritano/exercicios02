/* 
Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes. 

*/


let movies = [

  { 
    title: "Duna 1",
    director: "Denis Villeneuve",
    yearOfRelease: 2021,
  },

  {
    title: "Duna 2",
    director: "Denis Villeneuve",
    yearOfRelease: 2024,
  },

  {
    title: "Harry Potter e a Pedra Filosofal",
    director: "Chris Columbus",
    yearOfRelease: 2001
  },

]

let newArrayMovie = [];

movies.forEach(function(movie) {

  newArrayMovie.push(movie.title);
  
  
});

console.log(newArrayMovie)