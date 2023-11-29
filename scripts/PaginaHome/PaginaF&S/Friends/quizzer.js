// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: "Quem é o personagem principal masculino em 'Friends'?",
    alternativas: ["a) Rachel", "b) Ross", "c) Chandler", "d) Joey"],
    resposta: "b) Ross"
  },
  {
    pergunta: "Qual é o nome do café onde os amigos costumam se encontrar?",
    alternativas: ["a) Central Perk", "b) Perk Place", "c) Coffee Central", "d) Brew Haven"],
    resposta: "a) Central Perk"
  },
  {
    pergunta: "Qual é o animal de estimação exótico de Ross?",
    alternativas: ["a) Gato", "b) Tartaruga", "c) Pássaro", "d) Macaco"],
    resposta: "d) Macaco"
  },
  {
    pergunta: "O que Monica é obcecada por manter limpo e organizado?",
    alternativas: ["a) Sapatos", "b) Livros", "c) Banheiro", "d) Cozinha"],
    resposta: "c) Cozinha"
  },
  {
    pergunta: "Qual é o trabalho de Chandler Bing?",
    alternativas: ["a) Ator", "b) Advogado", "c) Estatístico", "d) Publicitário"],
    resposta: "d) Publicitário"
  },

  // Nível Médio
  {
    pergunta: "O que acontece com o apartamento de Monica e Rachel depois da troca com Chandler e Joey?",
    alternativas: ["a) É vendido", "b) É incendiado", "c) É alugado para estranhos", "d) Fica vago"],
    resposta: "b) É incendiado"
  },
  {
    pergunta: "Como se chama a irmã gêmea de Phoebe?",
    alternativas: ["a) Ursula", "b) Rachel", "c) Judy", "d) Janice"],
    resposta: "a) Ursula"
  },
  {
    pergunta: "Qual é o emprego de Phoebe no início da série?",
    alternativas: ["a) Massagista", "b) Cantora de rua", "c) Garçonete", "d) Secretária"],
    resposta: "b) Cantora de rua"
  },
  {
    pergunta: "Qual é o sobrenome completo de Ross?",
    alternativas: ["a) Geller", "b) Green", "c) Bing", "d) Tribbiani"],
    resposta: "a) Geller"
  },
  {
    pergunta: "O que Joey nunca compartilha?",
    alternativas: ["a) Comida", "b) Roupas", "c) Informações pessoais", "d) Carro"],
    resposta: "b) Roupas"
  },

  // Nível Difícil
  {
    pergunta: "Qual é o nome do personagem interpretado por Brad Pitt, que era inimigo de Rachel no colégio?",
    alternativas: ["a) Will Colbert", "b) Mark Robinson", "c) Mike Hannigan", "d) Paul Stevens"],
    resposta: "a) Will Colbert"
  },
  {
    pergunta: "Qual é o nome do chefe de Chandler nas primeiras temporadas?",
    alternativas: ["a) Mr. Stevens", "b) Mr. Heckles", "c) Mr. Geller", "d) Mr. Bing"],
    resposta: "a) Mr. Stevens"
  },
  {
    pergunta: "Quem é o autor do famoso livro 'Be Your Own Windkeeper' que irrita as personagens femininas?",
    alternativas: ["a) Joey Tribbiani", "b) Ross Geller", "c) Chandler Bing", "d) Paulo (Paul the Wine Guy)"],
    resposta: "b) Ross Geller"
  },
  {
    pergunta: "Qual é o verdadeiro nome de 'Gunther', o barista no Central Perk?",
    alternativas: ["a) Mike", "b) Ethan", "c) James", "d) David"],
    resposta: "c) James"
  },
  {
    pergunta: "Qual é a profissão de Charlie Wheeler, a namorada de Joey e Ross?",
    alternativas: ["a) Paleontóloga", "b) Paleobotânica", "c) Bióloga marinha", "d) Arqueóloga"],
    resposta: "c) Bióloga marinha"
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
