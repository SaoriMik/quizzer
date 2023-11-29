// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: "Qual é o nome do físico teórico que mora com Sheldon em 'The Big Bang Theory'?",
    alternativas: ["a) Leonard", "b) Howard", "c) Raj", "d) Penny"],
    resposta: "a) Leonard"
  },
  {
    pergunta: "Qual é o trabalho de Penny no início da série?",
    alternativas: ["a) Garçonete", "b) Cientista", "c) Atriz", "d) Cantora"],
    resposta: "a) Garçonete"
  },
  {
    pergunta: "O que Sheldon considera seu lugar especial no sofá?",
    alternativas: ["a) O canto direito", "b) O meio", "c) O lado esquerdo", "d) O encosto"],
    resposta: "a) O canto direito"
  },
  {
    pergunta: "O que Howard é incapaz de fazer, devido a uma promessa feita à sua mãe?",
    alternativas: ["a) Usar roupas de cor escura", "b) Falar com mulheres", "c) Comer carne", "d) Dirigir"],
    resposta: "b) Falar com mulheres"
  },
  {
    pergunta: "Qual é o sobrenome completo de Sheldon?",
    alternativas: ["a) Cooper", "b) Hofstadter", "c) Wolowitz", "d) Koothrappali"],
    resposta: "a) Cooper"
  },

  // Nível Médio
  {
    pergunta: "Quem é a namorada de Leonard na primeira temporada?",
    alternativas: ["a) Amy", "b) Bernadette", "c) Leslie", "d) Priya"],
    resposta: "c) Leslie"
  },
  {
    pergunta: "Qual é o hobby peculiar de Raj que ele só consegue fazer na presença de álcool?",
    alternativas: ["a) Tocar violão", "b) Falar com mulheres", "c) Falar em público", "d) Dirigir"],
    resposta: "c) Falar em público"
  },
  {
    pergunta: "Qual é o nome do grupo de Dungeons & Dragons que os amigos frequentemente jogam?",
    alternativas: ["a) The Knights of the Round Table", "b) The Fellowship of the Ring", "c) The Justice League", "d) The Mystic Warlords of Ka'a"],
    resposta: "d) The Mystic Warlords of Ka'a"
  },
  {
    pergunta: "O que é o 'Código Amigo' de Leonard e Sheldon?",
    alternativas: ["a) Um código de vestimenta", "b) Um código de conduta para convidados", "c) Um contrato de companheiros de quarto", "d) Um código para divisão de contas"],
    resposta: "b) Um código de conduta para convidados"
  },
  {
    pergunta: "Qual é a profissão da Bernadette?",
    alternativas: ["a) Cientista", "b) Garçonete", "c) Farmacêutica", "d) Veterinária"],
    resposta: "c) Farmacêutica"
  },

  // Nível Difícil
  {
    pergunta: "Qual é o nome do programa de supercomputador que Sheldon usa para suas simulações?",
    alternativas: ["a) HAL 9000", "b) Deep Blue", "c) Watson", "d) Kripke"],
    resposta: "d) Kripke"
  },
  {
    pergunta: "Quem é o arqui-inimigo de Sheldon, que é constantemente mencionado mas nunca aparece na série?",
    alternativas: ["a) Barry Kripke", "b) Wil Wheaton", "c) Stuart Bloom", "d) Emily Sweeney"],
    resposta: "a) Barry Kripke"
  },
  {
    pergunta: "O que Howard recebe como presente de casamento da mãe dele?",
    alternativas: ["a) Um carro", "b) Um helicóptero", "c) Uma casa", "d) Um fogão"],
    resposta: "b) Um helicóptero"
  },
  {
    pergunta: "Qual é a nacionalidade de Raj?",
    alternativas: ["a) Indiano", "b) Paquistanês", "c) Sri Lankês", "d) Nepalês"],
    resposta: "a) Indiano"
  },
  {
    pergunta: "Qual é o título do episódio em que Sheldon vai para o Espaço?",
    alternativas: ["a) 'The Launch'", "b) 'The Countdown Reflection'", "c) 'The Space Expedition'", "d) 'The Celestial Journey'"],
    resposta: "b) 'The Countdown Reflection'"
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
