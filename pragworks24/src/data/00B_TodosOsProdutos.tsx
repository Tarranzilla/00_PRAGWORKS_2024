import React from "react";

import Icon_Industria from "../components/icons/hr/Icon_Industria";
import Icon_Varejo from "../components/icons/hr/Icon_Varejo";
import Icon_SaudeCuidado from "../components/icons/hr/Icon_SaudeCuidado";
import Icon_Cultura from "../components/icons/hr/Icon_Cultura";
import Icon_Hospitalidade from "../components/icons/hr/Icon_Hospitalidade";

import Icon_Atendimento from "../components/icons/hr/Icon_Atendimento";
import Icon_Compras from "../components/icons/hr/Icon_Compras";
import Icon_ExpPubli from "../components/icons/hr/Icon_ExpPubli";
import Icon_Inspecao from "../components/icons/hr/Icon_Inspecao";
import Icon_Transporte from "../components/icons/hr/Icon_Transporte";

import Icon_Navegação from "../components/icons/hr/Icon_Navegação";
import Icon_Interacoes from "../components/icons/hr/Icon_Interacoes";
import Icon_Rotas from "../components/icons/hr/Icon_Rotas";
import Icon_Recarrega from "../components/icons/hr/Icon_Recarrega";
import Icon_ReconhecimentoVisao from "../components/icons/hr/Icon_ReconhecimentoVisao";
import Icon_ReconhecimentoFala from "../components/icons/hr/Icon_ReconhecimentoFala";
import Icon_Idioma from "../components/icons/hr/Icon_Idioma";
import Icon_ColetaDados from "../components/icons/hr/Icon_ColetaDados";
import Icon_Midia from "../components/icons/hr/Icon_Midia";
import Icon_VideoChamada from "../components/icons/hr/Icon_VideoChamada";

import Icon_IntelNUC from "../components/icons/hr/Icon_IntelNUC";
import Icon_LIDAR from "../components/icons/hr/Icon_LIDAR";
import Icon_Ultrasom from "../components/icons/hr/Icon_Ultrasom";
import Icon_Camera from "../components/icons/hr/Icon_Camera";
import Icon_Tela from "../components/icons/hr/Icon_Tela";
import Icon_Som from "../components/icons/hr/Icon_Som";
import Icon_Bateria from "../components/icons/hr/Icon_Bateria";
import Icon_Wifi4gBlue from "../components/icons/hr/Icon_Wifi4gBlue";
import Icon_Modularidade from "../components/icons/hr/Icon_Modularidade";
import Icon_Customizacao from "../components/icons/hr/Icon_Customizacao";
import Icon_Brasil from "../components/icons/hr/Icon_Brasil";
import Icon_HarwareEspecial from "../components/icons/hr/Icon_HardwareEspecial";
import Icon_Carga from "../components/icons/hr/Icon_Carga";
import Icon_Download from "../components/icons/hr/Icon_Download";
import Icon_OpenWebLink from "../components/icons/hr/Icon_OpenWebLink";

import Icon_QuotePrice from "../components/icons/hr/Icon_QuotePrice";
import Icon_Demo from "../components/icons/hr/Icon_Demo";

import Product from "../types/00_Alt_Produto";

