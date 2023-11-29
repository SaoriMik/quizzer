// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: "Quem é o protagonista principal em Naruto?",
    alternativas: ["a) Sasuke Uchiha", "b) Sakura Haruno", "c) Naruto Uzumaki", "d) Kakashi Hatake"],
    resposta: "c) Naruto Uzumaki"
  },
  {
    pergunta: "Qual é o nome da vila ninja onde Naruto cresceu?",
    alternativas: ["a) Konohagakure", "b) Sunagakure", "c) Kirigakure", "d) Iwagakure"],
    resposta: "a) Konohagakure"
  },
  {
    pergunta: "Qual é a técnica de assinatura de Sasuke Uchiha?",
    alternativas: ["a) Rasengan", "b) Chidori", "c) Byakugan", "d) Shadow Clone Jutsu"],
    resposta: "b) Chidori"
  },
  {
    pergunta: "Quem é o mentor de Naruto durante grande parte da série?",
    alternativas: ["a) Jiraiya", "b) Kakashi", "c) Tsunade", "d) Orochimaru"],
    resposta: "a) Jiraiya"
  },
  {
    pergunta: "Qual é o nome da raposa de nove caudas selada dentro de Naruto?",
    alternativas: ["a) Kurama", "b) Shukaku", "c) Matatabi", "d) Isobu"],
    resposta: "a) Kurama"
  },

  // Nível Médio
  {
    pergunta: "Qual é o nome da organização criminosa liderada por Pain (Nagato) em Naruto Shippuden?",
    alternativas: ["a) Akatsuki", "b) Oto", "c) Root", "d) Jinchuriki"],
    resposta: "a) Akatsuki"
  },
  {
    pergunta: "O que significa a sigla 'ANBU' em Naruto?",
    alternativas: ["a) Assassinos Ninjas Blindados Unidos", "b) Agência Ninja de Busca e Apreensão", "c) Unidade Especial de Batalha e Assassino", "d) Anônimos Ninja em Busca de União"],
    resposta: "c) Unidade Especial de Batalha e Assassino"
  },
  {
    pergunta: "Qual é a habilidade especial de Kakashi Hatake?",
    alternativas: ["a) Sharingan", "b) Byakugan", "c) Rinnegan", "d) Mangekyo Sharingan"],
    resposta: "a) Sharingan"
  },
  {
    pergunta: "Quem é conhecido como 'o homem mais rápido' em Naruto?",
    alternativas: ["a) Naruto Uzumaki", "b) Minato Namikaze", "c) Rock Lee", "d) Might Guy"],
    resposta: "d) Might Guy"
  },
  {
    pergunta: "Qual é o sobrenome de Sakura?",
    alternativas: ["a) Haruno", "b) Uchiha", "c) Hyuga", "d) Inuzuka"],
    resposta: "a) Haruno"
  },

  // Nível Difícil
  {
    pergunta: "Qual é o nome da técnica que permite a Naruto controlar vários clones simultaneamente?",
    alternativas: ["a) Rasengan", "b) Kage Bunshin no Jutsu", "c) Chidori", "d) Hiraishin no Jutsu"],
    resposta: "b) Kage Bunshin no Jutsu"
  },
  {
    pergunta: "Qual é a relação entre Itachi Uchiha e Sasuke Uchiha?",
    alternativas: ["a) Irmãos", "b) Primos", "c) Tio e sobrinho", "d) Pai e filho"],
    resposta: "a) Irmãos"
  },
  {
    pergunta: "Quem é o criador do Jutsu Edo Tensei (Invocação do Mundo Impuro)?",
    alternativas: ["a) Orochimaru", "b) Kabuto Yakushi", "c) Tobirama Senju", "d) Hiruzen Sarutobi"],
    resposta: "c) Tobirama Senju"
  },
  {
    pergunta: "Qual é o nome do líder da Akatsuki?",
    alternativas: ["a) Pain (Nagato)", "b) Konan", "c) Madara Uchiha", "d) Obito Uchiha"],
    resposta: "a) Pain (Nagato)"
  },
  {
    pergunta: "O que é o Tsukuyomi Infinito, uma técnica usada por Obito Uchiha (Tobi)?",
    alternativas: ["a) Ilusão temporal", "b) Controle mental", "c) Reviver os mortos", "d) Criar dimensões alternativas"],
    resposta: "d) Criar dimensões alternativas"
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
