// 2. Verificando Propriedades 
//  Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero.
//  Verifique se a propriedade editora existe no objeto usando for in. Se não existir,
//   adicione essa propriedade ao objeto. 


let livro = {
    titulo:"O pequeno principe",
    autor:"Antoine de Saint-Exupéry",
    anoPublicacao:"1943",
    genero:"Fábula"


}

let editora;

for (let chave in livro){
    if(chave !== editora){
        
        livro.editora = "editora br"
    }
}

console.log(livro)