const Produtos: Product[] = [
    {
        domId: "produto-00",
        id: 1,
        prename: "RobiOS",
        name: "GO",
        class: "produtos",
        type: "robo",
        heroImg: "./imgs/products/RobiOS_GO_Hero_Image",
        backgroundImg: "./imgs/products/RobiOS_GO_Bg_Image/",
        detail_Images: ["./imgs/products/RobiOS_GO_Detail_Image_01", "./imgs/products/RobiOS_GO_Detail_Image_02"],
        object3D: "./objects3D/products/robios_go.gltf",
        textIntro: "Um robô interativo capaz de se locomover de forma autônoma e inteligente.",
        textDetail: [
            "O RobiOS GO é um robô interativo avançado que pode se mover de forma autônoma e inteligente. Ele foi projetado para atender a uma variedade de necessidades em diferentes setores, oferecendo um nível excepcional de autonomia e personalização.",
            "Esta é a solução perfeita para setores que exigem mobilidade e interação personalizada.",
            "Equipado com sensores de alta precisão, ele pode navegar por ambientes complexos, reconhecer objetos e rostos, e até mesmo se comunicar por voz. Sua capacidade de interagir com os usuários de forma personalizada o torna ideal para aplicações que vão desde hospitalidade até indústria.",
        ],

        buyPrice: 30000,
        rentPrice: 10000,
        cartQuantity: 0,

        producerName: "Laboratório Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "-23.5505199,-46.6333094",

        sellerName: "Comercial Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "-23.5505199,-46.6333094",
        relatedSectors: [
            {
                title: "Indústria",
                description:
                    "Robôs autônomos são usados na indústria para tarefas como automação de linhas de produção, inspeção de qualidade e transporte de materiais.",
                icon: <Icon_Industria />,
            },
            {
                title: "Varejo",
                description: "No varejo, os robôs podem ajudar com tarefas como atendimento ao cliente, entrega de produtos e inspeção de lojas.",
                icon: <Icon_Varejo />,
            },
            {
                title: "Saúde e Cuidado",
                description:
                    "Na área de saúde, os robôs podem ser usados para entrega de suprimentos, assistência a pacientes, monitoramento e videochamadas.",
                icon: <Icon_SaudeCuidado />,
            },
            {
                title: "Cultura",
                description:
                    "Em ambientes culturais, robôs autônomos podem fornecer informações turísticas, interações lúdicas e até mesmo apresentações artísticas.",
                icon: <Icon_Cultura />,
            },
            {
                title: "Hospitalidade",
                description: "Na hospitalidade, eles auxiliam em tarefas como serviço de quarto, transporte de bagagem e orientação aos hóspedes.",
                icon: <Icon_Hospitalidade />,
            },
        ],
        useCases: [
            {
                title: "Atendimento ao Cliente",
                description: "Pode oferecer suporte e informações aos clientes.",
                icon: <Icon_Atendimento />,
            },
            {
                title: "Acompanhamento de Compras",
                description: "Pode auxiliar os clientes durante suas compras, fornecendo orientação e informações.",
                icon: <Icon_Compras />,
            },
            {
                title: "Exposição de Peças Publicitárias",
                description: "Exibe publicidade e informações promocionais.",
                icon: <Icon_ExpPubli />,
            },
        ],
        capacities: [
            {
                title: "Autonomia de Navegação",
                description: "O robô pode se movimentar de forma independente e tomar decisões de navegação.",
                icon: <Icon_Navegação />,
            },
            {
                title: "Interações Personalizáveis",
                description: "Cada interação com as pessoas pode ser personalizada de maneira customizada com a experiência a ser oferecida.",
                icon: <Icon_Interacoes />,
            },
            {
                title: "Rotas Programáveis",
                description: "O robô pode se movimentar de forma independente e tomar decisões de navegação.",
                icon: <Icon_Rotas />,
            },
            {
                title: "Auto-Recarregável",
                description: "O robô pode retornar automaticamente à estação de recarga quando a bateria está fraca.",
                icon: <Icon_Recarrega />,
            },
            {
                title: "Reconhecimento Facial e de Objetos",
                description: "Reconhecemimento de rostos e objetos para tarefas de segurança e assistência.",
                icon: <Icon_ReconhecimentoVisao />,
            },
            {
                title: "Reconhecimento de Fala",
                description: "Compreensão de comandos de voz para interações mais naturais.",
                icon: <Icon_ReconhecimentoFala />,
            },
            {
                title: "Disponível em 3 Idiomas",
                description: "Suporte de interação para Inglês, Português e Espanhol, tornando-os mais acessíveis globalmente.",
                icon: <Icon_Idioma />,
            },
            {
                title: "Coleta de Dados, Pesquisa, CRM",
                description: "Pode captar dados relevantes para pesquisa de mercado e gestão de relacionamento com clientes.",
                icon: <Icon_ColetaDados />,
            },
            {
                title: "Reprodução de Mídia, Fotos e Vídeos",
                description: "Reproduz conteúdo multimídia para entretenimento e informação.",
                icon: <Icon_Midia />,
            },
            {
                title: "Acesso Remoto e Chamadas por Vídeo",
                description: "Permitem comunicação por vídeo para reuniões ou assistência remota.",
                icon: <Icon_VideoChamada />,
            },
        ],
        specifications: [
            {
                title: "Micro Computador Intel NUC",
                description: "Equipado com microcomputador Intel para processamento eficiente.",
                icon: <Icon_IntelNUC />,
            },
            {
                title: "Sensores de Navegação LIDAR",
                description: "Utiliza sensores LIDAR para mapeamento e navegação precisa.",
                icon: <Icon_LIDAR />,
            },
            {
                title: "Sensores de Navegação Ultrassom",
                description: "Conta com sensores de ultrassom adicionais para evitar obstáculos.",
                icon: <Icon_Ultrasom />,
            },
            {
                title: "Câmeras 4k e 1080p",
                description: "Possui câmeras de alta resolução para captura de imagens e vídeos.",
                icon: <Icon_Camera />,
            },
            {
                title: "Tela de 11 Polegadas 1080p",
                description: "Possui uma tela de 11 polegadas para exibição de informações.",
                icon: <Icon_Tela />,
            },
            {
                title: "Auto Falantes Hi-Fi",
                description: "Possui 2 auto falantes de alta potência que oferecem qualidade de áudio superior.",
                icon: <Icon_Som />,
            },
            {
                title: "2 Baterias Recarregáveis",
                description: "Permitem operação contínua por até 6 horas.",
                icon: <Icon_Bateria />,
            },
            {
                title: "Conectividade 4G, Wi-Fi e Bluetooth",
                description: "Conectividade versátil para comunicação e atualizações.",
                icon: <Icon_Wifi4gBlue />,
            },
            {
                title: "Hardware e Estrutura Modulares",
                description: "Componentes intercambiáveis para fácil manutenção, atualização e customização.",
                icon: <Icon_Modularidade />,
            },
            {
                title: "Aparência Virtual e Física Personalizável",
                description: "Design personalizável para atender às necessidades específicas do cliente.",
                icon: <Icon_Customizacao />,
            },
            {
                title: "Desenvolvido no Brasil",
                description: "Produto feito localmente, com suporte e desenvolvimento no Brasil.",
                icon: <Icon_Brasil />,
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
        roboTags: [
            "Robô",
            "Autônomo",
            "Interativo",
            "Móvel",
            "Navegação",
            "Reconhecimento Facial",
            "Reconhecimento de Objetos",
            "Reconhecimento de Voz",
        ],
    },
    {
        domId: "produto-01",
        id: 2,
        prename: "RobiOS",
        name: "INSPECTOR",
        class: "produtos",
        type: "robo",
        heroImg: "./imgs/products/RobiOS_Inspector_Hero_Image",
        backgroundImg: "./imgs/products/RobiOS_Inspector_Bg_Image/",
        detail_Images: ["./imgs/products/RobiOS_Inspector_Detail_Image_01", "./imgs/products/RobiOS_Inspector_Detail_Image_02"],
        object3D: "./objects3D/products/robios_Inspector.gltf",
        textIntro: "Um robô interativo para a inspeção de ambientes, produtos e equipamentos.",
        textDetail: [
            "O RobiOS INSPECTOR é um robô interativo desenvolvido para inspecionar ambientes, produtos e equipamentos de maneira eficiente. Ele é uma ferramenta valiosa para garantir qualidade e segurança.",
            "Especializado em tarefas de inspeção e vigilância e com sensores avançados, ele pode analisar minuciosamente ambientes, produtos e maquinário em busca de qualquer irregularidade ou padrão desejado.",
            "Sua capacidade de navegar de forma autônoma o torna uma opção econômica e minusciosa para a monitorização contínua em setores como indústria, varejo e saúde.",
        ],

        buyPrice: 30000,
        rentPrice: 10000,
        cartQuantity: 0,

        producerName: "Laboratório Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "-23.5505199,-46.6333094",

        sellerName: "Comercial Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "-23.5505199,-46.6333094",
        relatedSectors: [
            {
                title: "Indústria",
                description:
                    "Robôs autônomos são usados na indústria para tarefas como automação de linhas de produção, inspeção de qualidade e transporte de materiais.",
                icon: <Icon_Industria />,
            },
            {
                title: "Varejo",
                description: "No varejo, os robôs podem ajudar com tarefas como atendimento ao cliente, entrega de produtos e inspeção de lojas.",
                icon: <Icon_Varejo />,
            },
            {
                title: "Saúde e Cuidado",
                description:
                    "Na área de saúde, os robôs podem ser usados para entrega de suprimentos, assistência a pacientes, monitoramento e videochamadas.",
                icon: <Icon_SaudeCuidado />,
            },
            {
                title: "Cultura",
                description:
                    "Em ambientes culturais, robôs autônomos podem fornecer informações turísticas, interações lúdicas e até mesmo apresentações artísticas.",
                icon: <Icon_Cultura />,
            },
            {
                title: "Hospitalidade",
                description: "Na hospitalidade, eles auxiliam em tarefas como serviço de quarto, transporte de bagagem e orientação aos hóspedes.",
                icon: <Icon_Hospitalidade />,
            },
        ],
        useCases: [
            {
                title: "Atendimento ao Cliente",
                description: "Pode oferecer suporte e informações aos clientes.",
                icon: <Icon_Atendimento />,
            },
            {
                title: "Inspeção de Ambientes, Produtos e Maquinário",
                description: "Realiza inspeções detalhadas para garantir qualidade e segurança.",
                icon: <Icon_Inspecao />,
            },
        ],
        capacities: [
            {
                title: "Autonomia de Navegação",
                description: "O robô pode se movimentar de forma independente e tomar decisões de navegação.",
                icon: <Icon_Navegação />,
            },
            {
                title: "Interações Personalizáveis",
                description: "Cada interação com as pessoas pode ser personalizada de maneira customizada com a experiência a ser oferecida.",
                icon: <Icon_Interacoes />,
            },
            {
                title: "Rotas Programáveis",
                description: "O robô pode se movimentar de forma independente e tomar decisões de navegação.",
                icon: <Icon_Rotas />,
            },
            {
                title: "Auto-Recarregável",
                description: "O robô pode retornar automaticamente à estação de recarga quando a bateria está fraca.",
                icon: <Icon_Recarrega />,
            },
            {
                title: "Reconhecimento Facial e de Objetos",
                description: "Reconhecemimento de rostos e objetos para tarefas de segurança e assistência.",
                icon: <Icon_ReconhecimentoVisao />,
            },
            {
                title: "Reconhecimento de Fala",
                description: "Compreensão de comandos de voz para interações mais naturais.",
                icon: <Icon_ReconhecimentoFala />,
            },
            {
                title: "Disponível em 3 Idiomas",
                description: "Suporte de interação para Inglês, Português e Espanhol, tornando-os mais acessíveis globalmente.",
                icon: <Icon_Idioma />,
            },
            {
                title: "Coleta de Dados, Pesquisa, CRM",
                description: "Pode captar dados relevantes para pesquisa de mercado e gestão de relacionamento com clientes.",
                icon: <Icon_ColetaDados />,
            },
            {
                title: "Reprodução de Mídia, Fotos e Vídeos",
                description: "Reproduz conteúdo multimídia para entretenimento e informação.",
                icon: <Icon_Midia />,
            },
            {
                title: "Acesso Remoto e Chamadas por Vídeo",
                description: "Permitem comunicação por vídeo para reuniões ou assistência remota.",
                icon: <Icon_VideoChamada />,
            },
        ],
        specifications: [
            {
                title: "Sensor Ultrasônico Especial RobiOS",
                description: "Equipado com um sensor especialmente desenvolvido pela Human Robotics para inspeção.",
                icon: <Icon_HarwareEspecial />,
            },
            {
                title: "Micro Computador Intel NUC",
                description: "Equipado com microcomputador Intel para processamento eficiente.",
                icon: <Icon_IntelNUC />,
            },
            {
                title: "Sensores de Navegação LIDAR",
                description: "Utiliza sensores LIDAR para mapeamento e navegação precisa.",
                icon: <Icon_LIDAR />,
            },
            {
                title: "Sensores de Navegação Ultrassom",
                description: "Conta com sensores de ultrassom adicionais para evitar obstáculos.",
                icon: <Icon_Ultrasom />,
            },
            {
                title: "Câmeras 4k e 1080p",
                description: "Possui câmeras de alta resolução para captura de imagens e vídeos.",
                icon: <Icon_Camera />,
            },
            {
                title: "Tela de 11 Polegadas 1080p",
                description: "Possui uma tela de 11 polegadas para exibição de informações.",
                icon: <Icon_Tela />,
            },
            {
                title: "Auto Falantes Hi-Fi",
                description: "Possui 2 auto falantes de alta potência que oferecem qualidade de áudio superior.",
                icon: <Icon_Som />,
            },
            {
                title: "2 Baterias Recarregáveis",
                description: "Permitem operação contínua por até 6 horas.",
                icon: <Icon_Bateria />,
            },
            {
                title: "Conectividade 4G, Wi-Fi e Bluetooth",
                description: "Conectividade versátil para comunicação e atualizações.",
                icon: <Icon_Wifi4gBlue />,
            },
            {
                title: "Hardware e Estrutura Modulares",
                description: "Componentes intercambiáveis para fácil manutenção, atualização e customização.",
                icon: <Icon_Modularidade />,
            },
            {
                title: "Aparência Virtual e Física Personalizável",
                description: "Design personalizável para atender às necessidades específicas do cliente.",
                icon: <Icon_Customizacao />,
            },
            {
                title: "Desenvolvido no Brasil",
                description: "Produto feito localmente, com suporte e desenvolvimento no Brasil.",
                icon: <Icon_Brasil />,
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
        roboTags: [
            "Robô",
            "Autônomo",
            "Interativo",
            "Móvel",
            "Navegação",
            "Reconhecimento Facial",
            "Reconhecimento de Objetos",
            "Reconhecimento de Voz",
        ],
    },
    {
        domId: "produto-02",
        id: 3,
        prename: "RobiOS",
        name: "CARGO",
        class: "produtos",
        type: "robo",
        heroImg: "./imgs/products/RobiOS_Cargo_Hero_Image",
        backgroundImg: "./imgs/products/RobiOS_Cargo_Bg_Image/",
        detail_Images: ["./imgs/products/RobiOS_Cargo_Detail_Image_01", "./imgs/products/RobiOS_Cargo_Detail_Image_02"],
        object3D: "./objects3D/products/robios_Cargo.gltf",
        textIntro: "Um robô interativo que lhe permite armazenar e transportar objetos e ferramentas.",
        textDetail: [
            "O RobiOS CARGO é um robô interativo versátil que oferece armazenamento e transporte de objetos e ferramentas de forma autônoma. Ele é a escolha ideal para otimizar a logística e a movimentação de materiais.",
            "Com ele, você pode automatizar tarefas de transporte e entrega. Ele é capaz de carregar e entregar objetos com segurança, economizando tempo e recursos. Sua personalização flexível o torna adequado para setores que necessitam de movimentação de cargas, como varejo e indústria.",
        ],

        buyPrice: 30000,
        rentPrice: 10000,
        cartQuantity: 0,

        producerName: "Laboratório Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "-23.5505199,-46.6333094",

        sellerName: "Comercial Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "-23.5505199,-46.6333094",
        relatedSectors: [
            {
                title: "Indústria",
                description:
                    "Robôs autônomos são usados na indústria para tarefas como automação de linhas de produção, inspeção de qualidade e transporte de materiais.",
                icon: <Icon_Industria />,
            },
            {
                title: "Varejo",
                description: "No varejo, os robôs podem ajudar com tarefas como atendimento ao cliente, entrega de produtos e inspeção de lojas.",
                icon: <Icon_Varejo />,
            },
            {
                title: "Saúde e Cuidado",
                description:
                    "Na área de saúde, os robôs podem ser usados para entrega de suprimentos, assistência a pacientes, monitoramento e videochamadas.",
                icon: <Icon_SaudeCuidado />,
            },
            {
                title: "Hospitalidade",
                description: "Na hospitalidade, eles auxiliam em tarefas como serviço de quarto, transporte de bagagem e orientação aos hóspedes.",
                icon: <Icon_Hospitalidade />,
            },
        ],
        useCases: [
            {
                title: "Inspeção de Ambientes, Produtos e Maquinário",
                description: "Realiza inspeções detalhadas para garantir qualidade e segurança.",
                icon: <Icon_Inspecao />,
            },
            {
                title: "Transporte de Objetos",
                description: "Movimenta objetos de um local para outro de forma autônoma.",
                icon: <Icon_Transporte />,
            },
        ],
        capacities: [
            {
                title: "Autonomia de Navegação",
                description: "O robô pode se movimentar de forma independente e tomar decisões de navegação.",
                icon: <Icon_Navegação />,
            },
            {
                title: "Interações Personalizáveis",
                description: "Cada interação com as pessoas pode ser personalizada de maneira customizada com a experiência a ser oferecida.",
                icon: <Icon_Interacoes />,
            },
            {
                title: "Rotas Programáveis",
                description: "O robô pode se movimentar de forma independente e tomar decisões de navegação.",
                icon: <Icon_Rotas />,
            },
            {
                title: "Auto-Recarregável",
                description: "O robô pode retornar automaticamente à estação de recarga quando a bateria está fraca.",
                icon: <Icon_Recarrega />,
            },
            {
                title: "Reconhecimento Facial e de Objetos",
                description: "Reconhecemimento de rostos e objetos para tarefas de segurança e assistência.",
                icon: <Icon_ReconhecimentoVisao />,
            },
            {
                title: "Reconhecimento de Fala",
                description: "Compreensão de comandos de voz para interações mais naturais.",
                icon: <Icon_ReconhecimentoFala />,
            },
            {
                title: "Disponível em 3 Idiomas",
                description: "Suporte de interação para Inglês, Português e Espanhol, tornando-os mais acessíveis globalmente.",
                icon: <Icon_Idioma />,
            },
            {
                title: "Coleta de Dados, Pesquisa, CRM",
                description: "Pode captar dados relevantes para pesquisa de mercado e gestão de relacionamento com clientes.",
                icon: <Icon_ColetaDados />,
            },
            {
                title: "Reprodução de Mídia, Fotos e Vídeos",
                description: "Reproduz conteúdo multimídia para entretenimento e informação.",
                icon: <Icon_Midia />,
            },
            {
                title: "Acesso Remoto e Chamadas por Vídeo",
                description: "Permitem comunicação por vídeo para reuniões ou assistência remota.",
                icon: <Icon_VideoChamada />,
            },
        ],
        specifications: [
            {
                title: "Compartimento de Carga",
                description: "Equipado com um compartimento de carga modular e capaz de suportar até 30kg.",
                icon: <Icon_Carga />,
            },
            {
                title: "Micro Computador Intel NUC",
                description: "Equipado com microcomputador Intel para processamento eficiente.",
                icon: <Icon_IntelNUC />,
            },
            {
                title: "Sensores de Navegação LIDAR",
                description: "Utiliza sensores LIDAR para mapeamento e navegação precisa.",
                icon: <Icon_LIDAR />,
            },
            {
                title: "Sensores de Navegação Ultrassom",
                description: "Conta com sensores de ultrassom adicionais para evitar obstáculos.",
                icon: <Icon_Ultrasom />,
            },
            {
                title: "Câmeras 4k e 1080p",
                description: "Possui câmeras de alta resolução para captura de imagens e vídeos.",
                icon: <Icon_Camera />,
            },
            {
                title: "Tela de 11 Polegadas 1080p",
                description: "Possui uma tela de 11 polegadas para exibição de informações.",
                icon: <Icon_Tela />,
            },
            {
                title: "Auto Falantes Hi-Fi",
                description: "Possui 2 auto falantes de alta potência que oferecem qualidade de áudio superior.",
                icon: <Icon_Som />,
            },
            {
                title: "2 Baterias Recarregáveis",
                description: "Permitem operação contínua por até 6 horas.",
                icon: <Icon_Bateria />,
            },
            {
                title: "Conectividade 4G, Wi-Fi e Bluetooth",
                description: "Conectividade versátil para comunicação e atualizações.",
                icon: <Icon_Wifi4gBlue />,
            },
            {
                title: "Hardware e Estrutura Modulares",
                description: "Componentes intercambiáveis para fácil manutenção, atualização e customização.",
                icon: <Icon_Modularidade />,
            },
            {
                title: "Aparência Virtual e Física Personalizável",
                description: "Design personalizável para atender às necessidades específicas do cliente.",
                icon: <Icon_Customizacao />,
            },
            {
                title: "Desenvolvido no Brasil",
                description: "Produto feito localmente, com suporte e desenvolvimento no Brasil.",
                icon: <Icon_Brasil />,
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
        roboTags: [
            "Robô",
            "Autônomo",
            "Interativo",
            "Móvel",
            "Navegação",
            "Reconhecimento Facial",
            "Reconhecimento de Objetos",
            "Reconhecimento de Voz",
        ],
    },
    {
        domId: "produto-03",
        id: 4,
        prename: "",
        name: "RobiOS",
        class: "softwares",
        type: "essential",
        heroImg: "./imgs/products/RobiOS_Hero_Image",
        backgroundImg: "./imgs/products/RobiOS_Bg_Image/",
        detail_Images: ["./imgs/products/RobiOS_Detail_Image_01", "./imgs/products/RobiOS_Detail_Image_02"],
        object3D: "./objects3D/products/robios.gltf",
        textIntro:
            "Um sistema operacional robótico capaz de gerenciar e controlar robôs autônomos móveis, com uma interface gráfica intuitiva e de fácil utilização.",
        textDetail: [
            "O RobiOS é um sistema operacional robótico abrangente que gerencia e controla robôs autônomos móveis. Ele exerce o papel de ponte entre o hardware e a interface gráfica, sendo também responsável pela emulação da inteligência artificial dos nossos robôs e assistentes.",
            "Este é o cérebro por trás de todos os produtos da Human Robotics. Ele fornece uma plataforma centralizada para gerenciar e coordenar seus robôs. ",
            "Com uma interface gráfica amigável, os operadores podem programar trajetos, definir comportamentos básicos e monitorar o desempenho em tempo real. Isso o torna um elemento fundamental em aplicações que dependem de múltiplos robôs, como logística e segurança.",
        ],

        buyPrice: 30000,
        rentPrice: 10000,
        cartQuantity: 0,

        producerName: "Laboratório Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "-23.5505199,-46.6333094",

        sellerName: "Comercial Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "-23.5505199,-46.6333094",
        relatedSectors: [],
        useCases: [],
        capacities: [],
        specifications: [
            {
                title: "Disponível para Download",
                description: "Aplicação disponível para download em Google PlayStore.",
                icon: <Icon_Download />,
            },
            {
                title: "Disponível como Serviço Web",
                description: "Aplicação disponível também em formato web em nosso site.",
                icon: <Icon_OpenWebLink />,
            },
            {
                title: "Desenvolvido no Brasil",
                description: "Produto feito localmente, com suporte e desenvolvimento no Brasil.",
                icon: <Icon_Brasil />,
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
        roboTags: [
            "Robô",
            "Autônomo",
            "Interativo",
            "Móvel",
            "Navegação",
            "Reconhecimento Facial",
            "Reconhecimento de Objetos",
            "Reconhecimento de Voz",
        ],
    },
    {
        domId: "produto-00",
        id: 5,
        prename: "RobiOS",
        name: "Studio",
        class: "softwares",
        type: "essential",
        heroImg: "./imgs/products/RobiOS_Studio_Hero_Image",
        backgroundImg: "./imgs/products/RobiOS_Studio_Bg_Image/",
        detail_Images: ["./imgs/products/RobiOS_Studio_Detail_Image_01", "./imgs/products/RobiOS_Studio_Detail_Image_02"],
        object3D: "./objects3D/products/robios_studio.gltf",
        textIntro: "Plataforma para a personalização das ações dos robôs e assistentes, com uma interface gráfica intuitiva e fácil de usar.",
        textDetail: [
            "O RobiOS Studio é uma plataforma de personalização que permite definir as ações e comportamentos dos robôs e assistentes. Ele possui uma interface gráfica intuitiva para simplificar o processo de personalização.",
            "O RobiOS Studio é uma ferramenta essencial para adaptar os robôs às necessidades específicas de diferentes aplicativos.",
            "Com ele, você pode criar sequências de ações personalizadas, definir respostas a comandos de voz e até mesmo criar novos comportamentos. É uma solução versátil que oferece a flexibilidade necessária para tornar os robôs autônomos uma parte integrante de diversos setores.",
        ],

        buyPrice: 30000,
        rentPrice: 10000,
        cartQuantity: 0,

        producerName: "Laboratório Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "-23.5505199,-46.6333094",

        sellerName: "Comercial Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "-23.5505199,-46.6333094",
        relatedSectors: [],
        useCases: [],
        capacities: [],
        specifications: [
            {
                title: "Disponível para Download",
                description: "Aplicação disponível para download em Google PlayStore.",
                icon: <Icon_Download />,
            },
            {
                title: "Disponível como Serviço Web",
                description: "Aplicação disponível também em formato web em nosso site.",
                icon: <Icon_OpenWebLink />,
            },
            {
                title: "Desenvolvido no Brasil",
                description: "Produto feito localmente, com suporte e desenvolvimento no Brasil.",
                icon: <Icon_Brasil />,
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
        roboTags: [
            "Robô",
            "Autônomo",
            "Interativo",
            "Móvel",
            "Navegação",
            "Reconhecimento Facial",
            "Reconhecimento de Objetos",
            "Reconhecimento de Voz",
        ],
    },
    {
        domId: "produto-05",
        id: 6,
        prename: "RobiOS",
        name: "AVATAR",
        class: "softwares",
        type: "essential",
        heroImg: "./imgs/products/RobiOS_Avatar_Hero_Image",
        backgroundImg: "./imgs/products/RobiOS_Avatar_Bg_Image/",
        detail_Images: ["./imgs/products/RobiOS_Avatar_Detail_Image_01", "./imgs/products/RobiOS_Avatar_Detail_Image_02"],
        object3D: "./objects3D/products/robios_avatar.gltf",
        textIntro: "Software capaz de emular Avatares - assistentes virtuais que podem ser acessados em qualquer dispositivo móvel ou inteligente.",
        textDetail: [
            "O RobiOS AVATAR é um software inovador que permite emular Avatares - assistentes virtuais acessíveis em dispositivos móveis ou inteligentes.",
            "O RobiOS AVATAR é uma solução que transcende os robôs físicos. Ele oferece assistentes virtuais que podem ser acessados em dispositivos móveis e inteligentes, tornando a interação com os serviços da Human Robotics mais conveniente do que nunca.",
            "Esses avatares podem ser personalizados e oferecem suporte, informações e interações adaptadas às necessidades dos usuários em diferentes setores, como atendimento ao cliente e entretenimento.",
        ],

        buyPrice: 30000,
        rentPrice: 10000,
        cartQuantity: 0,

        producerName: "Laboratório Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "-23.5505199,-46.6333094",

        sellerName: "Comercial Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "-23.5505199,-46.6333094",
        relatedSectors: [
            {
                title: "Varejo",
                description: "No varejo, os robôs podem ajudar com tarefas como atendimento ao cliente, entrega de produtos e inspeção de lojas.",
                icon: <Icon_Varejo />,
            },
            {
                title: "Saúde e Cuidado",
                description:
                    "Na área de saúde, os robôs podem ser usados para entrega de suprimentos, assistência a pacientes, monitoramento e videochamadas.",
                icon: <Icon_SaudeCuidado />,
            },
            {
                title: "Cultura",
                description:
                    "Em ambientes culturais, robôs autônomos podem fornecer informações turísticas, interações lúdicas e até mesmo apresentações artísticas.",
                icon: <Icon_Cultura />,
            },
            {
                title: "Hospitalidade",
                description: "Na hospitalidade, eles auxiliam em tarefas como serviço de quarto, transporte de bagagem e orientação aos hóspedes.",
                icon: <Icon_Hospitalidade />,
            },
        ],
        useCases: [
            {
                title: "Atendimento ao Cliente",
                description: "Pode oferecer suporte e informações aos clientes.",
                icon: <Icon_Atendimento />,
            },
            {
                title: "Acompanhamento de Compras",
                description: "Pode auxiliar os clientes durante suas compras, fornecendo orientação e informações.",
                icon: <Icon_Compras />,
            },
            {
                title: "Exposição de Peças Publicitárias",
                description: "Exibe publicidade e informações promocionais.",
                icon: <Icon_ExpPubli />,
            },
        ],
        capacities: [
            {
                title: "Interações Personalizáveis",
                description: "Cada interação com as pessoas pode ser personalizada de maneira customizada com a experiência a ser oferecida.",
                icon: <Icon_Interacoes />,
            },
            {
                title: "Reconhecimento Facial e de Objetos",
                description: "Reconhecemimento de rostos e objetos para tarefas de segurança e assistência.",
                icon: <Icon_ReconhecimentoVisao />,
            },
            {
                title: "Reconhecimento de Fala",
                description: "Compreensão de comandos de voz para interações mais naturais.",
                icon: <Icon_ReconhecimentoFala />,
            },
            {
                title: "Disponível em 3 Idiomas",
                description: "Suporte de interação para Inglês, Português e Espanhol, tornando-os mais acessíveis globalmente.",
                icon: <Icon_Idioma />,
            },
            {
                title: "Coleta de Dados, Pesquisa, CRM",
                description: "Pode captar dados relevantes para pesquisa de mercado e gestão de relacionamento com clientes.",
                icon: <Icon_ColetaDados />,
            },
            {
                title: "Reprodução de Mídia, Fotos e Vídeos",
                description: "Reproduz conteúdo multimídia para entretenimento e informação.",
                icon: <Icon_Midia />,
            },
            {
                title: "Acesso Remoto e Chamadas por Vídeo",
                description: "Permitem comunicação por vídeo para reuniões ou assistência remota.",
                icon: <Icon_VideoChamada />,
            },
        ],
        specifications: [
            {
                title: "Disponível para Download",
                description: "Aplicação disponível para download em Google PlayStore.",
                icon: <Icon_Download />,
            },
            {
                title: "Disponível como Serviço Web",
                description: "Aplicação disponível também em formato web em nosso site.",
                icon: <Icon_OpenWebLink />,
            },
            {
                title: "Desenvolvido no Brasil",
                description: "Produto feito localmente, com suporte e desenvolvimento no Brasil.",
                icon: <Icon_Brasil />,
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
        roboTags: [
            "Robô",
            "Autônomo",
            "Interativo",
            "Móvel",
            "Navegação",
            "Reconhecimento Facial",
            "Reconhecimento de Objetos",
            "Reconhecimento de Voz",
        ],
    },
];

export default Produtos;
