import fotoTemplate from "../assets/images/fotoTemplate.png"



export const portifolioData =
{

    mainInfo:
    {
        name: " Seu nome aqui ",
        subtitle: " subtítulo (Pequena descrição sua)",
        mainPhoto: fotoTemplate,
        footer: "notas de rodapé (opcional, pode ser uma frase motivacional, versículo...)"
    },

    about:
    {
        title: "Sobre mim...",
        mainPhoto: fotoTemplate,
        text: `Texto sobre você... Ex: 
                        Sou Raquel Laís, atleta de Jiu-Jitsu apaixonada pelo esporte,
                        pela disciplina e por tudo aquilo que o universo das artes
                        marciais representa. Minha trajetória começou através da vontade
                        de superar limites, desenvolver confiança e encontrar no esporte
                        uma forma de crescimento pessoal e profissional.
                        
                        Desde então, o Jiu-Jitsu passou a fazer parte da minha vida de
                        maneira intensa, moldando não apenas a atleta que sou hoje, mas
                        também a pessoa que venho me tornando diariamente. Ao longo da
                        minha caminhada, participei de campeonatos, desafios e
                        experiências que contribuíram para minha evolução dentro e fora
                        dos tatames.
                        
                        Mais do que medalhas e títulos, acredito que o esporte ensina
                        valores fundamentais como respeito, humildade, foco, disciplina
                        e resiliência, princípios que levo comigo em todas as áreas da
                        minha vida.`
    },

    contact: {

        contactTitle: "Fale comigo! Estou disponivel...",
        socialMedia: [
            {
                label: "Instagram",
                link: "https://www.instagram.com/quelbjj/",
                shortMsg: "seu instagram"
            },
            {
                label: "Whatsapp",
                link: " ",
                
            },
            {
                label: "E-mail",
                link: " "
            },
        ]
    }
}
