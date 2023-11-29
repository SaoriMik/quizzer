// Início das perguntas sobre o UCM
var perguntasUCM = [
  // Nível Fácil
  {
    pergunta: "Qual é o nome do primeiro filme do UCM, lançado em 2008?",
    alternativas: ["a) Vingadores: Ultimato", "b) Thor", "c) Homem de Ferro", "d) Capitão América: O Primeiro Vingador"],
    resposta: "c) Homem de Ferro"
  },
  {
    pergunta: "Quem é o alter ego do super-herói Homem de Ferro?",
    alternativas: ["a) Bruce Banner", "b) Tony Stark", "c) Steve Rogers", "d) Thor Odinson"],
    resposta: "b) Tony Stark"
  },
  {
    pergunta: "Qual é o nome da organização de espionagem para a qual Natasha Romanoff (Viúva Negra) trabalhava?",
    alternativas: ["a) S.H.I.E.L.D.", "b) H.Y.D.R.A.", "c) A.I.M.", "d) Os Vingadores"],
    resposta: "a) S.H.I.E.L.D."
  },
  {
    pergunta: "Qual joia do infinito é conhecida por conceder controle total sobre o tempo?",
    alternativas: ["a) Joia da Mente", "b) Joia da Realidade", "c) Joia do Espaço", "d) Joia do Tempo"],
    resposta: "d) Joia do Tempo"
  },
  {
    pergunta: "Quem é o inimigo principal em 'Vingadores: Guerra Infinita'?",
    alternativas: ["a) Thanos", "b) Ultron", "c) Loki", "d) O Abutre"],
    resposta: "a) Thanos"
  },

  // Nível Médio
  {
    pergunta: "Qual é o planeta natal de Thor?",
    alternativas: ["a) Terra", "b) Jotunheim", "c) Asgard", "d) Xandar"],
    resposta: "c) Asgard"
  },
  {
    pergunta: "Quem é o líder dos Guardiões da Galáxia?",
    alternativas: ["a) Rocket", "b) Gamora", "c) Drax", "d) Star-Lord"],
    resposta: "d) Star-Lord"
  },
  {
    pergunta: "Qual é o nome do cientista brilhante que se torna o vilão conhecido como Ultron?",
    alternativas: ["a) Tony Stark", "b) Bruce Banner", "c) Hank Pym", "d) Reed Richards"],
    resposta: "b) Bruce Banner"
  },
  {
    pergunta: "Em 'Pantera Negra', qual é o nome da nação africana governada por T'Challa?",
    alternativas: ["a) Wakanda", "b) Zamunda", "c) Genovia", "d) Latvéria"],
    resposta: "a) Wakanda"
  },
  {
    pergunta: "Qual é o nome do martelo mágico de Thor?",
    alternativas: ["a) Mjolnir", "b) Stormbreaker", "c) Gungnir", "d) Hela"],
    resposta: "a) Mjolnir"
  },

  // Nível Difícil
  {
    pergunta: "Quem é o mentor e guia espiritual de Stephen Strange (Doutor Estranho)?",
    alternativas: ["a) O Ancião", "b) Wong", "c) Dormammu", "d) Barão Mordo"],
    resposta: "a) O Ancião"
  },
  {
    pergunta: "Qual é o nome do vilão que manipula os eventos em 'Homem-Aranha: Longe de Casa'?",
    alternativas: ["a) Mysterio", "b) Duende Verde", "c) Abutre", "d) Lagarto"],
    resposta: "a) Mysterio"
  },
  {
    pergunta: "Quem é o pai adotivo de Gamora e Nebulosa?",
    alternativas: ["a) Thanos", "b) Ego", "c) Ronan", "d) O Colecionador"],
    resposta: "a) Thanos"
  },
  {
    pergunta: "Em 'Vingadores: Ultimato', qual é o nome da versão envelhecida de Steve Rogers?",
    alternativas: ["a) Velho Capitão", "b) Capitão Idoso", "c) Capitão América Antigo", "d) Velho Soldado"],
    resposta: "a) Velho Capitão"
  },
  {
    pergunta: "Qual é o nome do grupo terrorista liderado por Helmut Zemo em 'Capitão América: Guerra Civil'?",
    alternativas: ["a) H.Y.D.R.A.", "b) A.I.M.", "c) Os Mercenários", "d) Os Apátridas"],
    resposta: "d) Os Apátridas"
  }
];


// Fim das perguntas sobre o UCM


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
