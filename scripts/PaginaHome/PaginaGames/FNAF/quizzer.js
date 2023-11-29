// Início das perguntas
var perguntas = [
  // Nível Fácil
  {
    pergunta: "Quem é o protagonista jogável em 'Five Nights at Freddy's'?",
    alternativas: ["a) Mike Schmidt", "b) Jeremy Fitzgerald", "c) Scott Cawthon", "d) Phone Guy"],
    resposta: "a) Mike Schmidt"
  },
  {
    pergunta: "Qual é o nome do restaurante onde se passa a maior parte do jogo?",
    alternativas: ["a) Freddy's Pizzeria", "b) Bonnie's Burgers", "c) Chica's Chicken Coop", "d) Freddy Fazbear's Pizza"],
    resposta: "d) Freddy Fazbear's Pizza"
  },
  {
    pergunta: "Qual é o nome do animatrônico que geralmente é o primeiro a se tornar ativo durante a noite?",
    alternativas: ["a) Freddy Fazbear", "b) Bonnie the Bunny", "c) Chica the Chicken", "d) Foxy the Pirate Fox"],
    resposta: "b) Bonnie the Bunny"
  },
  {
    pergunta: "Qual é o objetivo principal do jogador em 'Five Nights at Freddy's'?",
    alternativas: ["a) Reparar os animatrônicos", "b) Sobreviver até o amanhecer", "c) Encontrar itens escondidos", "d) Ganhar pontos de experiência"],
    resposta: "b) Sobreviver até o amanhecer"
  },
  {
    pergunta: "Qual é o animatrônico que se esconde no escuro e se move quando as luzes estão apagadas?",
    alternativas: ["a) Freddy Fazbear", "b) Bonnie the Bunny", "c) Chica the Chicken", "d) Foxy the Pirate Fox"],
    resposta: "d) Foxy the Pirate Fox"
  },

  // Nível Médio
  {
    pergunta: "O que acontece se o jogador não verificar as câmeras com frequência suficiente?",
    alternativas: ["a) Os animatrônicos se tornam mais rápidos", "b) O jogador é demitido", "c) Jumpscare pelos animatrônicos", "d) O restaurante fecha permanentemente"],
    resposta: "c) Jumpscare pelos animatrônicos"
  },
  {
    pergunta: "Qual é o nome do animatrônico que se disfarça como um endosqueleto?",
    alternativas: ["a) Golden Freddy", "b) Springtrap", "c) Mangle", "d) Puppet"],
    resposta: "a) Golden Freddy"
  },
  {
    pergunta: "O que acontece se o jogador ouvir risadas distantes durante a jogabilidade?",
    alternativas: ["a) Os animatrônicos ficam inativos", "b) Um novo animatrônico é ativado", "c) O jogador ganha uma vida extra", "d) Jumpscare iminente de Foxy"],
    resposta: "d) Jumpscare iminente de Foxy"
  },
  {
    pergunta: "Qual é o nome do criador de 'Five Nights at Freddy's'?",
    alternativas: ["a) Markiplier", "b) PewDiePie", "c) Scott Cawthon", "d) Toby Fox"],
    resposta: "c) Scott Cawthon"
  },
  {
    pergunta: "Qual é o animatrônico que é conhecido por desmontar e reconfigurar a si mesmo?",
    alternativas: ["a) Golden Freddy", "b) Springtrap", "c) Mangle", "d) Puppet"],
    resposta: "c) Mangle"
  },

  // Nível Difícil
  {
    pergunta: "O que acontece na última noite ('Night 7') em 'Five Nights at Freddy's 1'?",
    alternativas: ["a) O restaurante é fechado", "b) O jogador enfrenta o animatrônico mais poderoso", "c) O jogador é promovido", "d) Uma revelação sobre a história do jogo"],
    resposta: "d) Uma revelação sobre a história do jogo"
  },
  {
    pergunta: "Qual é o nome do animatrônico que se torna o principal antagonista em 'Five Nights at Freddy's 3'?",
    alternativas: ["a) Golden Freddy", "b) Springtrap", "c) Mangle", "d) Puppet"],
    resposta: "b) Springtrap"
  },
  {
    pergunta: "Quantos animatrônicos diferentes estão presentes em 'Five Nights at Freddy's 2'?",
    alternativas: ["a) 6", "b) 8", "c) 10", "d) 12"],
    resposta: "c) 10"
  },
  {
    pergunta: "Qual é o nome do restaurante apresentado em 'Five Nights at Freddy's: Sister Location'?",
    alternativas: ["a) Freddy's Circus", "b) Freddy's Funland", "c) Circus Baby's Pizza World", "d) Foxy's Playhouse"],
    resposta: "c) Circus Baby's Pizza World"
  },
  {
    pergunta: "O que acontece quando o jogador encontra o animatrônico Puppet em 'Five Nights at Freddy's 2'?",
    alternativas: ["a) Jumpscare imediato", "b) O jogador ganha o jogo", "c) O animatrônico concede uma dica", "d) O tempo é estendido"],
    resposta: "a) Jumpscare imediato"
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

