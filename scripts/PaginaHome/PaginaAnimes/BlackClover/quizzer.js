// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: "Quem é o protagonista principal em Black Clover?",
    alternativas: ["a) Yuno", "b) Asta", "c) Noelle", "d) Luck"],
    resposta: "b) Asta"
  },
  {
    pergunta: "Qual é o nome do reino onde a história de Black Clover se passa?",
    alternativas: ["a) Reino do Vento", "b) Reino do Fogo", "c) Reino do Diamante", "d) Reino do Trevo"],
    resposta: "d) Reino do Trevo"
  },
  {
    pergunta: "Qual é o objetivo de Asta, o protagonista, no início da série?",
    alternativas: ["a) Se tornar o Rei Mago", "b) Se tornar o líder do Esquadrão do Raio", "c) Se tornar o Feiticeiro Imperador", "d) Ganhar o coração de Noelle"],
    resposta: "b) Se tornar o líder do Esquadrão do Raio"
  },
  {
    pergunta: "Qual é a peculiaridade mágica de Asta em Black Clover?",
    alternativas: ["a) Controle do Fogo", "b) Ausência de Magia", "c) Magia de Criação", "d) Magia de Cura"],
    resposta: "b) Ausência de Magia"
  },
  {
    pergunta: "Quem é o rival de Asta e também recebeu um grimório de trevo de cinco folhas?",
    alternativas: ["a) Yami", "b) Leopold", "c) Yuno", "d) Magna"],
    resposta: "c) Yuno"
  },

  // Nível Médio
  {
    pergunta: "Qual é o nome do esquadrão liderado por Yami em Black Clover?",
    alternativas: ["a) Esquadrão da Rosa", "b) Esquadrão da Sombra", "c) Esquadrão do Raio", "d) Esquadrão da Neve"],
    resposta: "c) Esquadrão do Raio"
  },
  {
    pergunta: "Qual é o nome do grimório de Asta em Black Clover?",
    alternativas: ["a) Grimório da Treva", "b) Grimório da Morte", "c) Grimório do Anti-Magia", "d) Grimório do Caos"],
    resposta: "c) Grimório do Anti-Magia"
  },
  {
    pergunta: "Quem é a capitã do Esquadrão do Coral em Black Clover?",
    alternativas: ["a) Noelle", "b) Charmy", "c) Mimosa", "d) Charlotte"],
    resposta: "d) Charlotte"
  },
  {
    pergunta: "Qual é a habilidade mágica única de Noelle Silva?",
    alternativas: ["a) Magia de Gelo", "b) Magia de Criação", "c) Magia de Água", "d) Magia de Fogo"],
    resposta: "c) Magia de Água"
  },
  {
    pergunta: "Quem é o feiticeiro imperador durante a maior parte da série Black Clover?",
    alternativas: ["a) Julius Novachrono", "b) Fuegoleon Vermillion", "c) Yami Sukehiro", "d) William Vangeance"],
    resposta: "a) Julius Novachrono"
  },

  // Nível Difícil
  {
    pergunta: "Qual é o nome verdadeiro de Licht, o líder do Olho do Sol da Meia-Noite?",
    alternativas: ["a) Yuno", "b) Lumiere", "c) Patri", "d) Rhya"],
    resposta: "b) Lumiere"
  },
  {
    pergunta: "Qual é o nome do rei do Reino do Diamante em Black Clover?",
    alternativas: ["a) Augustus Kira Clover XIII", "b) Julius Novachrono", "c) Grinberryall", "d) Zara Ideale"],
    resposta: "a) Augustus Kira Clover XIII"
  },
  {
    pergunta: "Qual é o nome do grimório de Yuno em Black Clover?",
    alternativas: ["a) Grimório da Luz", "b) Grimório do Vento", "c) Grimório do Trovão", "d) Grimório do Raio"],
    resposta: "b) Grimório do Vento"
  },
  {
    pergunta: "Quem é o líder do Olho do Sol da Meia-Noite após os eventos do ataque ao Reino do Trevo?",
    alternativas: ["a) Licht", "b) Julius Novachrono", "c) Patri", "d) Rhya"],
    resposta: "c) Patri"
  },
  {
    pergunta: "Qual é a natureza da magia de Charmy em Black Clover?",
    alternativas: ["a) Magia de Criação", "b) Magia de Comida", "c) Magia de Fogo", "d) Magia de Terra"],
    resposta: "b) Magia de Comida"
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
