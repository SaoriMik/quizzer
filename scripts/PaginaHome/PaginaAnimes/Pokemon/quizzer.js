// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: "Qual é o nome do protagonista principal em Pokémon?",
    alternativas: ["a) Brock", "b) Misty", "c) Ash", "d) Pikachu"],
    resposta: "c) Ash"
  },
  {
    pergunta: "Quem é o rival constante de Ash Ketchum?",
    alternativas: ["a) Gary Oak", "b) James", "c) Team Rocket", "d) Brock"],
    resposta: "a) Gary Oak"
  },
  {
    pergunta: "Qual é o nome do laboratório de pesquisa onde Ash recebe seu primeiro Pokémon?",
    alternativas: ["a) Pokémon Center", "b) Professor Birch's Lab", "c) Professor Oak's Lab", "d) Pokémon Academy"],
    resposta: "c) Professor Oak's Lab"
  },
  {
    pergunta: "Qual é o tipo inicial dos Pokémon que os treinadores podem escolher na região de Kanto?",
    alternativas: ["a) Água, Fogo, Planta", "b) Água, Elétrico, Voador", "c) Fogo, Psíquico, Terra", "d) Pedra, Voador, Veneno"],
    resposta: "a) Água, Fogo, Planta"
  },
  {
    pergunta: "Qual é o nome do Pikachu de Ash?",
    alternativas: ["a) Sparky", "b) Volt", "c) Pikachu", "d) Thunder"],
    resposta: "c) Pikachu"
  },

  // Nível Médio
  {
    pergunta: "Qual é o nome do grupo de vilões que constantemente tenta roubar Pokémon de Ash?",
    alternativas: ["a) Team Magma", "b) Team Aqua", "c) Team Galactic", "d) Team Rocket"],
    resposta: "d) Team Rocket"
  },
  {
    pergunta: "Quem é o líder da Equipe Rocket em Pokémon?",
    alternativas: ["a) Jessie", "b) Meowth", "c) Giovanni", "d) Butch"],
    resposta: "c) Giovanni"
  },
  {
    pergunta: "Qual é o Pokémon lendário que é conhecido por criar oceanos?",
    alternativas: ["a) Kyogre", "b) Groudon", "c) Lugia", "d) Rayquaza"],
    resposta: "a) Kyogre"
  },
  {
    pergunta: "Qual é o nome do Pokémon inicial que evolui para Charizard?",
    alternativas: ["a) Charmander", "b) Charmeleon", "c) Squirtle", "d) Bulbasaur"],
    resposta: "b) Charmeleon"
  },
  {
    pergunta: "Qual é o nome da região onde se passa a primeira temporada de Pokémon?",
    alternativas: ["a) Kanto", "b) Johto", "c) Sinnoh", "d) Unova"],
    resposta: "a) Kanto"
  },

  // Nível Difícil
  {
    pergunta: "Qual é o nome do Pokémon lendário que representa o equilíbrio e a harmonia?",
    alternativas: ["a) Mewtwo", "b) Arceus", "c) Jirachi", "d) Celebi"],
    resposta: "b) Arceus"
  },
  {
    pergunta: "Quem é a líder da Cerulean City Gym em Pokémon?",
    alternativas: ["a) Erika", "b) Sabrina", "c) Misty", "d) Jasmine"],
    resposta: "c) Misty"
  },
  {
    pergunta: "Qual é o nome do Pokémon que tem uma forma Alolan, adaptada à região de Alola?",
    alternativas: ["a) Raichu", "b) Exeggutor", "c) Golem", "d) Marowak"],
    resposta: "a) Raichu"
  },
  {
    pergunta: "Qual é o nome do Pokémon lendário conhecido por ser o guardião da floresta?",
    alternativas: ["a) Xerneas", "b) Celebi", "c) Shaymin", "d) Virizion"],
    resposta: "c) Shaymin"
  },
  {
    pergunta: "Qual é o nome do continente apresentado nas séries Pokémon Black & White e Pokémon XY?",
    alternativas: ["a) Kalos", "b) Hoenn", "c) Unova", "d) Alola"],
    resposta: "c) Unova"
  }
];
// Fim das perguntas

var Indice = -1;
var A, B, C, D;

function GerarIndice() {
  let NovoIndice = Math.floor(Math.random() * perguntas.length);
  Validador(NovoIndice);
}

function Validador(NovoIndice) {
  if (Indice === NovoIndice) {
    GerarIndice();
  } else {
    Indice = NovoIndice;
    InserirQuestao();
  }
}

function InserirQuestao() {
  document.getElementById("pergunta").textContent = perguntas[Indice].pergunta;

  document.getElementById("a").textContent = perguntas[Indice].alternativas[0];
  document.getElementById("b").textContent = perguntas[Indice].alternativas[1];
  document.getElementById("c").textContent = perguntas[Indice].alternativas[2];
  document.getElementById("d").textContent = perguntas[Indice].alternativas[3];
}

window.addEventListener('load', GerarIndice);

function ClickA() {
  A = document.getElementById("a").textContent;
  verificarResposta(A);
}
function ClickB() {
  B = document.getElementById("b").textContent;
  verificarResposta(B);
}
function ClickC() {
  C = document.getElementById("c").textContent;
  verificarResposta(C);
}
function ClickD() {
  D = document.getElementById("d").textContent;
  verificarResposta(D);
}

function verificarResposta(elemento) {
  let resposta = elemento;
  if (Indice !== undefined && resposta === perguntas[Indice].resposta) {
    alert("CERTA A RESPOSTA");
    GerarIndice();
  } else {
    alert("ERROU");
  }
}


