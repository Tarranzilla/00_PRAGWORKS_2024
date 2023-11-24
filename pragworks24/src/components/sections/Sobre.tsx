// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

// React Responsive Imports
import { useMediaQuery } from "react-responsive";

//React Redux Imports
import { useDispatch } from "react-redux";
import { setActiveSection } from "../../context/main-context.tsx";

const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
    bounce: 0.5,
    velocity: 50,
};

import fotoEquipe from "../../assets/sobre/equipe/Equipe_HR.png";

import fotoOlivier from "../../assets/sobre/equipe/olivier.png";
import fotoFranklin from "../../assets/sobre/equipe/franklin_link.png";
import fotoGustavo from "../../assets/sobre/equipe/gustavo_da_paz.png";
import fotoGustavo2 from "../../assets/sobre/equipe/gustavo_raposo.png";
import fotoHelen from "../../assets/sobre/equipe/helen_almeida.png";
import fotoIeda from "../../assets/sobre/equipe/ieda_ikuta.png";
import fotoJean from "../../assets/sobre/equipe/jean_soares.png";
import fotoKarla from "../../assets/sobre/equipe/karla_gomes.png";
import fotoLarissa from "../../assets/sobre/equipe/larissa_felix.png";
import fotoLeticia from "../../assets/sobre/equipe/leticia_rodrigues.png";
import fotoLucas from "../../assets/sobre/equipe/lucas_costa.png";
import fotoMarcos from "../../assets/sobre/equipe/marcos_graebin.png";
import fotoMaria from "../../assets/sobre/equipe/maria_oliveira.png";
import fotoOtoniel from "../../assets/sobre/equipe/otoniel_da_rocha.png";
import fotoRenan from "../../assets/sobre/equipe/renan_felipe.png";
import fotoRodrigo from "../../assets/sobre/equipe/rodrigo_zan.png";
import fotoRonald from "../../assets/sobre/equipe/ronald_landaeta.png";
import fotoSamuel from "../../assets/sobre/equipe/samuel_pizzato.png";
import fotoVitor from "../../assets/sobre/equipe/vitor_hirozawa.png";

const membrosDaEquipe = [
    {
        nome: "Olivier Smadja",
        cargo: "CEO",
        foto: fotoOlivier,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Olivier é formado em engenharia da produção pela Universidade de Paris e possui especializações em programação e robótica pela USP.",
    },
    {
        nome: "Ieda Ikuta",
        cargo: "Técnica em Eletrônica",
        foto: fotoIeda,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Ieda é formada Eletrônica pela PUC.",
    },
    {
        nome: "Jean Soares",
        cargo: "Analista e Marketing Digital",
        foto: fotoJean,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Jean é formado em Marketing pela PUC.",
    },
    {
        nome: "Karla Gomes",
        cargo: "Especialista em Tecnologia para Varejo",
        foto: fotoKarla,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Karla é formada em Marketing pela PUC.",
    },
    {
        nome: "Larissa Felix",
        cargo: "Diretora de Marketing e Comunicação",
        foto: fotoLarissa,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Larissa é formada em Marketing pela PUC.",
    },
    {
        nome: "Leticia Rodrigues",
        cargo: "Estagiária de Garantia de Qualidade de Software",
        foto: fotoLeticia,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Leticia é formada em Computação pela PUC.",
    },
    {
        nome: "Lucas Costa",
        cargo: "Desenvolvedor de Software",
        foto: fotoLucas,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Lucas é formado em Computação pela PUC.",
    },
    {
        nome: "Marcos Graebin",
        cargo: "Desenvolvedor de Hardware",
        foto: fotoMarcos,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Marcos é formado em Engenharia Eletronica pela PUC.",
    },
    {
        nome: "Maria Oliveira",
        cargo: "Marketing",
        foto: fotoMaria,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Maria é formada em Marketing pela PUC.",
    },
    {
        nome: "Otoniel da Rocha",
        cargo: "Diretor de Engenharia de Hardware e Operações",
        foto: fotoOtoniel,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Otoniel é formado em Engenharia Eletronica pela PUC.",
    },
    {
        nome: "Franklin Link",
        cargo: "Técnico em Mecatrônica",
        foto: fotoFranklin,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Franklin é formado em engenharia da produção pela Universidade de Paris e possui especializações em programação e robótica pela USP.",
    },
    {
        nome: "Gustavo da Paz",
        cargo: "Design 3D e Gestão de Projetos",
        foto: fotoGustavo,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Gustavo é formado em Design pela PUC e possui especializações em modelagem 3D USP.",
    },
    {
        nome: "Gustavo Raposo",
        cargo: "Desenvolvedor Mobile",
        foto: fotoGustavo2,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Gustavo é formado em Desenvolvimento de Sofware pela PUC.",
    },
    {
        nome: "Helen Almeida",
        cargo: "Assistente Administrativa",
        foto: fotoHelen,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Helen é formada em Administração pela PUC.",
    },
    {
        nome: "Renan Felipe",
        cargo: "Desenvolvedor de Software",
        foto: fotoRenan,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Renan é formado em Computação pela PUC.",
    },
    {
        nome: "Rodrigo Zan",
        cargo: "UX, UI e Designer de Produto",
        foto: fotoRodrigo,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Rodrigo é formado em Design pela PUC.",
    },
    {
        nome: "Ronald Landaeta",
        cargo: "Técnico Eletrônico",
        foto: fotoRonald,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Ronald é formado em Engenharia Eletronica pela PUC.",
    },
    {
        nome: "Samuel Pizzato",
        cargo: "Desenvolvedor de Software em Visão Computacional",
        foto: fotoSamuel,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Samuel é formado em Computação pela PUC.",
    },
    {
        nome: "Vitor Hirozawa",
        cargo: "Desenvolvedor IoT",
        foto: fotoVitor,
        linkedin: "https://www.linkedin.com/",
        telephone: "999-999-999",
        email: "test@test.com",
        bio: "Vitor é formado em Computação pela PUC.",
    },
];

import fotoFundacao1 from "../../assets/sobre/fotos_extras/FundaçãoPrototipo.png";

import fotoAlexandria from "../../assets/sobre/alexandria.webp";
import fotoAlexandria2 from "../../assets/sobre/alexandria_02.jpg";
import fotoDaVinci from "../../assets/sobre/davinci.jpg";
import fotoRUR from "../../assets/sobre/rur.jpg";

import fotoGIRINO from "../../assets/sobre/GIRINO.png";
import fotoCHICO from "../../assets/sobre/ROBOCHICO.png";

