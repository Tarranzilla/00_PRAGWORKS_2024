import ProductType from "../types/00_Produto"; // Import the Product interface

const TodosOsProdutos: ProductType[] = [
    {
        domId: "produto-00",

        id: 0,
        prename: "RobiOS",
        name: "GO",
        type: "Robô Autônomo Móvel",
        class: "robos",
        description: "Um robô interativo capaz de se locomover de forma autônoma e inteligente.",
        fullDescription: [
            "Um robô autônomo móvel com câmera 4K para telepresença, câmeras fish-eye para navegação, câmera 3D (infravermelho e RGB), LIDAR + sensores ultrasônicos, tela de 10.1 polegadas touch e full HD, auto-falante 40w full range, computador interno (Intel NUC), motores silenciosos e bateria com autonomia de 3 a 5 horas, também com capacidade de auto recarga.",
        ],
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new8/01B_Go.png", "/robots_images/new8/GO_Detail_01.png", "/robots_images/new8/GO_Detail_02.png"],

        buyPrice: 25000,
        rentPrice: 1250,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: [
            {
                name: "Sensores de Navegação LIDAR",
                imgSrc: "",
            },
            {
                name: "Sensores de Navegação Ultrasom",
                imgSrc: "",
            },
            {
                name: "Tela de 11 Polegadas",
                imgSrc: "",
            },
            {
                name: "Auto Falantes HiFi",
                imgSrc: "",
            },
            {
                name: "Bateria com capacidade para 6 Horas.",
                imgSrc: "",
            },
        ],
        solutions: [
            {
                name: "Atendimento",
                imgSrc: "robots_images/new8/Atendimento.png",
                id: 0,
            },
            {
                name: "Publicidade",
                imgSrc: "robots_images/new8/Publi.png",
                id: 1,
            },
            {
                name: "Inspeção",
                imgSrc: "robots_images/new8/Inspecao.png",
                id: 2,
            },
            {
                name: "Transporte",
                imgSrc: "robots_images/new8/Transporte.png",
                id: 3,
            },
        ],
    },

    {
        domId: "produto-01",

        id: 1,
        prename: "RobiOS",
        name: "INSPECTOR",
        type: "Robô Autônomo Móvel",
        class: "robos",
        description: "Um robô interativo para a inspeção de ambientes, produtos e equipamentos.",
        fullDescription: [""],
        bgImgSrc: "/robots_backgrounds/fundo_inspector.png",
        imgSrc: [
            "/robots_images/new8/02B_Inspector.png",
            "/robots_images/new8/INSPECTOR_Detail_01.png",
            "/robots_images/new8/INSPECTOR_Detail_02.png",
        ],

        buyPrice: 35000,
        rentPrice: 1750,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: [
            {
                name: "Sensores de Navegação LIDAR",
                imgSrc: "",
            },
            {
                name: "Sensores de Navegação Ultrasom",
                imgSrc: "",
            },
            {
                name: "Tela de 11 Polegadas",
                imgSrc: "",
            },
            {
                name: "Auto Falantes HiFi",
                imgSrc: "",
            },
            {
                name: "Bateria com capacidade para 6 Horas.",
                imgSrc: "",
            },
        ],
        solutions: [
            {
                name: "Atendimento",
                imgSrc: "robots_images/new8/Atendimento.png",
                id: 0,
            },
            {
                name: "Publicidade",
                imgSrc: "robots_images/new8/Publi.png",
                id: 1,
            },
            {
                name: "Inspeção",
                imgSrc: "robots_images/new8/Inspecao.png",
                id: 2,
            },
            {
                name: "Transporte",
                imgSrc: "robots_images/new8/Transporte.png",
                id: 3,
            },
        ],
    },

    {
        domId: "produto-02",

        id: 2,
        prename: "RobiOS",
        name: "CARGO",
        type: "Robô Autônomo Móvel",
        class: "robos",
        description: "Um robô interativo que lhe permite armazenar e transportar objetos e ferramentas.",
        fullDescription: [
            "Um robô autônomo, ainda em desenvolvimento - projetado para realizar entregas em espaços internos, com capacidade de carga de até 50kg e autonomia de até 8 horas.",
            "O surgimento da Internet Industrial das Coisas (IIoT) e o advento de uma rede de sistemas conectados estão ajudando as indústrias a realizar uma infinidade de tarefas, como agendamento de materiais, seleção, pedidos, embalagem, segurança de armazém e inspeção, além de melhorar significativamente a eficiência operacional.",
            "Alguns dos benefícios da automação logística são o aprimoramento do serviço ao cliente, escalabilidade e velocidade, controle organizacional e a redução de erros e de acidentes.",
        ],

        bgImgSrc: "/robots_backgrounds/fundo_cargo.png",
        imgSrc: ["/robots_images/new8/03B_Cargo.png", "/robots_images/new8/CARGO_Detail_01.png", "/robots_images/new8/CARGO_Detail_02.png"],
        buyPrice: 25000,
        rentPrice: 1250,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: [
            {
                name: "Sensores de Navegação LIDAR",
                imgSrc: "",
            },
            {
                name: "Sensores de Navegação Ultrasom",
                imgSrc: "",
            },
            {
                name: "Tela de 11 Polegadas",
                imgSrc: "",
            },
            {
                name: "Auto Falantes HiFi",
                imgSrc: "",
            },
            {
                name: "Bateria com capacidade para 6 Horas.",
                imgSrc: "",
            },
        ],
        solutions: [
            {
                name: "Atendimento",
                imgSrc: "robots_images/new8/Atendimento.png",
                id: 0,
            },
            {
                name: "Publicidade",
                imgSrc: "robots_images/new8/Publi.png",
                id: 1,
            },
            {
                name: "Inspeção",
                imgSrc: "robots_images/new8/Inspecao.png",
                id: 2,
            },
            {
                name: "Transporte",
                imgSrc: "robots_images/new8/Transporte.png",
                id: 3,
            },
        ],
    },

    {
        domId: "produto-03",

        id: 3,
        prename: "",
        name: "RobiOS",
        type: "Sistema Operacional Robótico",
        class: "softwares",
        description:
            "Um sistema operacional robótico capaz de gerenciar e controlar robôs autônomos móveis, com uma interface gráfica intuitiva e de fácil utilização.",
        fullDescription: [""],
        bgImgSrc: "/robots_backgrounds/fundo_avatar.png",
        imgSrc: ["/robots_images/new5/04_RobiOs.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: [
            {
                name: "Licença Software RobiOS",
                imgSrc: "",
            },
        ],
        solutions: [
            {
                name: "Atendimento",
                imgSrc: "robots_images/new8/Atendimento.png",
                id: 0,
            },
            {
                name: "Publicidade",
                imgSrc: "robots_images/new8/Publi.png",
                id: 1,
            },
            {
                name: "Inspeção",
                imgSrc: "robots_images/new8/Inspecao.png",
                id: 2,
            },
            {
                name: "Transporte",
                imgSrc: "robots_images/new8/Transporte.png",
                id: 3,
            },
        ],
    },

    {
        domId: "produto-04",

        id: 4,
        prename: "RobiOS",
        name: "STUDIO",
        type: "Software de Personalização",
        class: "softwares",
        description: "Software para a personalização das ações dos robôs e assistentes, com uma interface gráfica intuitiva e fácil de usar.",
        fullDescription: [""],
        bgImgSrc: "/robots_backgrounds/fundo_avatar.png",
        imgSrc: ["/robots_images/new5/05_Studio.png"],
        buyPrice: 3500,
        rentPrice: 350,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: [
            {
                name: "Licença Software RobiOS Studio",
                imgSrc: "",
            },
        ],
        solutions: [
            {
                name: "Atendimento",
                imgSrc: "robots_images/new8/Atendimento.png",
                id: 0,
            },
            {
                name: "Publicidade",
                imgSrc: "robots_images/new8/Publi.png",
                id: 1,
            },
            {
                name: "Inspeção",
                imgSrc: "robots_images/new8/Inspecao.png",
                id: 2,
            },
            {
                name: "Transporte",
                imgSrc: "robots_images/new8/Transporte.png",
                id: 3,
            },
        ],
    },

    {
        domId: "produto-05",

        id: 5,
        prename: "RobiOS",
        name: "AVATAR",
        type: "Assistente Virtual Inteligente",
        class: "softwares",
        fullDescription: [""],
        description: "Software capaz de emular Avatares - assistentes virtuais que podem ser acessados em qualquer dispositivo Android",
        bgImgSrc: "/robots_backgrounds/fundo_avatar.png",
        imgSrc: ["/robots_images/new5/06_Avatar.png"],
        buyPrice: 3500,
        rentPrice: 350,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: [
            {
                name: "Licença Software RobiOS Avatar",
                imgSrc: "",
            },
        ],
        solutions: [
            {
                name: "Atendimento",
                imgSrc: "robots_images/new8/Atendimento.png",
                id: 0,
            },
            {
                name: "Publicidade",
                imgSrc: "robots_images/new8/Publi.png",
                id: 1,
            },
            {
                name: "Inspeção",
                imgSrc: "robots_images/new8/Inspecao.png",
                id: 2,
            },
            {
                name: "Transporte",
                imgSrc: "robots_images/new8/Transporte.png",
                id: 3,
            },
        ],
    },
    {
        domId: "produto-06",

        id: 6,
        prename: "",
        name: "Customização",
        type: "Serviço Adicional",
        class: "servicos",

        description:
            "Customize seu robô visualmente aplicando a sua marca e identidade visual, estuturalmente com módulos e comportamentalmente com uma personalidade única.",
        fullDescription: [
            "Cada robô é modular e pode passar por serviços de personalização de hardware, software e interação - oferecendo a possibilidade da criação de robôs únicos e adaptados às necessidades de cada cliente.",
        ],
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new8/07_Customizacao.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: [
            {
                name: "Personalização de Robôs",
                imgSrc: "",
            },
            {
                name: "Personalização de Software",
                imgSrc: "",
            },
            {
                name: "Personalização de Avatares Virtuais",
                imgSrc: "",
            },
        ],
        solutions: [
            {
                name: "Atendimento",
                imgSrc: "robots_images/new8/Atendimento.png",
                id: 0,
            },
            {
                name: "Publicidade",
                imgSrc: "robots_images/new8/Publi.png",
                id: 1,
            },
            {
                name: "Inspeção",
                imgSrc: "robots_images/new8/Inspecao.png",
                id: 2,
            },
            {
                name: "Transporte",
                imgSrc: "robots_images/new8/Transporte.png",
                id: 3,
            },
        ],
    },

    {
        domId: "produto-07",

        id: 7,
        prename: "",
        name: "Mapeamento de Ambientes",
        type: "Serviço Adicional",
        class: "servicos",

        fullDescription: [""],
        description: "Mapeie ambientes internos e externos com LIDAR e os compile um arquivo digital em conjunto com percursos personalizados.",
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new8/08_Mapeamento.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: [
            {
                name: "Mapeamento de Ambientes Internos e Externos",
                imgSrc: "",
            },
            {
                name: "Desenvolvimento de Rotas Personalizadas",
                imgSrc: "",
            },
        ],
        solutions: [
            {
                name: "Atendimento",
                imgSrc: "robots_images/new8/Atendimento.png",
                id: 0,
            },
            {
                name: "Publicidade",
                imgSrc: "robots_images/new8/Publi.png",
                id: 1,
            },
            {
                name: "Inspeção",
                imgSrc: "robots_images/new8/Inspecao.png",
                id: 2,
            },
            {
                name: "Transporte",
                imgSrc: "robots_images/new8/Transporte.png",
                id: 3,
            },
        ],
    },

    {
        domId: "produto-08",

        id: 8,
        prename: "",
        name: "Treinamento e Suporte Técnico",
        type: "Serviço Adicional",
        class: "servicos",

        fullDescription: [
            "Oferecemos serviços de treinamento para operadores de robôs, garantindo que seus clientes possam utilizar seus produtos com eficiência e segurança.",
            "Também oferecemos uma garantia de 2 anos para nossos produtos. Esta garantia pode ser estendida caso o usuário deseje por um valor adicional. ",
        ],
        description: "Treine a sua equipe para que ela possa operar e personalizar o seu robô.",
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new8/09_Treinamento.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: [
            {
                name: "Treinamento de Operação",
                imgSrc: "",
            },
            {
                name: "Treinamento de Manutenção",
                imgSrc: "",
            },
            {
                name: "Treinamento de Personalização",
                imgSrc: "",
            },
            {
                name: "Suporte Técnico",
                imgSrc: "",
            },
        ],
        solutions: [
            {
                name: "Atendimento",
                imgSrc: "robots_images/new8/Atendimento.png",
                id: 0,
            },
            {
                name: "Publicidade",
                imgSrc: "robots_images/new8/Publi.png",
                id: 1,
            },
            {
                name: "Inspeção",
                imgSrc: "robots_images/new8/Inspecao.png",
                id: 2,
            },
            {
                name: "Transporte",
                imgSrc: "robots_images/new8/Transporte.png",
                id: 3,
            },
        ],
    },

    {
        domId: "produto-09",

        id: 9,
        prename: "",
        name: "Varejo",
        type: "Experiência",
        class: "experiencias",

        fullDescription: [""],
        description: "Proporcione experiências capazes de engajar o público, ativar produtos e aprimorar seu fluxo de distribuição.",
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new8/10_Varejo.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",
        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",
        components: [{ name: "Experiências publicitárias e operacionais.", imgSrc: "" }],
        solutions: [
            {
                name: "Atendimento",
                imgSrc: "robots_images/new8/Atendimento.png",
            },
            {
                name: "Publicidade",
                imgSrc: "robots_images/new8/Publi.png",
            },
            {
                name: "Inspeção",
                imgSrc: "robots_images/new8/Inspecao.png",
            },
            {
                name: "Transporte",
                imgSrc: "robots_images/new8/Transporte.png",
            },
        ],
    },

    {
        domId: "produto-10",

        id: 10,
        prename: "",
        name: "Indústria",
        type: "Experiência",
        class: "experiencias",

        fullDescription: [""],
        description: "Proporcione experiências capazes de facilitar o atendimento de clientes, a inspeção de recursos e transporte de equipamento.",
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new8/11_Industria.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: [{ name: "Experiências publicitárias e operacionais.", imgSrc: "" }],
        solutions: [
            {
                name: "Atendimento",
                imgSrc: "robots_images/new8/Atendimento.png",
                id: 0,
            },
            {
                name: "Publicidade",
                imgSrc: "robots_images/new8/Publi.png",
                id: 1,
            },
            {
                name: "Inspeção",
                imgSrc: "robots_images/new8/Inspecao.png",
                id: 2,
            },
            {
                name: "Transporte",
                imgSrc: "robots_images/new8/Transporte.png",
                id: 3,
            },
        ],
    },

    {
        domId: "produto-11",

        id: 11,
        prename: "",
        name: "Cultura",
        type: "Experiência",
        class: "experiencias",

        fullDescription: [""],
        description: "Proporcione experiências que estimulam aprendizados mais humanizados, criativos e informatizados.",
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new8/12_Cultura.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: [{ name: "Experiências publicitárias e operacionais.", imgSrc: "" }],
        solutions: [
            {
                name: "Atendimento",
                imgSrc: "robots_images/new8/Atendimento.png",
                id: 0,
            },
            {
                name: "Publicidade",
                imgSrc: "robots_images/new8/Publi.png",
                id: 1,
            },
        ],
    },
];

export default TodosOsProdutos;
