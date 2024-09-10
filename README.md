*Introdução*

Este projeto é uma série de exercícios práticos para aprender a manipular objetos e arrays em JavaScript. Utilizando o Node.js e a biblioteca prompt, estes exercícios cobrem uma ampla gama de técnicas de programação, incluindo iteração, filtragem, e manipulação de dados. Este README fornece um guia sobre como configurar o ambiente de desenvolvimento e executar os exercícios.

Tecnologias Utilizadas
JavaScript: Linguagem de programação principal para os exercícios.
Node.js: Ambiente de execução para JavaScript no lado do servidor.
Visual Studio Code: Editor de código recomendado para desenvolvimento.
Biblioteca prompt: Utilizada para receber entradas do usuário.

Configuração do Ambiente

1. Instalação do Node.js
Acesse o site oficial do Node.js: nodejs.org
Baixe e instale a versão LTS (Long Term Support) recomendada para a maioria dos usuários.
Verifique a instalação no terminal com o comando:
node -v

2. Instalação do Visual Studio Code
Acesse o site oficial do Visual Studio Code: code.visualstudio.com
Baixe e instale o Visual Studio Code para o seu sistema operacional.
Abra o Visual Studio Code e instale as extensões recomendadas para JavaScript, como "ESLint" e "Prettier".

3. Instalação da Biblioteca prompt
Abra o terminal e navegue até o diretório do projeto:

cd C:\Users\Luan Garitano\Desktop\Turma02\module1\exercicios02

Inicialize um novo projeto Node.js.

Instale a biblioteca prompt:
npm install prompt

Estrutura do Projeto
O caminho do projeto é:

C:\Users\Luan Garitano\Desktop\Turma02\module1\exercicios02
Exercícios

 Manipulação de Objetos
1- Acessando Propriedades de Objetos
Crie um objeto carro com propriedades marca, modelo, ano, e cor.
Use for in para iterar sobre as propriedades e exibir seus valores no console.

 Verificando Propriedades
2- Crie um objeto livro com propriedades titulo, autor, anoPublicacao, e genero.
Verifique se a propriedade editora existe usando for in. Se não existir, adicione essa propriedade.

 Filtrando Propriedades de Objetos
3- Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico.

 Manipulação de Arrays de Objetos com for of
   Iterando Sobre Arrays de Objetos
4- Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

  Calculando Valores em Arrays de Objetos
5- Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas e exibir o nome do aluno junto com sua média.

  Filtrando Arrays de Objetos
6- Crie um array de objetos funcionarios, onde cada objeto contém nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários com salário maior que um valor específico.

 Manipulação de Arrays de Objetos com forEach
  Modificando Objetos em um Array
7- Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

 Criando Novos Arrays a Partir de Objetos
8- Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.

 Contabilizando Elementos com uma Condição
9- Crie um array de objetos clientes, cada um com nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.
  
  Combinação de Estruturas
 Criando Relatórios com Objetos e Arrays
10- Crie um array de objetos vendas, onde cada objeto tem produto, quantidade, e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

  Agrupando Elementos com forEach

11- Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.
  
  Atualizando um Array de Objetos
  
12- Crie um array de objetos estoque, onde cada objeto tem produto, quantidade, e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

  Implementando um Carrinho de Compras
13- Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.

  Manipulando Objetos Complexos
14- Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

  Filtrando e Somando Valores
15- Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.

Execução dos Exercícios
Para executar os exercícios, abra o terminal no Visual Studio Code e siga as instruções fornecidas em cada exercício. Certifique-se de que todos os arquivos JavaScript estão no diretório correto e que o Node.js está instalado e funcionando.

Se você encontrar algum problema ou tiver dúvidas, sinta-se à vontade para procurar ajuda ou consultar a documentação do Node.js e JavaScript.

Este README fornece uma visão geral dos exercícios e das tecnologias usadas. Siga as instruções para configurar seu ambiente e começar a praticar suas habilidades de programação em JavaScript!
