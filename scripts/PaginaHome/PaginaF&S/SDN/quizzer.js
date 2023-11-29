// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: 'Qual é o nome do protagonista principal em "O Senhor dos Anéis"?',
    alternativas: ['a) Frodo Bolseiro', 'b) Aragorn', 'c) Gandalf', 'd) Legolas'],
    resposta: 'a) Frodo Bolseiro'
  },
  {
    pergunta: 'Qual é o nome do objeto que Frodo deve destruir para derrotar Sauron?',
    alternativas: ['a) A Espada Andúril', 'b) O Um Anel', 'c) A Pedra de Erebor', 'd) O Cálice de Valinor'],
    resposta: 'b) O Um Anel'
  },
  {
    pergunta: 'Quem é o melhor amigo de Frodo na Comunidade do Anel?',
    alternativas: ['a) Samwise Gamgi', 'b) Legolas', 'c) Gimli', 'd) Merry'],
    resposta: 'a) Samwise Gamgi'
  },
  {
    pergunta: 'Qual é a capital do reino dos Homens, governada por Aragorn?',
    alternativas: ['a) Rivendell', 'b) Gondor', 'c) Rohan', 'd) Lothlórien'],
    resposta: 'b) Gondor'
  },
  {
    pergunta: 'Quem é o vilão principal em "O Senhor dos Anéis"?',
    alternativas: ['a) Saruman', 'b) Sauron', 'c) Gollum', 'd) Gríma Língua de Cobra'],
    resposta: 'b) Sauron'
  },

  // Nível Médio
  {
    pergunta: 'Qual é o nome do pai de Aragorn?',
    alternativas: ['a) Thranduil', 'b) Denethor', 'c) Elrond', 'd) Isildur'],
    resposta: 'c) Elrond'
  },
  {
    pergunta: 'Quem é o líder dos Ents que ajuda na batalha contra Saruman?',
    alternativas: ['a) Treebeard', 'b) Quickbeam', 'c) Fangorn', 'd) Old Man Willow'],
    resposta: 'a) Treebeard'
  },
  {
    pergunta: 'Qual é a espécie de Legolas?',
    alternativas: ['a) Anão', 'b) Humano', 'c) Elfo', 'd) Hobbit'],
    resposta: 'c) Elfo'
  },
  {
    pergunta: 'O que Frodo e Sam chamam carinhosamente de "Gollum"?',
    alternativas: ['a) Sméagol', 'b) Shelob', 'c) Nazgûl', 'd) Balrog'],
    resposta: 'a) Sméagol'
  },
  {
    pergunta: 'O que Bilbo encontra que o torna invisível?',
    alternativas: ['a) Anel de Poder', 'b) Capa da Invisibilidade', 'c) Poção Mágica', 'd) Amuleto Élfico'],
    resposta: 'b) Capa da Invisibilidade'
  },

  // Nível Difícil
  {
    pergunta: 'Qual é o verdadeiro nome de Smeagol antes de ser corrompido pelo Um Anel?',
    alternativas: ['a) Sméagol', 'b) Déagol', 'c) Gollum', 'd) Bilbo'],
    resposta: 'a) Sméagol'
  },
  {
    pergunta: 'Quem é o líder dos Nazgûl, também conhecido como Rei Bruxo de Angmar?',
    alternativas: ['a) Sauron', 'b) Saruman', 'c) Morgoth', 'd) Witch-king'],
    resposta: 'd) Witch-king'
  },
  {
    pergunta: 'Quem é o fabricante original dos Anéis do Poder?',
    alternativas: ['a) Sauron', 'b) Gandalf', 'c) Celebrimbor', 'd) Elrond'],
    resposta: 'c) Celebrimbor'
  },
  {
    pergunta: 'O que é a Montanha da Perdição?',
    alternativas: ['a) Monte Gundabad', 'b) Monte Doom', 'c) Monte Erebor', 'd) Monte Gram'],
    resposta: 'b) Monte Doom'
  },
  {
    pergunta: 'Qual é o nome do rei dos Rohirrim, que lidera a defesa de Gondor durante a Batalha dos Campos de Pelennor?',
    alternativas: ['a) Éomer', 'b) Théoden', 'c) Éowyn', 'd) Boromir'],
    resposta: 'a) Éomer'
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