const blogPosts = [
    {
        id: 1,
        title: "Eventos Que Participamos - Setembro e Outubro",
        date: "21 de Novembro - 2023",
        author: "Human Robotics",
        mainImg: fotoRUR,
        detailImgs: [fotoRUR, fotoRUR, fotoRUR],
        description: [
            "Nos meses de Setembro e Outubro, pudemos participar de eventos importantes de diversos segmentos. Foram meses de intensos aprendizados e networking, e gostaríamos de compartilhar um pouco desses momentos com vocês!",
            "ISC - Nos dias 19, 20 e 21 de Setembro, participamos do ISC ao lado da Intel, uma empresa altamente comprometida com a segurança, no Expo Center Norte São Paulo.",
            "Durante o evento, que abrange diversas soluções para a indústria, demonstramos como o Robios Go pode ser usado como ferramenta de proteção e monitoramento nas empresas.",
            "Latam Retail - Em paralelo ao ISC, aconteceu no mesmo local e período o Latam Retail Show, do qual participamos ao lado da Oracle.",
            "Nele, pudemos aprofundar a aplicação do Robios Go no varejo, tanto como uma ferramenta inovadora para o atendimento ao público e para a publicidade, quanto para o trade marketing, demonstrando que sua aplicação pode ser uma poderosa aliada dos varejistas.",
            "Fleet Conference Day Sul - No dia 20 de Setembro nosso CEO ministrou uma palestra sobre o aumento da produtividade nas empresas com o uso de robôs, durante o Fleet Conference Day Sul, um evento promovido pela Link Monitoramento e pela Academia de Telemetria.",
            "O evento aconteceu na Hotmilk, e é referência no setor de gestão de frotas para rastreamento no sul do Brasil.",
            "INDEX23 - Entre os dias 27 e 29 de Setembro, o Robios esteve presente no INDEX23, ao lado da nossa representante Somai e da New Dental Care.",
            "Durante o evento, que é voltado à transformação digital na odontologia, o robô distribuiu brindes e auxiliou na abordagem aos visitantes, que se tornam muito mais receptivos a conversar sobre os produtos e sobre a empresa, e promove resultados positivos em conjunto com a vendedora.",
            "LogTech Day - No dia 09 de Outubro tivemos a oportunidade de apresentar um pitch especial para o LogTech Day.",
            "No encontro, marcado pela participação de diversas startups e de líderes do ramo da logística, apresentamos o novo Robios Cargo, nosso robô para transporte de cargas leves projetado para a intralogística.",
            "TotvS - Fomos convidados também a participar de um evento especial sobre manufatura e logística, organizado pela Totvs, empresa referência em desenvolvimento de softwares. O objetivo era demonstrar, de forma física e palpável, todo o potencial tecnológico da Totvs e seus parceiros.",
            "Agradecemos pela incrível parceria e pela oportunidade de conhecer ainda mais o setor da logística, no qual estamos buscando nos aproximar e aprofundar nossas soluções. Se você quer descobrir como a Human Robotics pode atuar nessa vertical, clique aqui para conhecer o novo Robios Cargo!",
        ],
        likes: 0,
        comments: [],
    },
    {
        id: 2,
        title: "Uma Forma Revolucionária de Interagir Com Seus Clientes",
        date: "20 de Novembro - 2023",
        author: "Human Robotics",
        mainImg: fotoRUR,
        detailImgs: [fotoRUR, fotoRUR, fotoRUR],
        description: [
            "Sabemos que nos dias de hoje, já não podemos mais operar qualquer software sem integração.",
            "Pensando nisso, a Human Robotics está revolucionando o ecossistema de soluções digitais de interação com o público, com uma quarta geração de dispositivos que adiciona uma nova dimensão ao atendimento. ",
            "O Robios, robô social e autônomo produzido aqui no Brasil, está presente principalmente no varejo e na indústria, e é uma excelente ferramenta para atendimento, trade marketing, coleta de dados, bem como para o transporte de cargas leves, representando uma excelente oportunidade para os desenvolvedores de aplicações que atendem a essas verticais.",
            "Dentre as integrações já realizadas pela Human Robotics, destacam-se a Oracle e aplicações de uso geral que impactam diretamente a experiência do usuário, como o WhatsApp e o ChatGPT. Com essa parceria, os integradores contam com suporte especializado para realizar as integrações de seus softwares com o robô, ou podem fazê-lo de forma interna, oferecendo aos clientes uma opção ainda mais inovadora em seu portfólio de produtos.",
            "Hoje estamos vivendo a era Mobile First, e você pode já estar preparado para o futuro da geração Robots First!",
            "Se você tem interesse em se tornar parceiro da Human Robotics e oferecer novas possibilidades aos seus clientes, clique aqui para entrar em contato e saber mais informações!",
        ],
        comments: [],
    },
    {
        id: 3,
        title: "Automação de Processos Robóticos (RPA) Como Tendência na América Latina em 2023",
        date: "26 de Setembro - 2023",
        author: "Human Robotics",
        mainImg: fotoDaVinci,
        detailImgs: [fotoDaVinci, fotoDaVinci, fotoDaVinci],
        description: [
            "O uso de novas tecnologias nas empresas é uma forte tendência em 2023: uma pesquisa feita pela BotCity e EY mapeou mais de 200 empresas de diferentes setores na América Latina, e demonstrou que cerca de 66% delas têm planos de investir ainda mais em automação, especialmente nas indústrias, varejo e e-commerce.",
            "O estudo investigou a aplicação e impacto da Inteligência Artificial e de RPA (Robotic Process Automation), que ressaltou a importância de utilizar a inovação lado a lado com a mão de obra humana sem substituí-la, uma vez que 50% das participantes buscam liberar os colaboradores para a realização de atividades estratégicas e 26% visam o aumento da produtividade, assim como uma melhoria na experiência do consumidor. Dessa forma, as prioridades elencadas durante a pesquisa foram a melhoria da performance e escalabilidade, a criação de automações para mais áreas de negócio, e a melhoria da governança das automações. ",
            "Em contrapartida, foram identificadas algumas barreiras que impedem o avanço tecnológico nessas empresas, tendo destaque a maturidade técnica do time, a falta de tempo para dedicar aos projetos, e a falta de alinhamento e definição de responsabilidades entre áreas. No entanto, hoje já existem opções acessíveis em termos de fácil configuração, usabilidade e baixo investimento de tempo.",
            "No último mês, compartilhamos uma notícia da BBC sobre a importância da América Latina e do Brasil no desenvolvimento de Deep Techs, e a Human Robotics tem caminhado para o crescimento e valorização das tecnologias nacionais. Nosso foco especial na indústria e no varejo, duas das verticais com maior investimento e maturidade em inovação, permitem que possamos solucionar as dores desses segmentos por meio da automação robótica de atividades.",
            "O RobiOS Go e o RobiOS CarGO buscam suprir justamente a necessidade de permitir que os funcionários executem tarefas essencialmente humanas, enquanto aumentam a produtividade e aprimoram a experiência do cliente. Apesar disso, toda sua configuração de deslocamento pode ser feita em apenas um dia, enquanto as definições de interações são feitas por meio de uma plataforma intuitiva, que pode ser executada por qualquer pessoa, independentemente de sua formação ou conhecimento em programação.",
            "Se você deseja conhecer mais sobre a Human Robotics e descobrir como nossos robôs podem ajudar a transformar sua empresa, fale com nossos especialistas agora mesmo clicando aqui!",
        ],
        likes: 0,
        comments: [],
    },
    {
        id: 4,
        title: "Esses 5 Mitos Podem Atrasar o Crescimento da Sua Empresa",
        date: "25 de Setembro - 2023",
        mainImg: fotoDaVinci,
        detailImgs: [fotoDaVinci, fotoDaVinci, fotoDaVinci],
        description: [
            "O surgimento de novidades é sempre cercado de dúvidas e boatos -e com os robôs isso é ainda mais comum. A resistência sobre seu uso no ambiente corporativo pode atrasar o desenvolvimento tecnológico nas empresas, e o primeiro passo é desmistificar alguns tópicos comuns, vamos lá?",
            "1- Os robôs vão substituir os humanos: o receio mais comum costuma ser o medo da substituição. No entanto, os robôs são aliados no dia-a-dia dos colaboradores, auxiliando e completando suas tarefas, e não substituindo sua mão de obra. Automatizando funções mais repetitivas ou pesadas, os funcionários garantem uma melhor qualidade de vida, e ficam livres para executar atividades mais direcionadas.",
            "2- Robôs são caros: com o planejamento correto, é possível adquirir soluções personalizadas que cabem no orçamento da empresa. Além disso, os robôs possuem diversos benefícios que compensam seu valor, e pode garantir até mesmo um retorno financeiro. Um investimento útil e incrível!",
            "3- Robôs são de difícil uso e implementação: aqui na Human Robotics você pode ter acesso a treinamentos completos para que toda sua equipe possa operar o robô de maneira fácil e intuitiva. Além disso, você conta com suporte técnico para fazer a implementação e configurações iniciais!",
            "4- O uso de robôs é apenas moda: a integração de tecnologias nas atividades das empresas, na verdade, tem crescido cada vez mais. Como os robôs possuem alto potencial de contribuir para o resultado das empresas, a tendência é que sejam cada vez mais visados nos mais diversos setores.",
            "5- O atendimento feito por robôs não pode ser personalizado: na verdade os robôs sociais são formas divertidas de tornar as interações mais leves, rápidas e diferenciadas. Elas são totalmente personalizáveis para garantir que o atendimento seja humanizado e coerente com as necessidades do seu cliente.",
            "Entendemos que, pelo fato de serem recursos relativamente novos, o uso de robôs pode gerar muitas dúvidas que impedem as empresas de buscarem essas soluções. Porém, garantimos que a automatização de processos pode levar maior produtividade e bem-estar à sua equipe e aos seus clientes, bem como colocar seu negócio em destaque frente aos seus concorrentes.",
            "Se você quer descobrir mais sobre esse fantástico universo da inovação, siga nossas redes sociais e entre em contato para conhecer melhor nossas opções personalizadas para você!",
        ],
        likes: 0,
        comments: [],
    },
    {
        id: 5,
        title: "Transformando o Paraná com Tecnologia: O Papel do Robô Marvin na Celepar",
        date: "22 de Setembro - 2024",
        author: "Maria Eduarda Oliveira",
        mainimg: fotoRUR,
        detailImgs: [fotoRUR, fotoRUR, fotoRUR],
        description: [
            "A Celepar, Companhia de Tecnologia da Informação e Comunicação do Paraná, desempenha um papel fundamental na vida dos cidadãos paranaenses, por meio da promoção do desenvolvimento tecnológico. Com o objetivo de implementar soluções tecnológicas para melhorar a eficiência e a qualidade dos serviços públicos, além de apoiar a modernização da gestão pública, a empresa é responsável pelo desenvolvimento de sistemas, gestão de data centers e realização de serviços relacionados à infraestrutura de TI.",
            "Um dos exemplos mais notáveis é o PIÁ, programa Paraná Inteligência Artificial, que reúne cerca de 720 serviços prestados pelo governo estadual em um único canal, que opera com diálogo com inteligência artificial. Outras ações que influenciam positivamente no dia-a-dia dos paranaenses são os aplicativos Paraná Serviços, Paraná Solidário, Melhor Hora, Comida Boa, Telemedicina Paraná, Portal do Coronavírus, Fomento Fácil, e o GIT Mobi.",
            "Com todos esses projetos, não restam dúvidas de que a organização é totalmente centrada na inovação. Com isso, em 2022, nasceu o Marvin: o robô social e autônomo, criado pela Human Robotics, para atuar diariamente ao lado da Celepar.",
            "O Marvin, além de representar uma “personificação” da identidade tecnológica e inovadora da empresa, é também um importante personagem no envolvimento com o público, demonstrando os serviços oferecidos pela organização, e cativando participantes de eventos que eles participam. Uma prova disso é o depoimento do Leonardo, que conta que os visitantes conhecem o robô, e ao vê-lo novamente o apresentam a outras pessoas, destacando sua personalidade divertida.",
            "Essa parceria é a melhor ilustração do nosso propósito. A Human Robotics nasceu do desejo de levar a tecnologia para o dia-a-dia das pessoas de forma divertida e humanizada, demonstrando que humanos e robôs podem atuar lado a lado, de forma complementar, em diversas atividades.",
            "Gostaria de conhecer mais sobre nossos robôs autônomos e interativos? Agende uma demonstração e veja como podemos transformar o futuro de sua empresa. Entre em contato conosco para agendar um horário conveniente para você. Para agendar clique aqui.",
        ],
        likes: 0,
        comments: [],
    },
    {
        id: 6,
        title: "Apresentação do 50º RobiOS",
        date: "12 de Setembro - 2023",
        author: "Human Robotics",
        mainImg: fotoRUR,
        detailImgs: [fotoRUR, fotoRUR, fotoRUR],
        description: [
            "No dia 15 de Agosto, alcançamos um novo marco em nossa história. Comemoramos a apresentação do RobiOS 50, em um evento interno para relembrar a trajetória e conquistas da Human Robotics até aqui.",
            "Idealizado inicialmente para auxiliar o cuidado com idosos, o RobiOS hoje está presente também no varejo, indústria e em eventos, desempenhando papéis que vão desde a recepção e atendimento ao cliente até o transporte de cargas leves, com o novo RobiOS CarGO.",
            "Durante a jornada até a produção do 50º robô, pudemos perceber nossa capacidade em evoluir constantemente, tanto em termos técnicos quanto como equipe. Vimos melhorias surgirem a cada entrega, e crescemos em número e tamanho, o que nos permite continuar levando tecnologia e inovação para o dia a dia das empresas e da sociedade. Esse evento foi não apenas uma festividade, mas também um momento de olhar para trás e refletir sobre nossa evolução, e sobre os passos que esperamos trilhar para o futuro. Pudemos olhar para nossos primeiros robôs, para nossa história e para importantes marcos desde nossa fundação, fortalecendo ainda mais nossa missão de valorizar e propagar as tecnologias nacionais.",
            "A produção do 50º robô representa muito mais do que apenas uma conquista numérica, mas é a prova e um lembrete do nosso desenvolvimento e persistência. A realização dessa comemoração nos motiva a continuar progredindo em nossa caminhada, e nos faz perceber nossa capacidade de evoluir a cada nova produção. Conforme continuamos a avançar, reafirmamos todos os dias nosso compromisso com a inovação, e, a cada robô entregue, vemos uma nova perspectiva de evolução.",
            "Somos eternamente gratos a todos os que fizeram e fazem parte da nossa história, e continuaremos a buscar novas oportunidades de levar inovação a todos.",
            "Confira fotos do evento na galeria abaixo.",
            "Desde já, agradeço sua atenção e estou à disposição para esclarecer qualquer dúvida. Atenciosamente, Time de Marketing Human Robotics",
        ],
        likes: 0,
        comments: [],
    },
];

