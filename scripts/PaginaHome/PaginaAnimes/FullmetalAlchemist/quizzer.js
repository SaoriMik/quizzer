// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: "Quem são os irmãos protagonistas de Fullmetal Alchemist?",
    alternativas: ["a) Edward e Alphonse Elric", "b) Roy e Riza Mustang", "c) Winry e Ling Yao", "d) Scar e Olivier Armstrong"],
    resposta: "a) Edward e Alphonse Elric"
  },
  {
    pergunta: "Qual é o título que os irmãos Elric buscam para restaurar seus corpos?",
    alternativas: ["a) Pedra Filosofal", "b) Elixir da Vida", "c) Poção da Imortalidade", "d) Cristal da Alquimia"],
    resposta: "a) Pedra Filosofal"
  },
  {
    pergunta: "Qual é a especialidade de Roy Mustang na alquimia?",
    alternativas: ["a) Alquimia de Transformação", "b) Alquimia de Cura", "c) Alquimia de Destruição", "d) Alquimia de Síntese"],
    resposta: "c) Alquimia de Destruição"
  },
  {
    pergunta: "Quem é o principal antagonista na história de Fullmetal Alchemist?",
    alternativas: ["a) Father", "b) Envy", "c) Gluttony", "d) Lust"],
    resposta: "a) Father"
  },
  {
    pergunta: "Qual é o nome do irmão mais velho Elric, que perde seu corpo no início da história?",
    alternativas: ["a) Alphonse", "b) Edward", "c) Hohenheim", "d) Van Hohenheim"],
    resposta: "b) Edward"
  },

  // Nível Médio
  {
    pergunta: "Qual é a habilidade especial de Scar?",
    alternativas: ["a) Alquimia de Fogo", "b) Alquimia de Transmutação Humana", "c) Alquimia de Cura", "d) Alquimia de Destruição"],
    resposta: "d) Alquimia de Destruição"
  },
  {
    pergunta: "O que Edward Elric sacrifica para trazer sua mãe de volta à vida?",
    alternativas: ["a) Seu braço direito", "b) Sua perna direita", "c) Seu olho direito", "d) Sua perna esquerda"],
    resposta: "b) Sua perna direita"
  },
  {
    pergunta: "Qual é o nome do país onde se passa a maior parte da história de Fullmetal Alchemist?",
    alternativas: ["a) Amestris", "b) Ishval", "c) Xing", "d) Drachma"],
    resposta: "a) Amestris"
  },
  {
    pergunta: "Quem é o alquimista de armadura que ajuda os irmãos Elric em sua jornada?",
    alternativas: ["a) Scar", "b) Ling Yao", "c) Izumi Curtis", "d) Alex Louis Armstrong"],
    resposta: "d) Alex Louis Armstrong"
  },
  {
    pergunta: "Qual é o nome do cachorro de Shou Tucker, que é usado em uma experiência trágica?",
    alternativas: ["a) Alexander", "b) Black Hayate", "c) Nina", "d) Scar"],
    resposta: "c) Nina"
  },

  // Nível Difícil
  {
    pergunta: "Qual é a habilidade única de Greed entre os Homúnculos?",
    alternativas: ["a) Regeneração Rápida", "b) Controle do Tempo", "c) Ling Yao", "d) Possessão de Corpos"],
    resposta: "d) Possessão de Corpos"
  },
  {
    pergunta: "Qual é a verdadeira identidade de Wrath?",
    alternativas: ["a) Selim Bradley", "b) Envy", "c) King Bradley", "d) Gluttony"],
    resposta: "c) King Bradley"
  },
  {
    pergunta: "O que é necessário para realizar a alquimia de transmutação humana?",
    alternativas: ["a) Pedra Filosofal", "b) Sangue de um Homúnculo", "c) Circunstâncias Trágicas", "d) Um selo de alquimia"],
    resposta: "c) Circunstâncias Trágicas"
  },
  {
    pergunta: "Quem é o alquimista de estado conhecido por sua maestria em alquimia de gelo?",
    alternativas: ["a) Roy Mustang", "b) Olivier Armstrong", "c) Isaac McDougal", "d) Solf J. Kimblee"],
    resposta: "b) Olivier Armstrong"
  },
  {
    pergunta: "Qual é o nome do grupo de resistência Ishvalano apresentado na história?",
    alternativas: ["a) Ouroboros", "b) Exército de Briggs", "c) Xingese Clans", "d) Guerrilha de Ishval"],
    resposta: "d) Guerrilha de Ishval"
  }
];
// Fim das perguntas


    var Indice = -1;
    var A, B, C, D;

    function GerarIndice() {
        let NovoIndice = Math.floor(Math.random() * 15);
        Validador(NovoIndice);
    }

    function Validador(NovoIndice) {
        if(Indice === NovoIndice){
            GerarIndice();
        }else{
            Indice = NovoIndice;
            InserirQuestao()
        }
    }

    function InserirQuestao() {
        let Tamanho = perguntas.length;

        document.getElementById("pergunta").textContent = perguntas[Indice].pergunta;

        document.getElementById("a").textContent = perguntas[Indice].alternativas[0];
        document.getElementById("b").textContent = perguntas[Indice].alternativas[1];
        document.getElementById("c").textContent = perguntas[Indice].alternativas[2];
        document.getElementById("d").textContent = perguntas[Indice].alternativas[3];
        console.log(Indice)
    }

    window.addEventListener('load',GerarIndice)

      

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
        if (perguntas && Indice !== undefined && resposta === perguntas[Indice].resposta) {
          alert("CERTA A RESPOSTA");
          GerarIndice()
        }
        else{
          alert("ERROU")
        }
      }

