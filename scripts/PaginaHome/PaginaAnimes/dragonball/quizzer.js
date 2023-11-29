// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: "Quem é o protagonista principal de Dragon Ball?",
    alternativas: ["a) Vegeta", "b) Goku", "c) Gohan", "d) Piccolo"],
    resposta: "b) Goku"
  },
  {
    pergunta: "Qual é a transformação mais poderosa de Goku?",
    alternativas: ["a) Super Saiyajin 3", "b) Super Saiyajin God", "c) Super Saiyajin Blue", "d) Ultra Instinct"],
    resposta: "d) Ultra Instinct"
  },
  {
    pergunta: "Quem é o arqui-inimigo de Goku que sempre busca as Esferas do Dragão?",
    alternativas: ["a) Freeza", "b) Cell", "c) Majin Buu", "d) Pilaf"],
    resposta: "d) Pilaf"
  },
  {
    pergunta: "Qual é o nome do pai de Goku?",
    alternativas: ["a) Bardock", "b) Raditz", "c) King Vegeta", "d) Nappa"],
    resposta: "a) Bardock"
  },
  {
    pergunta: "Qual é o objeto usado para invocar o dragão Shenlong e conceder desejos?",
    alternativas: ["a) Esferas do Dragão", "b) Cristais de Kai", "c) Radar do Dragão", "d) Bastão Mágico"],
    resposta: "a) Esferas do Dragão"
  },

  // Nível Médio
  {
    pergunta: "Quem é o criador das Esferas do Dragão?",
    alternativas: ["a) Kami", "b) Kaioshin", "c) Guru", "d) Shenlong"],
    resposta: "a) Kami"
  },
  {
    pergunta: "Qual é o nome da técnica de Cell que absorve seres humanos e outros androides para se tornar mais poderoso?",
    alternativas: ["a) Final Flash", "b) Solar Kamehameha", "c) Spirit Bomb", "d) Absorção"],
    resposta: "d) Absorção"
  },
  {
    pergunta: "Qual é a transformação que Vegeta alcança pela primeira vez durante a Saga dos Saiyajins?",
    alternativas: ["a) Super Saiyajin", "b) Super Saiyajin 2", "c) Saiyajin Deus", "d) Saiyajin Puro"],
    resposta: "a) Super Saiyajin"
  },
  {
    pergunta: "Qual é o planeta de origem dos Saiyajins?",
    alternativas: ["a) Namekusei", "b) Terra", "c) Vegeta", "d) Planeta Freeza #79"],
    resposta: "c) Vegeta"
  },
  {
    pergunta: "Quem é o androide que inicialmente tem a missão de matar Goku em Dragon Ball Z?",
    alternativas: ["a) Android 17", "b) Android 18", "c) Android 16", "d) Android 19"],
    resposta: "d) Android 19"
  },

  // Nível Difícil
  {
    pergunta: "Qual é o nome do último vilão enfrentado por Goku em Dragon Ball GT?",
    alternativas: ["a) Baby", "b) Omega Shenron", "c) Super 17", "d) Dr. Myuu"],
    resposta: "b) Omega Shenron"
  },
  {
    pergunta: "Quem é o primeiro personagem a alcançar a forma de Super Saiyajin depois de Goku?",
    alternativas: ["a) Gohan", "b) Vegeta", "c) Trunks", "d) Piccolo"],
    resposta: "a) Gohan"
  },
  {
    pergunta: "Qual é o nome da técnica de Goku que usa a energia de todos os seres vivos para criar uma esfera de poder massivo?",
    alternativas: ["a) Spirit Bomb", "b) Kamehameha", "c) Instant Transmission", "d) Solar Flare"],
    resposta: "a) Spirit Bomb"
  },
  {
    pergunta: "Quem é o pai de Freeza e o imperador do Universo 7?",
    alternativas: ["a) Cooler", "b) King Cold", "c) Lord Slug", "d) Sorbet"],
    resposta: "b) King Cold"
  },
  {
    pergunta: "Qual é o nome da técnica de Goku que ele usa para derrotar Majin Buu no final de Dragon Ball Z?",
    alternativas: ["a) Dragon Fist", "b) Ultra Instinct", "c) Spirit Bomb", "d) Super Kamehameha"],
    resposta: "a) Dragon Fist"
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
