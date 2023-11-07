import React from "react";

import Icon_Atendimento from "../components/icons/hr/Icon_Industria";
import Icon_Industria from "../components/icons/hr/Icon_Industria";
import Icon_Navegação from "../components/icons/hr/Icon_Navegação";
import Icon_IntelNUC from "../components/icons/hr/Icon_IntelNUC";
import Icon_QuotePrice from "../components/icons/hr/Icon_QuotePrice";
import Icon_Demo from "../components/icons/hr/Icon_Demo";

import Product from "../types/00_Alt_Produto";

const Produtos: Product[] = [
    {
        id: 1,
        prename: "RobiOS",
        name: "GO",
        class: "produtos",
        type: "robo",
        heroImg: "./imgs/products/RobiOS_GO_Hero_Image",
        backgroundImg: "./imgs/products/RobiOS_GO_Bg_Image/",
        detail_Images: ["./imgs/products/RobiOS_GO_Detail_Image_01", "./imgs/products/RobiOS_GO_Detail_Image_02"],
        object3D: "./objects3D/products/robios.go.gltf",
        textIntro: "Um robô interativo capaz de se locomover de forma autônoma e inteligente.",
        textDetail: [
            "O RobiOS GO é um robô interativo avançado que pode se mover de forma autônoma e inteligente. Ele foi projetado para atender a uma variedade de necessidades em diferentes setores, oferecendo um nível excepcional de autonomia e personalização.",
            "Esta é a solução perfeita para setores que exigem mobilidade e interação personalizada.",
            "Equipado com sensores de alta precisão, ele pode navegar por ambientes complexos, reconhecer objetos e rostos, e até mesmo se comunicar por voz. Sua capacidade de interagir com os usuários de forma personalizada o torna ideal para aplicações que vão desde hospitalidade até indústria.",
        ],
        relatedSectors: [
            {
                title: "Indústria",
                description:
                    "Robôs autônomos são usados na indústria para tarefas como automação de linhas de produção, inspeção de qualidade e transporte de materiais.",
                icon: <Icon_Industria />,
            },
        ],
        useCases: [
            {
                title: "Atendimento ao Cliente",
                description: "Pode oferecer suporte e informações aos clientes.",
                icon: <Icon_Atendimento />,
            },
        ],
        capacities: [
            {
                title: "Autonomia de Navegação",
                description: "O robô pode se movimentar de forma independente e tomar decisões de navegação.",
                icon: <Icon_Navegação />,
            },
        ],
        specifications: [
            {
                title: "Micro Computador Intel NUC",
                description: "Equipado com microcomputador Intel para processamento eficiente.",
                icon: <Icon_IntelNUC />,
            },
        ],
        interactions: [
            {
                title: "Solicite uma Cotação",
                icon: <Icon_QuotePrice />,
            },
            {
                title: "Agende uma Demonstração",
                icon: <Icon_Demo />,
            },
        ],
    },
];

export default Produtos;