const demoMessageProduction = `Olá, eu gostaria de ser parceiro na área de Produção`;
const demoMessageDistribution = `Olá, eu gostaria de ser parceiro na área de Distribuição`;
const demoMessageAssistance = `Olá, eu gostaria de ser parceiro na área de Assistência Técnica`;
const demoMessageRecycle = `Olá, eu gostaria de ser parceiro na área de Reciclagem`;
const demoPhoneNumber = "+5541999977955"; // Replace with your desired WhatsApp number

const getInContact = (contactType) => {
    let demoMessage;

    switch (contactType) {
        case "production":
            demoMessage = demoMessageProduction;

            break;
        case "distribution":
            demoMessage = demoMessageDistribution;
            break;
        case "assistance":
            demoMessage = demoMessageAssistance;
            break;
        case "recycle":
            demoMessage = demoMessageRecycle;
            break;
        default:
            demoMessage = demoMessageProduction;
    }

    const whatsappUrl = `https://wa.me/${demoPhoneNumber}/?text=${encodeURIComponent(demoMessage)}`;
    window.open(whatsappUrl, "_blank");
};

const customTransition = springTransition;

const Section_Sobre = forwardRef(function Section_Sobre(props, ref: any) {
    const isMobile = useMediaQuery({
        query: "(max-width: 700px)",
    });
    const dispatch = useDispatch();
    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    const [activeAbout, setActiveAbout] = useState(1);
    const setActiveAboutClass = (id: number) => {
        setActiveAbout(id);
    };

    const [activeBlogPost, setActiveBlogPost] = useState(null as any);

    const setActiveBlogPostFunction = (id: number) => {
        blogPosts.map((card: any) => {
            if (card.id === id) {
                setActiveBlogPost(card);
                console.log(card);
            }
        });
    };
    const closeDetailCard = () => {
        setActiveBlogPost(null);
    };

    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onViewportEnter={() => {
                console.log("Sobre está visível!");
                setActiveSectionFunction(4);
            }}
            transition={{ duration: 1.0, type: "tween" }}
            className="LP_Section"
            id="sobre"
            key={"sobre_key"}
        >
            <AnimatePresence mode="popLayout">
                {activeBlogPost && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Post_Detail_Container">
                        <m.div drag dragSnapToOrigin className="Post_Detail">
                            <button className="Close_Btn hoverable" onClick={closeDetailCard}>
                                <i className="material-icons">close</i>
                            </button>
                            <div className="Post_Detail_Text">
                                <h2 className="Post_Detail_Title">{activeBlogPost.title}</h2>
                                <h3 className="Post_Detail_Author">{activeBlogPost.author}</h3>
                                <h4 className="Post_Detail_Date">{activeBlogPost.date}</h4>
                                {activeBlogPost.description.map((paragraph: any) => {
                                    return <p className="Post_Detail_Description">{paragraph}</p>;
                                })}
                            </div>
                            <div className="Post_Detail_Image_Block hoverable">
                                <img src={activeBlogPost.img} alt={activeBlogPost.title} />
                            </div>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>
            <h1 className="LP_Section_Title">Sobre</h1>
            <m.div className="Abouts_Container">
                <AnimatePresence mode="popLayout">
                    {/* Sobre a Human Robotics */}
                    {activeAbout === 1 && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="About_Card"
                            key="AC_01"
                        >
                            <div className="About_Card_Content">
                                <div className="About_Card_Text_Container" id="Missao_Card_Content">
                                    <div className="About_Card_Text_Wrapper">
                                        <div className="About_Card_Header">
                                            <h3 className="Card_Header_Subtitle">Sobre</h3>
                                            <h2 className="Card_Header_Title">A Human Robotics</h2>
                                        </div>
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                Somos a vanguarda da robótica e da inteligência artificial no Brasil, criando soluções inovadoras e
                                                personalizadas para atender às necessidades de nossos clientes em setores como Varejo, Indústria e
                                                Cultura.
                                            </strong>
                                        </p>

                                        {/* Mobile Image Container */}
                                        {isMobile && (
                                            <div className="About_Card_Image_Container">
                                                <div className="About_Card_Img_Block">
                                                    <img className="About_Card_Img" src={fotoEquipe}></img>
                                                </div>
                                            </div>
                                        )}

                                        <p className="Sobre_Description_Text">
                                            Inspirados pela Subjetividade que a nossa Cultura tem a oferecer e na Precisão que nossas Tecnologias
                                            desbloqueiam, confecionamos assistentes virtuais e robôs que se destacam pela sua capacidade de interagir
                                            com as pessoas.
                                        </p>

                                        <p className="Sobre_Description_Text">
                                            <strong>
                                                Temos uma visão clara e ambiciosa para o futuro. Nossa meta é liderar a transformação tecnológica no
                                                Brasil.
                                            </strong>
                                        </p>

                                        <p className="Sobre_Description_Text">
                                            Nossa missão é tornar a robótica mais humana, mais acessível e mais presente na vida das pessoas.
                                        </p>

                                        <p className="Sobre_Header_Text">
                                            <strong>Junte-se a nós nesta jornada por uma transformação tecnológica mais humana!</strong>
                                        </p>
                                    </div>
                                </div>

                                {/* Desktop Image Container */}
                                {!isMobile && (
                                    <div className="About_Card_Image_Container">
                                        <div className="About_Card_Img_Block">
                                            <img className="About_Card_Img" src={fotoEquipe}></img>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </m.div>
                    )}

                    {/* Sobre a Nossa Equipe */}
                    {activeAbout === 2 && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="About_Card"
                            key="AC_02"
                        >
                            <div className="About_Card_Content" id="Equipe_Card_Content">
                                <div className="About_Card_Text_Container" id="Equipe_Text_Container">
                                    <div className="About_Card_Text_Wrapper">
                                        <div className="About_Card_Header">
                                            <h3 className="Card_Header_Subtitle">Sobre</h3>
                                            <h2 className="Card_Header_Title">Nossa Equipe</h2>
                                        </div>
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                Nossa Equipe é Multidisciplinar e conta com profissionais de diversas áreas, como Engenharia, Design,
                                                Administração e Marketing.
                                            </strong>
                                        </p>

                                        {/* Mobile Image Container */}
                                        {isMobile && (
                                            <div className="Sobre_Member_Container">
                                                {membrosDaEquipe.map((membro: any) => {
                                                    return (
                                                        <div className="Sobre_Member_Card" key={membro.nome}>
                                                            <div className="Sobre_Member_Interactions">
                                                                <a
                                                                    className="Sobre_Interaction_Icon hoverable undecorated"
                                                                    href={membro.linkedin}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                >
                                                                    <span className="material-icons">share</span>
                                                                </a>
                                                                <a
                                                                    className="Sobre_Interaction_Icon hoverable undecorated"
                                                                    href={"mailto:" + membro.email}
                                                                    rel="noreferrer"
                                                                >
                                                                    <span className="material-icons">mail</span>
                                                                </a>
                                                            </div>
                                                            <div className="Sobre_Member_Text_Container">
                                                                <h3 className="Sobre_Member_Name">{membro.nome}</h3>
                                                                <p className="Sobre_Member_Description">{membro.cargo}</p>
                                                            </div>
                                                            <div className="Sobre_Member_Image_Container">
                                                                <img src={membro.foto} alt={membro.nome} className="Sobre_Member_Image" />
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                        <p className="Sobre_Description_Text">
                                            Nos empenhamos em buscar a excelência e a inovação, nossos membros são pioneiros na adoção de tecnologias
                                            de ponta, sempre em busca de maneiras de aplicá-las de forma criativa.{" "}
                                        </p>
                                        <p className="Sobre_Header_Text">
                                            <strong>Sinta-se à vontade para entrar em contato com qualquer um de nós.</strong>
                                        </p>
                                    </div>
                                </div>

                                {/* Desktop Image Container */}
                                {!isMobile && (
                                    <div className="Sobre_Member_Container">
                                        {membrosDaEquipe.map((membro: any) => {
                                            return (
                                                <div className="Sobre_Member_Card" key={membro.nome}>
                                                    <div className="Sobre_Member_Interactions">
                                                        <a
                                                            className="Sobre_Interaction_Icon hoverable undecorated"
                                                            href={membro.linkedin}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="material-icons">share</span>
                                                        </a>
                                                        <a
                                                            className="Sobre_Interaction_Icon hoverable undecorated"
                                                            href={"mailto:" + membro.email}
                                                            rel="noreferrer"
                                                        >
                                                            <span className="material-icons">mail</span>
                                                        </a>
                                                    </div>
                                                    <div className="Sobre_Member_Text_Container">
                                                        <h3 className="Sobre_Member_Name">{membro.nome}</h3>
                                                        <p className="Sobre_Member_Description">{membro.cargo}</p>
                                                    </div>
                                                    <div className="Sobre_Member_Image_Container">
                                                        <img src={membro.foto} alt={membro.nome} className="Sobre_Member_Image" />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </m.div>
                    )}

                    {/* Sobre a Fundação */}
                    {activeAbout === 3 && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="About_Card"
                            key="AC_03"
                        >
                            <div className="About_Card_Content">
                                <div className="About_Card_Text_Container">
                                    <div className="About_Card_Text_Wrapper">
                                        <div className="About_Card_Header">
                                            <h3 className="Card_Header_Subtitle">Sobre</h3>
                                            <h2 className="Card_Header_Title">A Fundação</h2>
                                        </div>
                                        {/* Desktop Image Container */}
                                        {isMobile && (
                                            <div className="About_Card_Image_Container">
                                                <div className="About_Card_Img_Block">
                                                    <img className="About_Card_Img" src={fotoFundacao1}></img>
                                                </div>
                                            </div>
                                        )}
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                Nossa história começa em março de 2017, quando Olivier Smadja teve a ideia de criar um robô para
                                                cuidar de pessoas idosas.
                                            </strong>
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Com o passar do tempo, a ideia foi ganhando forma e se transformando em algo muito maior: uma linha de
                                            robôs capazes de interagir com pessoas de todas as idades, em diferentes contextos e situações.
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Foi assim que nasceu o primeiro robô autônomo de atendimento e telepresença do Brasil. Com a ajuda de
                                            Rodrigo, Otoniel, Leandro, Larissa, Lucas, Hellen, Alexandre e Vitor, a equipe da Human Robotics cresceu e
                                            trabalhou incansavelmente para criar assistentes virtuais que pudessem auxiliar pessoas em diversas áreas,
                                            desde a educação infantil até a assistência médica remota.
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Após anos de experiência em engenharia e automação rodoviária, Olivier decidiu fundar a Human Robotics,
                                            uma empresa que tem como objetivo oferecer as melhores experiências para seus clientes, ao mesmo tempo que
                                            promove a responsabilidade social e ambiental em cada etapa da produção.
                                        </p>
                                    </div>
                                </div>

                                {/* Desktop Image Container */}
                                {!isMobile && (
                                    <div className="About_Card_Image_Container">
                                        <div className="About_Card_Img_Block">
                                            <img className="About_Card_Img" src={fotoFundacao1}></img>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </m.div>
                    )}

                    {/* Sobre Nossos Parceiros */}
                    {activeAbout === 4 && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="About_Card"
                            key="AC_04"
                        >
                            <div className="About_Card_Content">
                                <div className="About_Card_Text_Container">
                                    <div className="About_Card_Header">
                                        <h3 className="Card_Header_Subtitle">Sobre</h3>
                                        <h2 className="Card_Header_Title">Nossos Parceiros</h2>
                                    </div>
                                    <p className="Sobre_Header_Text Partners_Text_Container">
                                        <strong>Contamos com uma rede de parceiros que nos ajudam a levar tecnologia de ponta para você.</strong>
                                    </p>

                                    <div className="Sobre_Partners_Container">
                                        <m.div className="Sobre_Partners_Description_Text">
                                            <div className="Partners_Description_Header">
                                                <span className="material-icons Partners_Icons">memory</span>
                                                <h3 className="Partners_Description_Title">Parceiros de Produção</h3>
                                            </div>

                                            <p className="Partners_Description_Detail">
                                                Nossos parceiros de produção são laboratórios de eletrônica e robótica certificados pelo Conselho de
                                                Manejo Industrial (CMI), que garantem a sustentabilidade e qualidade da produção de hardwares.
                                            </p>
                                            <div className="Partner_Description_Actions">
                                                <button
                                                    className="Partner_Description_Action_Btn KnowMore_Button hoverable"
                                                    onClick={() => {
                                                        getInContact("production");
                                                    }}
                                                >
                                                    <span className="material-icons">handshake</span>Quero ser um Parceiro
                                                </button>
                                            </div>
                                        </m.div>
                                        <m.div className="Sobre_Partners_Description_Text">
                                            <div className="Partners_Description_Header">
                                                <span className="material-icons Partners_Icons">loyalty</span>
                                                <h3 className="Partners_Description_Title">Parceiros de Distribuição</h3>
                                            </div>

                                            <p className="Partners_Description_Detail">
                                                Nossos parceiros de distribuição são empresas que nos ajudam a levar nossos produtos para todo o
                                                Brasil. Eles são responsáveis pela logística de entrega e pela comercialização dos produtos da Human
                                                Robotics em suas lojas físicas e virtuais.
                                            </p>
                                            <div className="Partner_Description_Actions">
                                                <button
                                                    className="Partner_Description_Action_Btn KnowMore_Button hoverable"
                                                    onClick={() => {
                                                        getInContact("distribution");
                                                    }}
                                                >
                                                    <span className="material-icons">handshake</span>Quero ser um Parceiro
                                                </button>
                                            </div>
                                        </m.div>
                                        <m.div className="Sobre_Partners_Description_Text">
                                            <div className="Partners_Description_Header">
                                                <span className="material-icons Partners_Icons">handyman</span>
                                                <h3 className="Partners_Description_Title">Parceiros de Assistência</h3>
                                            </div>

                                            <p className="Partners_Description_Detail">
                                                Nossos parceiros de assistência técnica são capazes de oferecer serviços de reparo, configuração e
                                                treinamento para o uso dos robôs.
                                            </p>
                                            <div className="Partner_Description_Actions">
                                                <button
                                                    className="Partner_Description_Action_Btn KnowMore_Button hoverable"
                                                    onClick={() => {
                                                        getInContact("assistance");
                                                    }}
                                                >
                                                    <span className="material-icons">handshake</span>Quero ser um Parceiro
                                                </button>
                                            </div>
                                        </m.div>
                                        <m.div className="Sobre_Partners_Description_Text">
                                            <div className="Partners_Description_Header">
                                                <span className="material-icons Partners_Icons">recycling</span>
                                                <h3 className="Partners_Description_Title">Parceiros de Reciclagem</h3>
                                            </div>

                                            <p className="Partners_Description_Detail">
                                                Nossos parceiros de reciclagem são empresas que nos ajudam a reciclar as partes eletrônicas e
                                                estruturais de nossos robôs, garantindo que nossos produtos causem menos danos ao meio ambiente.
                                            </p>
                                            <div className="Partner_Description_Actions">
                                                <button
                                                    className="Partner_Description_Action_Btn KnowMore_Button hoverable"
                                                    onClick={() => {
                                                        getInContact("recycle");
                                                    }}
                                                >
                                                    <span className="material-icons">handshake</span>Quero ser um Parceiro
                                                </button>
                                            </div>
                                        </m.div>
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    )}

                    {/* Sobre a História da Robótica */}
                    {activeAbout === 5 && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="About_Card"
                            key="AC_05"
                        >
                            <div className="About_Card_Content">
                                <div className="About_Card_Text_Container">
                                    <div className="About_Card_Text_Wrapper">
                                        <div className="About_Card_Header">
                                            <h3 className="Card_Header_Subtitle">Sobre</h3>
                                            <h2 className="Card_Header_Title">A História da Robótica</h2>
                                        </div>
                                        {isMobile && (
                                            <div className="About_Card_Image_Container">
                                                <div className="About_Card_Img_Block">
                                                    <img className="About_Card_Img" src={fotoRUR}></img>
                                                </div>
                                            </div>
                                        )}
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                Aristóteles, em sua obra Política de 322 a.C, especulou que autômatos poderiam, um dia, trazer a
                                                igualdade humana tornando possível a abolição da escravidão:
                                            </strong>
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            “Há apenas uma condição em que podemos imaginar gerentes não precisando de subordinados e mestres não
                                            precisando de escravos. Esta condição seria que cada instrumento pudesse fazer seu próprio trabalho, à
                                            palavra de comando ou por antecipação inteligente, como as estátuas de Dédalo ou os tripés feitos por
                                            Hefesto, dos quais Homero relata que "Por movimento próprio, eles entraram na assembléia dos Deuses no
                                            Olimpo", como se um pente de tear pudesse tecer sozinho e um plectro pudesse tocar harpa sozinho.”
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            No século IV a.C. , o matemático Arquitas de Tarento postulou um dos primei ros registros que temos sobre
                                            um autômato, neste ele apresenta um pássaro mecânico que ele chamou de "O Pombo", impulsionado a vapor.
                                        </p>
                                        <img className="Sobre_Img WideImg" src={fotoAlexandria}></img>
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                Quando os gregos controlaram o Egito, uma sucessão de engenheiros que podiam construir autômatos se
                                                estabeleceram em Alexandria.
                                            </strong>
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            {" "}
                                            A partir do polímata Ctesibius (285-222 a.C. ) , os engenheiros alexandrinos deixaram textos detalhando
                                            autômatos viáveis alimentados por hidráulica ou vapor. Ctesibius construiu autômatos semelhantes a
                                            humanos, frequentemente usados em cerimônias religiosas e no culto a deuses.
                                        </p>
                                        <img className="Sobre_Img" src={fotoAlexandria2}></img>
                                        <p className="Sobre_Description_Text">
                                            Um dos últimos grandes engenheiros alexandrinos, Heron de Alexandria (10-70 d.C. ) construiu um teatro de
                                            marionetes autômatos, onde as figuras e os cenários se moviam por meios mecânicos. Ele descreveu a
                                            construção de tais autômatos em seu tratado sobre pneumática. Os engenheiros de Alexandria construíram
                                            autômatos em reverência ao aparente domínio dos humanos sobre a natureza e como ferramentas para os
                                            sacerdotes, mas também iniciaram uma tradição em que autômatos eram construídos para o entretenimento de
                                            quem fosse rico o suficiente.
                                        </p>
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                Entre as primeiras automações verificáveis está um humanoide desenhado por Leonardo da Vinci
                                                (1452-1519) em torno de 1495.
                                            </strong>
                                        </p>
                                        <img className="Sobre_Img WideImg" src={fotoDaVinci}></img>
                                        <p className="Sobre_Description_Text">
                                            Os cadernos de Leonardo, redescobertos na década de 1950, contêm desenhos detalhados de um cavaleiro
                                            mecânico em armadura que era capaz de sentar, acenar com os braços e mover a cabeça e a mandíbula.
                                        </p>
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                O desenvolvimento inicial dos robôs modernos baseou-se no esforço de automatizar as operações
                                                industriais.
                                            </strong>
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Este esforço foi bastante exarcebado no começou no século XVIII , dentro da indústria têxtil, com o
                                            aparecimento dos primeiros teares mecânicos. Com o contínuo progresso da revolução industrial, as fábricas
                                            procuraram equipar-se com máquinas capazes de realizar e reproduzir, automaticamente, determinadas
                                            tarefas.
                                        </p>
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                Nos anos 1770, o suíço Pier re Jaquet-Droz criou autômatos móveis que pareciam crianças, o que
                                                encantou Mary Shelley, que mais tarde escreveu Frankenstein: O Moderno Prometeu.
                                            </strong>
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            A tentativa final de automação foi O Turco de Wolfgang von Kempelen, uma máquina sofisticada que podia
                                            jogar xadrez contra um oponente humano e percorreu a Europa. Quando a máquina foi levada para o Novo
                                            Mundo, ela levou Edgar Allan Poe a escrever um ensaio, no qual ele concluiu que era impossível para
                                            dispositivos mecânicos raciocinar ou pensar.
                                        </p>
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                Em 1898, Nikola Tesla demonstrou um submarino controlado remotamente no Madison Square Garden como "um
                                                autômato que, deixado a si mesmo, agirá como se possuísse razão e sem nenhum controle voluntário do
                                                exterior".
                                            </strong>
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Ele defendeu sua invenção contra repórteres críticos, argumentando que seus autômatos não eram "torpedos
                                            sem fio", mas sim "homens mecânicos que farão o trabalho laborioso da raça humana".
                                        </p>
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                O termo "robô" foi usado pela primeira vez em uma peça publicada pelo checo Karel Čapek em 1921.
                                                R.U.R. (Robôs Universais de Rossum) era uma sátira, os robôs eram seres biológicos fabricados que
                                                realizavam todo o trabalho manual desagradável.
                                            </strong>
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Segundo Čapek, a palavra foi criada por seu irmão Josef a partir da palavra checa robota 'corvée', ou em
                                            eslovaco ' trabalho' ou 'trabalho braçal '. (Karel Čapek trabalhava em sua peça durante sua estadia em
                                            Trenčianske Teplice, na Eslováquia, onde seu pai trabalhava como médico. ) A peça R.U.R. substituiu o uso
                                            popular da palavra "autômato".
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Em 1939, Konrad Zuse construiu o primeiro computador eletromecânico programável, lançando as bases para a
                                            construção de uma máquina humanoide e interativa que hoje consideramos ser um robô.
                                        </p>
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                Em 1941 e 1942, Isaac Asimov formulou as Três Leis da Robótica e, no processo, cunhou a palavra "
                                                robótica".
                                            </strong>
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Em 1945, Vannevar Bush publicou Como Podemos Pensar, um ensaio que investigou o potencial do processamento
                                            eletrônico de dados. Ele previu o surgimento de computadores, processadores de texto digital,
                                            reconhecimento de voz e tradução automática.
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            O primeiro robô móvel capaz de raciocinar sobre seu ambiente, Shakey, foi const ruído em 1970 pelo
                                            Stanford Research Institute (agora SRI International ). Shakey combinava várias entradas de sensores,
                                            incluindo câmeras de TV, medidores de distância a laser e "sensores de impacto" para navegar.
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Em 1986, a Honda iniciou seu programa de pesquisa e desenvolvimento para criar robôs capazes de interagir
                                            com sucesso com humanos. Um robô hexapodal chamado Genghis foi revelado pelo MIT em 1989. Genghis era
                                            famoso por ser feito rapidamente e de forma barata devido a métodos de construção; Genghis usava 4
                                            microprocessadores, 22 sensores e 12 motores servo.
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            O popular Roomba, um aspirador de pó robótico, foi lançado pela primeira vez em 2002 pela empresa iRobot.
                                            Robôs comerciais e industriais estão agora em uso generalizado, executando trabalhos mais baratos ou com
                                            maior precisão e confiabilidade do que os humanos. Eles também são empregados para tarefas que são muito
                                            sujas, perigosas ou monótonas para serem adequadas para os humanos.
                                        </p>
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                Nos últimos anos, houve um aumento no interesse pelo desenvolvimento de robôs com capacidades mais
                                                avançadas, como Inteligência Artificial - IA, aprendizado de máquina e processamento de linguagem
                                                natural.
                                            </strong>
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Esses robôs são projetados para real izar tarefas que exigem habilidades cognitivas de nível mais elevado,
                                            como tomada de decisão, resolução de problemas e adaptação a novas situações.
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            À medida que a tecnologia continua a evoluir, é certo que os robôs se tornarão cada vez mais sofisticados
                                            e capazes de executar uma ampla gama de tarefas complexas. No entanto, também há preocupações sobre o
                                            impacto que os robôs terão na força de trabalho e na economia.
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Conforme os robôs se tornam mais avançados, eles podem substituir trabalhadores humanos em certas
                                            indústrias, o que poder ia levar a perdas de emprego e agitação social . Será importante gerenciar
                                            cuidadosamente a integração de robôs na sociedade para garantir que os benefícios sejam maximizados
                                            enquanto as consequências negativas sejam minimizadas.
                                        </p>
                                        <p className="Sobre_Header_Text">
                                            <strong>Mas como podemos definir usos éticos e humanos da tecnologia?</strong>
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Uma das idealizações para a Quinta Revolução Industrial, ou 5RI, abrange a noção de colaborações
                                            harmoniosas entre humanos e máquinas, com um foco específico no bem-estar dos múltiplos atores de um
                                            ecossistema (ou seja, sociedade, empresas, pessoas, animais, vegetais, minerais, etc… ).
                                        </p>
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                Essa aceitação harmoniosa de colaborações entre humanos e máquinas distingue a 5IR da Quarta Revolução
                                                Industrial (4IR), que se concentrou predominantemente em alcançar apenas eficiência, e por
                                                consequência lucro, usando tecnologia.
                                            </strong>
                                        </p>
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                Dessa forma, a 5RI abre caminho para uma (r)evolução no pensamento e na alavancagem de colaborações
                                                entre humanos e máquinas para um maior bem-estar da sociedade.
                                            </strong>
                                        </p>
                                    </div>
                                </div>

                                {!isMobile && (
                                    <div className="About_Card_Image_Container">
                                        <div className="About_Card_Img_Block">
                                            <img className="About_Card_Img" src={fotoRUR}></img>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </m.div>
                    )}

                    {/* A Robótica e o Brasil */}
                    {activeAbout === 6 && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="About_Card"
                            key="AC_06"
                        >
                            <div className="About_Card_Content">
                                <div className="About_Card_Text_Container">
                                    <div className="About_Card_Text_Wrapper">
                                        <div className="About_Card_Header">
                                            <h3 className="Card_Header_Subtitle">Sobre</h3>
                                            <h2 className="Card_Header_Title">A Robótica e o Brasil</h2>
                                        </div>
                                        {isMobile && (
                                            <div className="About_Card_Image_Container">
                                                <div className="About_Card_Img_Block">
                                                    <img className="About_Card_Img" src={fotoCHICO}></img>
                                                </div>
                                            </div>
                                        )}
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                A robótica poder ser uma força transformadora para a sociedade brasileira, ajudando a criar empregos
                                                de alta qualidade, aumentando a eficiência e a produtividade, e melhorando a qualidade de vida das
                                                pessoas em todo o país.
                                            </strong>
                                        </p>
                                        <p className="Sobre_Header_Text">
                                            Para falar em robótica no Brasil é impossível não falar do setor onde essa pesquisa e seu desenvolvimento
                                            aconteceram de forma intensa e pioneira, que é a pesquisa de robótica para águas profundas e ultra
                                            profundas, na prospecção e exploração de petróleo na costa brasileira.
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Quando, na década de 1980, a Petróleo Brasileiro S.A. - PETROBRAS, além de iniciar suas buscas por
                                            hidrocarbonetos na Amazônia, passou a intensificar pesquisas e realizações positivas de descobertas de
                                            novas fontes de óleo na plataforma cont inental brasileira, foi preciso entender, desenvolver pesquisas e
                                            dominar tecnologias relacionadas a águas profundas.
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Dentro deste esforço foi criado o Laboratório de Robótica do Centro de Pesquisas Leopoldo Miguez de Mello
                                            - CENPES, da PETROBRAS, onde realmente começou-se do início, trabalhando com manipuladores hidráulicos
                                            submarinos, depois com o desenvolvimento de várias ferramentas, algumas tele operadas, e outros sistemas
                                            para intervenções especiais.
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            O robô G.I.R.I.N.O. 3 (Gabarito Interno Robotizado de Incidência Normal ao Oleoduto) é um robô
                                            desenvolvido pelo Laboratório de Robótica da área de Tecnologia Submarina do Centro de Pesquisa da
                                            Petrobras, que visa procurar vias menos arriscadas no processo de inspeção interna de dutos, cujos
                                            movimentos de deslocamento são gerados por energia hidráulica. (PANTA, 2005).
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            O robô Chico Mendes 4 é um novo conceito de veículo híbrido, tele-operado, desenvolvido prioritariamente
                                            para atender as demandas de pesquisa e monitoramento socioambientais na Amazônia, também pode ser
                                            considerado como uma alternativa de locomoção para a região amazônica. Versátil, pouco invasivo, reconhece
                                            e se adapta aos diferentes tipos de cenários e obstáculos ao longo de seus trajetos e missões –
                                            características fundamentais para mobilidade e acessibilidade na região.
                                        </p>
                                    </div>
                                </div>

                                {!isMobile && (
                                    <div className="About_Card_Image_Container">
                                        <div className="About_Card_Img_Block">
                                            <img className="About_Card_Img" src={fotoCHICO}></img>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </m.div>
                    )}

                    {/* Blog */}
                    {activeAbout === 7 && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="About_Card"
                            key="AC_07"
                        >
                            <div className="About_Card_Content" id="Blog_Card_Content">
                                {!isMobile && (
                                    <div className="About_Card_Post_Container">
                                        {blogPosts.map((post: any) => {
                                            return (
                                                <div className="Post_Card small_hoverable">
                                                    <div className="Post_Card_Image_Container">
                                                        <img className="Post_Card_Image" src={post.mainImg}></img>
                                                    </div>
                                                    <div className="Post_Card_Text_Container">
                                                        <h3 className="Post_Card_Title">{post.title}</h3>
                                                        <h4 className="Post_Card_Author">{post.author}</h4>
                                                        <h5 className="Post_Card_Date">{post.date}</h5>
                                                        <p className="Post_Card_Description">{post.description[1]}</p>
                                                        <div className="Post_Card_Actions">
                                                            <button
                                                                className="Post_Card_KnowMore_Btn hoverable"
                                                                onClick={() => {
                                                                    setActiveBlogPostFunction(post.id);
                                                                }}
                                                            >
                                                                Ler
                                                            </button>
                                                            <button className="Post_Card_Action_Btn hoverable undecorated">
                                                                <span className="material-icons">share</span>
                                                            </button>
                                                            <button className="Post_Card_Action_Btn hoverable undecorated">
                                                                <span className="material-icons">favorite</span>
                                                            </button>
                                                            <button className="Post_Card_Action_Btn hoverable undecorated">
                                                                <span className="material-icons">comment</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                <div className="About_Card_Text_Container" id="Blog_Text_Container">
                                    <div className="About_Card_Text_Wrapper" id="Blog_Text_Wrapper">
                                        <div className="About_Card_Header">
                                            <h3 className="Card_Header_Subtitle">Sobre</h3>
                                            <h2 className="Card_Header_Title">Blog</h2>
                                        </div>
                                        <p className="Sobre_Header_Text">
                                            <strong>
                                                Neste blog, exploraremos temas pertinentes à robótica, inteligência artificial, internet das coisas e
                                                automação.
                                            </strong>
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Semanalmente trazemos um update de nossos projetos e avanços, convidando você a se juntar a nós nessa
                                            jornada por uma transformação tecnológica mais centrada no ser humano e ao complexo ecossistema que nos
                                            envolve.
                                        </p>
                                        <p className="Sobre_Description_Text">
                                            Acreditamos que um canal cultural como um blog pode ser útil para gerar discussões e reflexões sobre o
                                            futuro da tecnologia e como ela pode ser usada para melhorar a vida das pessoas.
                                        </p>

                                        {isMobile && (
                                            <div className="About_Card_Post_Container">
                                                {blogPosts.map((post: any) => {
                                                    return (
                                                        <div className="Post_Card small_hoverable">
                                                            <div className="Post_Card_Text_Container">
                                                                <h3 className="Post_Card_Title">{post.title}</h3>
                                                                <p className="Post_Card_Description">{post.description}</p>
                                                                <div className="Post_Card_Actions">
                                                                    <button
                                                                        className="Post_Card_KnowMore_Btn hoverable"
                                                                        onClick={() => {
                                                                            setActiveBlogPostFunction(post.id);
                                                                        }}
                                                                    >
                                                                        <span className="material-icons">visibility</span>
                                                                        Ler
                                                                    </button>
                                                                    <button className="Post_Card_Action_Btn hoverable undecorated">
                                                                        <span className="material-icons">share</span>
                                                                    </button>
                                                                    <button className="Post_Card_Action_Btn hoverable undecorated">
                                                                        <span className="material-icons">favorite</span>
                                                                    </button>
                                                                    <button className="Post_Card_Action_Btn hoverable undecorated">
                                                                        <span className="material-icons">comment</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="Post_Card_Image_Container">
                                                                <img className="Post_Card_Image" src={post.mainImg}></img>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    )}
                </AnimatePresence>
            </m.div>

            <div className="Abouts_Selector">
                <button
                    className={activeAbout === 1 ? "About_Type_Selector hoverable selected" : "About_Type_Selector hoverable"}
                    onClick={() => {
                        setActiveAboutClass(1);
                    }}
                >
                    Nossa Missão
                </button>
                <button
                    className={activeAbout === 2 ? "About_Type_Selector hoverable selected" : "About_Type_Selector hoverable"}
                    onClick={() => {
                        setActiveAboutClass(2);
                    }}
                >
                    Equipe
                </button>
                <button
                    className={activeAbout === 3 ? "About_Type_Selector hoverable selected" : "About_Type_Selector hoverable"}
                    onClick={() => {
                        setActiveAboutClass(3);
                    }}
                >
                    A Fundação
                </button>
                <button
                    className={activeAbout === 4 ? "About_Type_Selector hoverable selected" : "About_Type_Selector hoverable"}
                    onClick={() => {
                        setActiveAboutClass(4);
                    }}
                >
                    Parceiros
                </button>
                <button
                    className={activeAbout === 5 ? "About_Type_Selector hoverable selected" : "About_Type_Selector hoverable"}
                    onClick={() => {
                        setActiveAboutClass(5);
                    }}
                >
                    História da Robótica
                </button>
                <button
                    className={activeAbout === 6 ? "About_Type_Selector hoverable selected" : "About_Type_Selector hoverable"}
                    onClick={() => {
                        setActiveAboutClass(6);
                    }}
                >
                    Robótica e o Brasil
                </button>
                <button
                    className={activeAbout === 7 ? "About_Type_Selector hoverable selected" : "About_Type_Selector hoverable"}
                    onClick={() => {
                        setActiveAboutClass(7);
                    }}
                >
                    Blog
                </button>
            </div>
        </m.div>
    );
});

export default Section_Sobre;
