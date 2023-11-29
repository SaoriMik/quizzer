// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: 'Qual é o nome do protagonista principal em "Brooklyn Nine-Nine"?',
    alternativas: ["a) Jake Peralta", "b) Terry Jeffords", "c) Amy Santiago", "d) Raymond Holt"],
    resposta: "a) Jake Peralta"
  },
  {
    pergunta: 'Onde se passa a maior parte da série "Brooklyn Nine-Nine"?',
    alternativas: ["a) Nova York", "b) Los Angeles", "c) Chicago", "d) Miami"],
    resposta: "a) Nova York"
  },
  {
    pergunta: 'Quem é o capitão da 99ª Delegacia?',
    alternativas: ["a) Terry Jeffords", "b) Rosa Diaz", "c) Raymond Holt", "d) Gina Linetti"],
    resposta: "c) Raymond Holt"
  },
  {
    pergunta: 'Qual é o nome do melhor amigo de Jake Peralta?',
    alternativas: ["a) Terry Jeffords", "b) Charles Boyle", "c) Adrian Pimento", "d) Doug Judy"],
    resposta: "b) Charles Boyle"
  },
  {
    pergunta: 'Qual é o vício de Terry Jeffords?',
    alternativas: ["a) Café", "b) Chocolate", "c) Iogurte", "d) Energéticos"],
    resposta: "b) Chocolate"
  },

  // Nível Médio
  {
    pergunta: 'Qual é o cargo de Amy Santiago na 99ª Delegacia?',
    alternativas: ["a) Detetive", "b) Sargento", "c) Tenente", "d) Capitã"],
    resposta: "a) Detetive"
  },
  {
    pergunta: 'O que é "Pontiac Bandit", o apelido de um criminoso recorrente na série?',
    alternativas: ["a) Assaltante de Bancos", "b) Traficante de Drogas", "c) Ladrão de Carros", "d) Hacker"],
    resposta: "c) Ladrão de Carros"
  },
  {
    pergunta: 'O que Jake Peralta quer ser quando criança?',
    alternativas: ["a) Astronauta", "b) Bombeiro", "c) Policial", "d) Cantor de Ópera"],
    resposta: "a) Astronauta"
  },
  {
    pergunta: 'Qual é o nome da assistente civil que trabalha na delegacia?',
    alternativas: ["a) Gina Linetti", "b) Judy Judy", "c) Wuntch Wuntch", "d) Madeline Wuntch"],
    resposta: "a) Gina Linetti"
  },
  {
    pergunta: 'O que faz o personagem Charles Boyle ser conhecido na série?',
    alternativas: ["a) Ser um gourmet", "b) Ser um especialista em tecnologia", "c) Ser um dançarino talentoso", "d) Ser um atleta extremo"],
    resposta: "a) Ser um gourmet"
  },

  // Nível Difícil
  {
    pergunta: 'Qual é o nome completo de Raymond Holt?',
    alternativas: ["a) Raymond Jacob Holt", "b) Raymond Kevin Holt", "c) Raymond Leslie Holt", "d) Raymond Theodore Holt"],
    resposta: "b) Raymond Kevin Holt"
  },
  {
    pergunta: 'Qual é a habilidade única da personagem Rosa Diaz que é frequentemente destacada na série?',
    alternativas: ["a) Jogo de xadrez", "b) Tocar piano", "c) Artes marciais", "d) Línguas estrangeiras"],
    resposta: "c) Artes marciais"
  },
  {
    pergunta: 'Em que época do ano ocorre o evento anual "Halloween Heist" na série?',
    alternativas: ["a) Natal", "b) Dia de Ação de Graças", "c) Halloween", "d) Ano Novo"],
    resposta: "c) Halloween"
  },
  {
    pergunta: 'Qual é a comida favorita de Jake Peralta?',
    alternativas: ["a) Pizza", "b) Sanduíche de Queijo Grelhado", "c) Burritos", "d) Donuts"],
    resposta: "c) Burritos"
  },
  {
    pergunta: 'Quem é o rival constante de Jake Peralta na competição de "Halloween Heist"?',
    alternativas: ["a) Adrian Pimento", "b) Terry Jeffords", "c) Amy Santiago", "d) Raymond Holt"],
    resposta: "c) Amy Santiago"
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
