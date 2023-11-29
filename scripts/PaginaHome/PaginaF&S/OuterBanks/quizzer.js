// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: 'Qual é a cidade onde se passa a série "Outer Banks"?',
    alternativas: ['a) Charleston', 'b) Outer Banks', 'c) Wilmington', 'd) Raleigh'],
    resposta: 'b) Outer Banks'
  },
  {
    pergunta: 'Quem é o líder dos Pogues?',
    alternativas: ['a) John B', 'b) Pope', 'c) JJ', 'd) Kiara'],
    resposta: 'a) John B'
  },
  {
    pergunta: 'O que os Pogues estão procurando durante a maior parte da primeira temporada?',
    alternativas: ['a) Um tesouro perdido', 'b) Uma fuga da cidade', 'c) Um mapa do tesouro', 'd) Uma chave misteriosa'],
    resposta: 'c) Um mapa do tesouro'
  },
  {
    pergunta: 'Qual é o apelido do pai de John B?',
    alternativas: ['a) Big John', 'b) Captain Jack', 'c) Red', 'd) Topper'],
    resposta: 'a) Big John'
  },
  {
    pergunta: 'Qual é a profissão da mãe de Sarah Cameron?',
    alternativas: ['a) Advogada', 'b) Médica', 'c) Empresária', 'd) Policial'],
    resposta: 'c) Empresária'
  },

  // Nível Médio
  {
    pergunta: 'O que significa a sigla "Kook" na série?',
    alternativas: ['a) Jovens rebeldes', 'b) Ricos e privilegiados', 'c) Surfistas experientes', 'd) Membros da polícia local'],
    resposta: 'b) Ricos e privilegiados'
  },
  {
    pergunta: 'Qual é o nome do barco usado pelos Pogues?',
    alternativas: ['a) Sea Dog', 'b) Royal Merchant', 'c) Phantom', 'd) Wando'],
    resposta: 'b) Royal Merchant'
  },
  {
    pergunta: 'Quem é o principal antagonista na primeira temporada?',
    alternativas: ['a) Rafe Cameron', 'b) Ward Cameron', 'c) Topper', 'd) Barry'],
    resposta: 'b) Ward Cameron'
  },
  {
    pergunta: 'O que é o Royal Merchant na história?',
    alternativas: ['a) Uma ilha secreta', 'b) Um navio naufragado', 'c) Uma loja popular', 'd) Uma empresa de mergulho'],
    resposta: 'b) Um navio naufragado'
  },
  {
    pergunta: 'Qual é o nome do irmão mais velho de John B?',
    alternativas: ['a) Topper', 'b) Rafe', 'c) Wheezie', 'd) Pope'],
    resposta: 'b) Rafe'
  },

  // Nível Difícil
  {
    pergunta: 'Quem interpreta o personagem John B?',
    alternativas: ['a) Chase Stokes', 'b) Rudy Pankow', 'c) Jonathan Daviss', 'd) Austin North'],
    resposta: 'a) Chase Stokes'
  },
  {
    pergunta: 'Qual é o nome do grupo rival dos Pogues?',
    alternativas: ['a) The Royals', 'b) The Kooks', 'c) The Merchants', 'd) The Outer Crew'],
    resposta: 'b) The Kooks'
  },
  {
    pergunta: 'O que aconteceu com o pai de John B antes do início da série?',
    alternativas: ['a) Desapareceu misteriosamente', 'b) Morreu em um acidente de barco', 'c) Foi preso injustamente', 'd) Mudou-se para outra cidade'],
    resposta: 'b) Morreu em um acidente de barco'
  },
  {
    pergunta: 'Quem é responsável pelo desaparecimento do pai de John B?',
    alternativas: ['a) Ward Cameron', 'b) Rafe Cameron', 'c) Topper', 'd) Sarah Cameron'],
    resposta: 'a) Ward Cameron'
  },
  {
    pergunta: 'Qual é o verdadeiro nome de "Topper" na série?',
    alternativas: ['a) Thomas', 'b) Theodore', 'c) Travis', 'd) Timmy'],
    resposta: 'c) Travis'
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
