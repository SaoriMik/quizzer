// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: "Quem é o protagonista principal de Steven Universe?",
    alternativas: ["a) Garnet", "b) Amethyst", "c) Pearl", "d) Steven"],
    resposta: "d) Steven"
  },
  {
    pergunta: "Qual é o nome da mãe de Steven?",
    alternativas: ["a) Rose Quartz", "b) Yellow Diamond", "c) Blue Diamond", "d) White Diamond"],
    resposta: "a) Rose Quartz"
  },
  {
    pergunta: "Qual é a habilidade única de Steven em Steven Universe?",
    alternativas: ["a) Controle do Tempo", "b) Shapeshifting", "c) Fusão", "d) Cura"],
    resposta: "c) Fusão"
  },
  {
    pergunta: "Qual é o nome do local onde Steven e as Crystal Gems vivem?",
    alternativas: ["a) Beach City", "b) Crystal Temple", "c) Homeworld", "d) Gem Sanctuary"],
    resposta: "b) Crystal Temple"
  },
  {
    pergunta: "Qual é o nome da fusão de Garnet em Steven Universe?",
    alternativas: ["a) Sardonyx", "b) Smoky Quartz", "c) Opal", "d) Rainbow Quartz"],
    resposta: "a) Sardonyx"
  },

  // Nível Médio
  {
    pergunta: "Qual é a pedra preciosa de Amethyst?",
    alternativas: ["a) Ametista", "b) Quartzo Rosa", "c) Pérola", "d) Esmeralda"],
    resposta: "a) Ametista"
  },
  {
    pergunta: "Quem é a líder das Crystal Gems em Steven Universe?",
    alternativas: ["a) Amethyst", "b) Pearl", "c) Garnet", "d) Rose Quartz"],
    resposta: "c) Garnet"
  },
  {
    pergunta: "Qual é a relação entre Steven e as Crystal Gems?",
    alternativas: ["a) Sobrinho", "b) Filho adotivo", "c) Irmão", "d) Neto"],
    resposta: "b) Filho adotivo"
  },
  {
    pergunta: "Qual é o nome do melhor amigo humano de Steven?",
    alternativas: ["a) Lars", "b) Greg", "c) Connie", "d) Ronaldo"],
    resposta: "c) Connie"
  },
  {
    pergunta: "Qual é o nome da cidade onde Steven Universe mora?",
    alternativas: ["a) Crystal City", "b) Gem Town", "c) Beach City", "d) Diamondville"],
    resposta: "c) Beach City"
  },

  // Nível Difícil
  {
    pergunta: "Quem é a antagonista principal em Steven Universe?",
    alternativas: ["a) Jasper", "b) Yellow Diamond", "c) White Diamond", "d) Peridot"],
    resposta: "c) White Diamond"
  },
  {
    pergunta: "Qual é o nome da fusão de Pearl e Amethyst em Steven Universe?",
    alternativas: ["a) Sardonyx", "b) Rainbow Quartz", "c) Smoky Quartz", "d) Opal"],
    resposta: "c) Smoky Quartz"
  },
  {
    pergunta: "Qual é o episódio em que Steven descobre mais sobre a história de sua mãe, Rose Quartz?",
    alternativas: ["a) 'The Return'", "b) 'Rose's Scabbard'", "c) 'Gem Glow'", "d) 'Jail Break'"],
    resposta: "b) 'Rose's Scabbard'"
  },
  {
    pergunta: "Quem é a gem responsável por criar o Cluster em Steven Universe?",
    alternativas: ["a) Yellow Diamond", "b) Blue Diamond", "c) Peridot", "d) Jasper"],
    resposta: "c) Peridot"
  },
  {
    pergunta: "Qual é o nome da última fusão de Steven Universe apresentada na série?",
    alternativas: ["a) Steg", "b) Sunstone", "c) Obsidian", "d) Rainbow 2.0"],
    resposta: "b) Sunstone"
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
