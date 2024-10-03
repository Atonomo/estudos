const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:" Oportunidade de estudo, situaçoesque permite as pessoas adquerir um novo conhecimento.Estudar em uma universidade publica é melhor do que uma privada?",
        alternativas: [
            {
                texto: "Sim, a univeraidades, publicas oferece mais oportunidades",
            },
            {
                texto: "Não, a Universidade privada muitas das vezes não oferecem muitos recursos",
            }
        ]
    },
    {
        enunciado: "Vale a pena envestir em curso na modalidade EAD(Educaçaõ a Distancia)",
        alternativas: [
            {
                texto: "Sim, oferece flexibiliade e a oportunidade de aprender no seu proprio ritimo",
            },
            {
                texto: "Não, falta de enteração pessoal pode dificultar a aprendizagem pratica",
            }
        ]
    },
    {
        enunciado: " também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Vale a pena fazer um curso de poś-graduação? Especialização certificante, MBA,executivo,mestrado,oudotorado",
        alternativas: [
            {
                texto: "Uma pos-graduaçaõ pode almentar as oportunidades de careira",
                afirmacao: "Sim "
            },
            {
                texto: "Em alguns campos a experiencia ptatica sem mais valorização",
                afirmacao: "Naõ"
            }
        ]
    },
    {
        enunciado: "O acesso a tecnologia melhora as oportunidades de estudo? ",
        alternativas: [
            {
                texto: "Sim a tecnologia facilita o acesso o EAD",
                afirmacao: "Sim"
            },
            {
                texto: "Nem todos tem acesso igual a tecnologia",
                afirmacao: "Não"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "Ter uma oportunidade de estudo é uma das experiencias mais valiosas que uma pessoa pode ter. Esse chão não apenas abre portas para o conhecimento e desenvolvimento proficional mas também enriquecea a vida pessoal promovendo o crecimento interlectual e emocional. O acesso a educação proporciona ferramentas exenciais para emfrentar desafios e tomar decisoẽs informadasno futuro."

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();