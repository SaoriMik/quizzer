// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: 'Qual é o nome do protagonista em "Mr. Robot"?',
    alternativas: ['a) Elliot Alderson', 'b) Tyrell Wellick', 'c) Angela Moss', 'd) Darlene Alderson'],
    resposta: 'a) Elliot Alderson'
  },
  {
    pergunta: 'Qual é a principal atividade de Elliot Alderson?',
    alternativas: ['a) Programador', 'b) Jornalista', 'c) Detetive', 'd) Advogado'],
    resposta: 'a) Programador'
  },
  {
    pergunta: 'Quem é o líder do grupo de hackers conhecido como "fsociety"?',
    alternativas: ['a) Tyrell Wellick', 'b) Angela Moss', 'c) Elliot Alderson', 'd) Mr. Robot'],
    resposta: 'c) Elliot Alderson'
  },
  {
    pergunta: 'O que é "Evil Corp" na série?',
    alternativas: ['a) Uma empresa de tecnologia', 'b) Um banco', 'c) Uma agência de segurança', 'd) Uma loja de conveniência'],
    resposta: 'b) Um banco'
  },
  {
    pergunta: 'Qual é a condição de saúde mental de Elliot?',
    alternativas: ['a) Transtorno de Personalidade Borderline', 'b) Esquizofrenia', 'c) Transtorno Dissociativo de Identidade', 'd) Depressão'],
    resposta: 'c) Transtorno Dissociativo de Identidade'
  },

  // Nível Médio
  {
    pergunta: 'Qual é a relação de Tyrell Wellick com a empresa "Evil Corp"?',
    alternativas: ['a) CEO', 'b) CFO', 'c) CTO', 'd) COO'],
    resposta: 'c) CTO'
  },
  {
    pergunta: 'O que Elliot quer realizar ao iniciar o projeto "fsociety"?',
    alternativas: ['a) Derrubar o governo', 'b) Destruir todas as empresas', 'c) Apagar todas as dívidas de crédito', 'd) Iniciar uma revolução política'],
    resposta: 'c) Apagar todas as dívidas de crédito'
  },
  {
    pergunta: 'Quem é "White Rose" na série?',
    alternativas: ['a) Uma líder política', 'b) Uma hacker', 'c) Uma empresária', 'd) Um líder de uma organização criminosa'],
    resposta: 'd) Um líder de uma organização criminosa'
  },
  {
    pergunta: 'Qual é a relação entre Darlene e Elliot?',
    alternativas: ['a) Irmãos', 'b) Namorados', 'c) Amigos de infância', 'd) Colegas de trabalho'],
    resposta: 'a) Irmãos'
  },
  {
    pergunta: 'Qual é o nome do bar frequentemente visitado por Elliot e seus amigos?',
    alternativas: ['a) Steel Mountain', 'b) The Dark Army', 'c) E Corp Lounge', 'd) Ron\'s Coffee'],
    resposta: 'c) E Corp Lounge'
  },

  // Nível Difícil
  {
    pergunta: 'Qual é o nome da empresa de segurança cibernética onde Angela Moss trabalha?',
    alternativas: ['a) Allsafe', 'b) Dark Army', 'c) E Corp Security', 'd) fsociety Security'],
    resposta: 'a) Allsafe'
  },
  {
    pergunta: 'O que acontece com Tyrell Wellick no final da série?',
    alternativas: ['a) Ele morre', 'b) Ele foge para outro país', 'c) Ele se torna CEO da "Evil Corp"', 'd) Ele é preso'],
    resposta: 'a) Ele morre'
  },
  {
    pergunta: 'Quem é Irving na série "Mr. Robot"?',
    alternativas: ['a) Um policial corrupto', 'b) Um advogado', 'c) Um chef de cozinha', 'd) Um membro do "Dark Army"'],
    resposta: 'd) Um membro do "Dark Army"'
  },
  {
    pergunta: 'Qual é o plano final de "White Rose" para a "Dark Army"?',
    alternativas: ['a) Assumir o controle do governo', 'b) Criar uma utopia virtual', 'c) Iniciar uma guerra nuclear', 'd) Derrubar todas as grandes corporações'],
    resposta: 'c) Iniciar uma guerra nuclear'
  },
  {
    pergunta: 'O que significa o título "Mr. Robot"?',
    alternativas: ['a) O nome de um hacker lendário', 'b) Uma referência a um personagem de quadrinhos', 'c) O alter ego de Elliot', 'd) O líder do "Dark Army"'],
    resposta: 'c) O alter ego de Elliot'
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
