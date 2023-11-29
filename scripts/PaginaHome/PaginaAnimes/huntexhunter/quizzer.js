var perguntas = [
    {
        pergunta: "Quem é o protagonista principal de Hunter x Hunter?",
        alternativas: ["a) Hisoka", "b) Kurapika", "c) Gon", "d) Leorio"],
        resposta: "c) Gon"
      },
      {
        pergunta: "Qual é o nome da técnica especial de Gon que ele usa em momentos críticos?",
        alternativas: ["a) Jajanken", "b) Zetsu", "c) Ren", "d) Gyo"],
        resposta: "a) Jajanken"
      },
      {
        pergunta: "Qual é a forma final da Exame de Hunter?",
        alternativas: ["a) Fase única", "b) Torneio", "c) Prova escrita", "d) Desafio de caça"],
        resposta: "b) Torneio"
      },
      {
        pergunta: "Qual é o objetivo final de Gon na história?",
        alternativas: ["a) Encontrar seu pai", "b) Se tornar o rei dos Hunters", "c) Capturar Hisoka", "d) Ganhar dinheiro"],
        resposta: "a) Encontrar seu pai"
      },
      {
        pergunta: "Qual é a principal ambição de Killua Zoldyck?",
        alternativas: ["a) Se tornar o presidente da Associação Hunter", "b) Se tornar o Hunter mais poderoso", "c) Escapar da família assassina", "d) Encontrar seu irmão mais velho, Illumi"],
        resposta: "c) Escapar da família assassina"
      },
    
      // Nível Médio
      {
        pergunta: "Qual é o nome da técnica de Nen especializada de Kurapika para combater os membros da Troupe Phantom?",
        alternativas: ["a) Jajanken", "b) Chain Jail", "c) Bankruptcy Chain", "d) Big Bang Impact"],
        resposta: "b) Chain Jail"
      },
      {
        pergunta: "Qual é o nome da ilha onde os participantes do Exame de Hunter enfrentam os desafios da fase final?",
        alternativas: ["a) Zevil Island", "b) Whale Island", "c) Kukuroo Mountain", "d) Trick Tower Island"],
        resposta: "c) Kukuroo Mountain"
      },
      {
        pergunta: "Qual é o animal de estimação de Killua que o acompanha durante a maior parte da série?",
        alternativas: ["a) Kiriko", "b) Alluka", "c) Nanika", "d) Mike"],
        resposta: "a) Kiriko"
      },
      {
        pergunta: "Qual é a habilidade única de Hisoka relacionada ao Nen?",
        alternativas: ["a) Texture Surprise", "b) Bungee Gum", "c) Shu", "d) En"],
        resposta: "b) Bungee Gum"
      },
      {
        pergunta: "O que acontece com o braço esquerdo de Gon durante a Chimera Ant arc?",
        alternativas: ["a) É cortado por Killua", "b) É infectado pelo poder de Pitou", "c) É amputado por um membro da Troupe Phantom", "d) É destruído em uma luta contra um Chimera Ant"],
        resposta: "b) É infectado pelo poder de Pitou"
      },
    
      // Nível Difícil
      {
        pergunta: "Qual é o nome do pai de Gon e um dos melhores Hunters do mundo?",
        alternativas: ["a) Ging Freecss", "b) Silva Zoldyck", "c) Netero", "d) Pariston Hill"],
        resposta: "a) Ging Freecss"
      },
      {
        pergunta: "Qual é o objetivo final da Troupe Phantom (Genei Ryodan) em Hunter x Hunter?",
        alternativas: ["a) Encontrar e derrotar Ging Freecss", "b) Obter poderes Nen supremos", "c) Dominar o mundo", "d) Vingar a morte de Uvogin"],
        resposta: "c) Dominar o mundo"
      },
      {
        pergunta: "Qual é o nome do país onde ocorre a maior parte da Chimera Ant arc?",
        alternativas: ["a) Yorknew", "b) Greed Island", "c) NGL (Neo-Green Life)", "d) Kakin"],
        resposta: "c) NGL (Neo-Green Life)"
      },
      {
        pergunta: "Qual é a condição que Kurapika impõe para a Troupe Phantom antes de lutar contra eles?",
        alternativas: ["a) Nunca mais usem Nen", "b) Entreguem suas insígnias de Hunter", "c) Deixem de cometer crimes", "d) Retirem suas tatuagens"],
        resposta: "a) Nunca mais usem Nen"
      },
      {
        pergunta: "Quem é o líder da Associação Hunter durante a maior parte da série?",
        alternativas: ["a) Netero", "b) Pariston Hill", "c) Cheadle Yorkshire", "d) Isaac Netero Jr."],
        resposta: "a) Netero"
      }
    ];

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

