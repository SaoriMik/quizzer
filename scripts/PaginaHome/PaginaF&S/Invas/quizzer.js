// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: 'Qual é o título original do filme "Invasores - Nenhum Sistema Está a Salvo"?',
    alternativas: ['a) The Matrix', 'b) Enemy of the State', 'c) Snowden', 'd) Who Am I: Kein System ist sicher'],
    resposta: 'd) Who Am I: Kein System ist sicher'
  },
  {
    pergunta: 'Quem é o personagem principal que lidera um grupo de hackers no filme?',
    alternativas: ['a) Max', 'b) Benjamin', 'c) Leonard', 'd) David'],
    resposta: 'a) Max'
  },
  {
    pergunta: 'Qual cidade serve como pano de fundo principal para a história do filme?',
    alternativas: ['a) Nova York', 'b) Berlim', 'c) Tóquio', 'd) Londres'],
    resposta: 'b) Berlim'
  },
  {
    pergunta: 'Qual é a habilidade especial de Max no campo da informática?',
    alternativas: ['a) Criptografia', 'b) Programação de jogos', 'c) Segurança de redes', 'd) Engenharia de software'],
    resposta: 'c) Segurança de redes'
  },
  {
    pergunta: 'Qual é o objetivo do grupo de hackers no filme?',
    alternativas: ['a) Invadir sistemas bancários', 'b) Criar um vírus', 'c) Derrubar governos corruptos', 'd) Ganhar notoriedade na mídia'],
    resposta: 'c) Derrubar governos corruptos'
  },

  // Nível Médio
  {
    pergunta: 'Quem é o mentor de Max no filme, introduzindo-o ao mundo do hacking?',
    alternativas: ['a) Martin', 'b) Eric', 'c) Henry', 'd) Richard'],
    resposta: 'a) Martin'
  },
  {
    pergunta: 'O que o grupo de hackers busca ao invadir sistemas?',
    alternativas: ['a) Informações pessoais', 'b) Arquivos confidenciais', 'c) Dinheiro virtual', 'd) Códigos de armas biológicas'],
    resposta: 'b) Arquivos confidenciais'
  },
  {
    pergunta: 'Qual é o nome do sistema de segurança que o grupo tenta quebrar?',
    alternativas: ['a) Black Widow', 'b) Daedalus', 'c) Hydra', 'd) Medusa'],
    resposta: 'b) Daedalus'
  },
  {
    pergunta: 'O que Max descobre durante a invasão que desencadeia os eventos do filme?',
    alternativas: ['a) Uma conspiração governamental', 'b) Uma inteligência artificial maligna', 'c) Uma rede de espionagem internacional', 'd) Uma fraude financeira'],
    resposta: 'a) Uma conspiração governamental'
  },
  {
    pergunta: 'Qual é o gênero cinematográfico predominante de "Invasores - Nenhum Sistema Está a Salvo"?',
    alternativas: ['a) Drama', 'b) Ficção Científica', 'c) Suspense', 'd) Comédia'],
    resposta: 'c) Suspense'
  },

  // Nível Difícil
  {
    pergunta: 'Quem é o antagonista principal no filme, representando uma ameaça ao grupo de hackers?',
    alternativas: ['a) Um hacker rival', 'b) Um agente de segurança', 'c) Um magnata da tecnologia', 'd) Um espião internacional'],
    resposta: 'b) Um agente de segurança'
  },
  {
    pergunta: 'Qual é o verdadeiro nome do grupo de hackers no filme?',
    alternativas: ['a) Dark Web', 'b) Cyber Reapers', 'c) CLAY', 'd) Lizard Squad'],
    resposta: 'c) CLAY'
  },
  {
    pergunta: 'Qual é a inspiração histórica real por trás da história do filme?',
    alternativas: ['a) Caso Enigma', 'b) Guerra Fria', 'c) Operação Aurora', 'd) Ataque Stuxnet'],
    resposta: 'd) Ataque Stuxnet'
  },
  {
    pergunta: 'O que torna o código-fonte do sistema de segurança tão desafiador de quebrar?',
    alternativas: ['a) Criptografia de ponta', 'b) Inteligência artificial defensiva', 'c) Algoritmos quânticos', 'd) Firewall avançado'],
    resposta: 'a) Criptografia de ponta'
  },
  {
    pergunta: 'Qual é a reviravolta surpreendente no final do filme?',
    alternativas: ['a) Max é um agente duplo', 'b) O mentor de Max é um traidor', 'c) O antagonista é um aliado secreto', 'd) Toda a história é uma simulação'],
    resposta: 'c) O antagonista é um aliado secreto'
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
