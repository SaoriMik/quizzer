// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: "Qual é o nome do professor que assume o cargo de Defesa Contra as Artes das Trevas em 'Harry Potter e a Ordem da Fênix'?",
    alternativas: ["a) Professor Snape", "b) Professor Lupin", "c) Professor Slughorn", "d) Professor Umbridge"],
    resposta: "d) Professor Umbridge"
  },
  {
    pergunta: "Qual é o objeto mágico que Harry utiliza para se comunicar com Sirius Black?",
    alternativas: ["a) Varinha", "b) Espelho de Dois Sentidos", "c) Mapa do Maroto", "d) Anel da Grifinória"],
    resposta: "b) Espelho de Dois Sentidos"
  },
  {
    pergunta: "Quem é o novo Ministro da Magia no livro?",
    alternativas: ["a) Cornelius Fudge", "b) Rufus Scrimgeour", "c) Kingsley Shacklebolt", "d) Dolores Umbridge"],
    resposta: "c) Kingsley Shacklebolt"
  },
  {
    pergunta: "Qual é a criatura mágica que é introduzida no livro e que guarda a entrada para a Sala Precisa?",
    alternativas: ["a) Testrálio", "b) Hipogrifo", "c) Acromântula", "d) Cavalo Alado"],
    resposta: "d) Cavalo Alado"
  },
  {
    pergunta: "Qual é a equipe de quadribol da escola que Harry capitaneia?",
    alternativas: ["a) Grifinória", "b) Lufa-Lufa", "c) Corvinal", "d) Sonserina"],
    resposta: "a) Grifinória"
  },

  // Nível Médio
  {
    pergunta: "O que representa a Sociedade de Proteção à Desinformação, criada por Hermione?",
    alternativas: ["a) Uma organização anti-Voldemort", "b) Um grupo pró-elfos domésticos", "c) Um clube de poções", "d) Uma sociedade secreta de estudantes"],
    resposta: "a) Uma organização anti-Voldemort"
  },
  {
    pergunta: "Qual é a criatura que Harry enfrenta na Floresta Proibida durante a prova prática do exame de Trato das Criaturas Mágicas?",
    alternativas: ["a) Testrálio", "b) Hipogrifo", "c) Acromântula", "d) Thestral"],
    resposta: "d) Thestral"
  },
  {
    pergunta: "Quem é o professor de Adivinhação na Escola de Magia e Bruxaria de Hogwarts durante esse ano?",
    alternativas: ["a) Professor Binns", "b) Professora McGonagall", "c) Professor Trelawney", "d) Professor Flitwick"],
    resposta: "c) Professor Trelawney"
  },
  {
    pergunta: "O que acontece com Sirius Black no final de 'Harry Potter e a Ordem da Fênix'?",
    alternativas: ["a) Ele é preso em Azkaban", "b) Ele é morto por Bellatrix Lestrange", "c) Ele se torna o novo Ministro da Magia", "d) Ele foge para o mundo dos trouxas"],
    resposta: "b) Ele é morto por Bellatrix Lestrange"
  },
  {
    pergunta: "Qual é a habilidade mágica especial que Harry descobre que possui e que é conhecida como 'occlumência'?",
    alternativas: ["a) A habilidade de voar sem vassoura", "b) A habilidade de ler mentes", "c) A habilidade de se comunicar com animais", "d) A habilidade de bloquear a invasão em sua mente"],
    resposta: "d) A habilidade de bloquear a invasão em sua mente"
  },

  // Nível Difícil
  {
    pergunta: "Quem é o diretor da Escola de Magia e Bruxaria de Hogwarts em 'Harry Potter e a Ordem da Fênix'?",
    alternativas: ["a) Professor Dumbledore", "b) Professor McGonagall", "c) Professor Snape", "d) Professor Flitwick"],
    resposta: "a) Professor Dumbledore"
  },
  {
    pergunta: "Qual é o nome da organização secreta fundada por Harry para treinar alunos em defesa contra as artes das trevas?",
    alternativas: ["a) Ordem da Fênix", "b) Armada de Dumbledore", "c) Conclave das Criaturas Mágicas", "d) Liga dos Feiticeiros"],
    resposta: "b) Armada de Dumbledore"
  },
  {
    pergunta: "O que Harry vê quando entra na sala onde Sirius Black está sendo torturado por Voldemort?",
    alternativas: ["a) Espelho de Ojesed", "b) Profecia", "c) Lago Negro", "d) Espelho de Dois Sentidos"],
    resposta: "c) Lago Negro"
  },
  {
    pergunta: "O que representa a expressão 'Expecto Patronum', que é frequentemente usada no livro?",
    alternativas: ["a) Um feitiço de cura", "b) Um feitiço de proteção contra Dementadores", "c) Um feitiço de transformação", "d) Um feitiço de controle mental"],
    resposta: "b) Um feitiço de proteção contra Dementadores"
  },
  {
    pergunta: "Qual é o nome completo do irmão mais novo de Sirius Black, mencionado pela primeira vez em 'Harry Potter e a Ordem da Fênix'?",
    alternativas: "a) Regulus"
  }
]
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
