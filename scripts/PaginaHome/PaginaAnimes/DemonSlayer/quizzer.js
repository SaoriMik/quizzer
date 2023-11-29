// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: "Qual é o nome do protagonista de Demon Slayer?",
    alternativas: ["a) Zenitsu", "b) Inosuke", "c) Tanjiro", "d) Nezuko"],
    resposta: "c) Tanjiro"
  },
  {
    pergunta: "Qual é o nome da irmã de Tanjiro, que se transforma em um demônio?",
    alternativas: ["a) Kanao", "b) Shinobu", "c) Nezuko", "d) Mitsuri"],
    resposta: "c) Nezuko"
  },
  {
    pergunta: "Qual é a arma principal usada pelos caçadores de demônios em Demon Slayer?",
    alternativas: ["a) Lança", "b) Espada", "c) Arco", "d) Katana"],
    resposta: "b) Espada"
  },
  {
    pergunta: "Quem é o líder dos Hashira, os mais poderosos caçadores de demônios?",
    alternativas: ["a) Kanae Kocho", "b) Muichiro Tokito", "c) Giyu Tomioka", "d) Kagaya Ubuyashiki"],
    resposta: "c) Giyu Tomioka"
  },
  {
    pergunta: "Qual é o nome da técnica respiratória especial de Tanjiro?",
    alternativas: ["a) Respiração da Água", "b) Respiração do Fogo", "c) Respiração do Trovão", "d) Respiração da Mente"],
    resposta: "b) Respiração do Fogo"
  },

  // Nível Médio
  {
    pergunta: "Qual é o nome do demônio principal que lidera a Lua Inferior Seis em Demon Slayer?",
    alternativas: ["a) Rui", "b) Enmu", "c) Muzan Kibutsuji", "d) Akaza"],
    resposta: "c) Muzan Kibutsuji"
  },
  {
    pergunta: "O que Nezuko, a irmã de Tanjiro, come para se fortalecer?",
    alternativas: ["a) Almas humanas", "b) Sangue de demônio", "c) Flores vermelhas", "d) Almas de flores"],
    resposta: "b) Sangue de demônio"
  },
  {
    pergunta: "Quem é o pilar do fogo (Hashira) em Demon Slayer?",
    alternativas: ["a) Kyojuro Rengoku", "b) Sanemi Shinazugawa", "c) Muichiro Tokito", "d) Tengen Uzui"],
    resposta: "a) Kyojuro Rengoku"
  },
  {
    pergunta: "Qual é a habilidade única de Zenitsu Agatsuma quando ele está inconsciente?",
    alternativas: ["a) Respiração da Trovão", "b) Respiração do Fogo", "c) Respiração da Água", "d) Respiração do Vento"],
    resposta: "a) Respiração da Trovão"
  },
  {
    pergunta: "O que acontece com a espada de Tanjiro durante a batalha final da primeira temporada de Demon Slayer?",
    alternativas: ["a) Quebra", "b) Se transforma em metal", "c) Ganha poderes mágicos", "d) Se torna uma espada demoníaca"],
    resposta: "a) Quebra"
  },

  // Nível Difícil
  {
    pergunta: "Qual é o nome da técnica final de Kyojuro Rengoku durante a batalha contra o demônio superior?",
    alternativas: ["a) Chamas do Inferno", "b) Dança da Lua", "c) Respiração do Sol", "d) Solstício Ardente"],
    resposta: "d) Solstício Ardente"
  },
  {
    pergunta: "Quem é o pilar do trovão (Hashira) em Demon Slayer?",
    alternativas: ["a) Inosuke Hashibira", "b) Zenitsu Agatsuma", "c) Tengen Uzui", "d) Shinobu Kocho"],
    resposta: "b) Zenitsu Agatsuma"
  },
  {
    pergunta: "Qual é a única habilidade de Inosuke Hashibira que não envolve o uso de sua espada?",
    alternativas: ["a) Respiração do Trovão", "b) Respiração da Água", "c) Respiração do Vento", "d) Respiração do Som"],
    resposta: "d) Respiração do Som"
  },
  {
    pergunta: "Quem é o mestre de Tanjiro e o instrutor de Respiração da Água?",
    alternativas: ["a) Giyu Tomioka", "b) Sakonji Urokodaki", "c) Kanae Kocho", "d) Shinobu Kocho"],
    resposta: "b) Sakonji Urokodaki"
  },
  {
    pergunta: "Qual é o significado do nome 'Kimetsu no Yaiba' (Demon Slayer) em japonês?",
    alternativas: ["a) Espada da Destruição", "b) Respiração de Fogo", "c) Folha Caída", "d) Sanguessuga"],
    resposta: "c) Folha Caída"
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
