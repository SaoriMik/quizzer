// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: "Quem é o protagonista principal de One Piece?",
    alternativas: ["a) Zoro", "b) Sanji", "c) Luffy", "d) Nami"],
    resposta: "c) Luffy"
  },
  {
    pergunta: "Qual é o nome do chapéu de palha que Luffy sempre usa?",
    alternativas: ["a) Hat of Adventure", "b) Pirate Hat", "c) Straw Hat", "d) Sun Hat"],
    resposta: "c) Straw Hat"
  },
  {
    pergunta: "Quem é o arque-inimigo de Luffy e o responsável por sua cicatriz sob o olho?",
    alternativas: ["a) Blackbeard", "b) Akainu", "c) Kaido", "d) Doflamingo"],
    resposta: "b) Akainu"
  },
  {
    pergunta: "Qual é o nome do barco dos Chapéus de Palha?",
    alternativas: ["a) Going Merry", "b) Thousand Sunny", "c) Red Force", "d) Oro Jackson"],
    resposta: "b) Thousand Sunny"
  },
  {
    pergunta: "Qual é o nome da principal organização governamental em One Piece?",
    alternativas: ["a) Cipher Pol", "b) Baroque Works", "c) Marines", "d) Shichibukai"],
    resposta: "c) Marines"
  },

  // Nível Médio
  {
    pergunta: "Quem é considerado o espadachim mais forte do mundo em One Piece?",
    alternativas: ["a) Roronoa Zoro", "b) Trafalgar Law", "c) Brook", "d) Kin'emon"],
    resposta: "a) Roronoa Zoro"
  },
  {
    pergunta: "Qual é o nome da fruta do diabo que Luffy come e concede a ele poder de esticar seu corpo?",
    alternativas: ["a) Gomu Gomu no Mi", "b) Mera Mera no Mi", "c) Bara Bara no Mi", "d) Hana Hana no Mi"],
    resposta: "a) Gomu Gomu no Mi"
  },
  {
    pergunta: "Quem é o irmão mais velho de Luffy e comandante da Segunda Divisão dos Piratas do Barba Branca?",
    alternativas: ["a) Sabo", "b) Ace", "c) Marco", "d) Jinbe"],
    resposta: "b) Ace"
  },
  {
    pergunta: "Qual é o nome do arco em que os Chapéus de Palha enfrentam o Governo Mundial pela primeira vez?",
    alternativas: ["a) Arco de Skypiea", "b) Arco de Enies Lobby", "c) Arco de Dressrosa", "d) Arco de Water 7"],
    resposta: "d) Arco de Water 7"
  },
  {
    pergunta: "Quem é o criador e líder da tripulação do Barba Branca?",
    alternativas: ["a) Shanks", "b) Whitebeard", "c) Blackbeard", "d) Kaido"],
    resposta: "b) Whitebeard"
  },

  // Nível Difícil
  {
    pergunta: "Qual é o nome verdadeiro do Capitão Buggy?",
    alternativas: ["a) Buggy o Palhaço", "b) Buggy D. Clown", "c) Buggy o Estrela", "d) Buggy D. Pirate"],
    resposta: "b) Buggy D. Clown"
  },
  {
    pergunta: "Qual é o nome da ilha onde Zou, a tartaruga elefante, está localizada?",
    alternativas: ["a) Dressrosa", "b) Punk Hazard", "c) Zou", "d) Whole Cake Island"],
    resposta: "c) Zou"
  },
  {
    pergunta: "Quem é o criador das armas antiguerras, conhecido como 'O Grande Mestre'?",
    alternativas: ["a) Dr. Vegapunk", "b) Franky", "c) Senor Pink", "d) Tom"],
    resposta: "a) Dr. Vegapunk"
  },
  {
    pergunta: "Qual é o nome do poderoso Yonkou que governa a Ilha Whole Cake?",
    alternativas: ["a) Kaido", "b) Big Mom", "c) Shanks", "d) Blackbeard"],
    resposta: "b) Big Mom"
  },
  {
    pergunta: "Qual é o nome da técnica secreta de Luffy que ele desenvolve durante o arco de Dressrosa?",
    alternativas: ["a) Gear Fourth", "b) Red Hawk", "c) Elephant Gatling", "d) Hawk Gatling"],
    resposta: "a) Gear Fourth"
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

