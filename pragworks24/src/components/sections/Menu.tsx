// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import {
    setActiveSection,
    toggleMenu,
    setActiveProduct,
    toggleProductDetails,
    setActiveProductClass,
    togglePrivacyPolicy,
    toggleTerms,
    toggleSiteMap,
    setMode,
    toggleCurrency,
    toggleLanguage,
} from "../../context/main-context.tsx";
import { persistor } from "../../main.tsx";
import { delay } from "@reduxjs/toolkit/dist/utils";

const Section_Menu = forwardRef(function Section_Menu(props, ref: any) {
    const [configIsOpen, setConfigIsOpen] = useState(false);
    const toggleConfig = () => {
        setConfigIsOpen(!configIsOpen);
    };

    const [productsIsOpen, setProductsIsOpen] = useState(false);
    const toggleProducts = () => {
        setProductsIsOpen(!productsIsOpen);
    };

    const [solutionsIsOpen, setSolutionsIsOpen] = useState(false);
    const toggleSolutions = () => {
        setSolutionsIsOpen(!solutionsIsOpen);
    };

    const [privacyIsOpen, setPrivacyIsOpen] = useState(false);
    const togglePrivacy = () => {
        setPrivacyIsOpen(!privacyIsOpen);
        setTermsIsOpen(false);
        setSiteMapIsOpen(false);
    };

    const [termsIsOpen, setTermsIsOpen] = useState(false);
    const toggleTerms2 = () => {
        setPrivacyIsOpen(false);
        setTermsIsOpen(!termsIsOpen);
        setSiteMapIsOpen(false);
    };

    const [siteMapIsOpen, setSiteMapIsOpen] = useState(false);
    const toggleSiteMap2 = () => {
        setPrivacyIsOpen(false);
        setTermsIsOpen(false);
        setSiteMapIsOpen(!siteMapIsOpen);
    };

    const dispatch = useDispatch();

    const productDetailsIsOpen = useSelector((state: any) => state.productDetailsIsOpen);
    const mode = useSelector((state: any) => state.mode);
    const currencyType = useSelector((state: any) => state.currencyType);
    const language = useSelector((state: any) => state.language);

    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    const handleResetButton = () => {
        persistor.purge();
        window.location.reload();
    };

    const toggleMenuButton = () => {
        dispatch(toggleMenu());
    };

    const toggleProductDetailsButton = (productClass, productId) => {
        dispatch(toggleMenu());
        dispatch(setActiveProductClass(productClass));
        dispatch(setActiveProduct({ id: productId }));
        if (!productDetailsIsOpen) {
            dispatch(toggleProductDetails());
        }
    };

    const togglePrivacyButton = () => {
        dispatch(togglePrivacyPolicy());
        dispatch(toggleMenu());
    };

    const toggleTermsButton = () => {
        dispatch(toggleTerms());
        dispatch(toggleMenu());
    };

    const toggleSiteMapButton = () => {
        dispatch(toggleSiteMap());
        dispatch(toggleMenu());
    };

    const toggleCurrencyButton = () => {
        dispatch(toggleCurrency());
    };

    const toggleLanguageButton = () => {
        dispatch(toggleLanguage());
    };

    const toggleColorModeButton = () => {
        dispatch(setMode());
        // "light" || "dark"
    };

    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onViewportEnter={() => {
                console.log("Menu está visível!");
                setActiveSectionFunction(6);
            }}
            transition={{ duration: 1.0, type: "tween" }}
            className="LP_Section"
            id="menu"
            key={"menu_key"}
        >
            <a href="#" className="material-icons Menu_GoUp_Btn hoverable undecorated">
                keyboard_double_arrow_up
            </a>
            <h1 className="LP_Section_Title">Menu</h1>
            <div className="Menu_Container">
                <m.div className="Menu_Options">
                    <AnimatePresence mode="popLayout">
                        {!privacyIsOpen && !termsIsOpen && !siteMapIsOpen && (
                            <m.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                                className="Menu_Options_Logo_Container"
                                key={"Options_Logo_Container"}
                            >
                                <m.svg
                                    className="Options_Svg hoverable"
                                    width="260"
                                    height="288"
                                    viewBox="0 0 260 288"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    drag
                                    dragSnapToOrigin
                                >
                                    <path d="M238.433 56.6549L151.411 6.41617C138.16 -1.23247 121.836 -1.23247 108.586 6.41617L21.5629 56.6549C8.31225 64.3097 0.150391 78.4445 0.150391 93.748V196.878C0.150391 205.745 3.22345 214.166 8.61522 220.857C11.2987 224.183 16.7091 222.18 16.7152 217.907C16.7523 198.708 16.7523 179.503 16.6843 160.31C16.7214 153.923 21.9648 148.995 27.3875 146.46C35.234 142.558 45.1395 144.271 51.7927 149.78C55.3851 152.742 57.809 157.231 57.8337 161.93C58.081 191.165 58.0625 220.387 57.8893 249.621C57.877 251.266 58.755 252.793 60.1771 253.615L65.3834 256.62C68.4194 258.37 72.2282 256.218 72.2715 252.713C72.5065 232.091 72.1602 211.464 72.3519 190.837C72.2344 186.447 74.244 182.193 77.3912 179.194C84.91 172.275 97.0724 171.471 105.803 176.541C109.995 179.002 113.798 183.281 113.742 188.401C113.681 219.354 113.656 250.307 113.619 281.26C113.619 283.159 114.769 284.884 116.543 285.552C127.154 289.54 139.112 288.662 149.11 282.887L238.427 231.319C251.678 223.67 259.84 209.529 259.84 194.232V93.748C259.84 78.4445 251.678 64.3097 238.427 56.661L238.433 56.6549ZM56.6836 123.99C52.7078 134.248 39.9085 140.036 29.6629 135.726C22.4595 132.845 17.0491 125.715 16.6349 117.906C15.8929 108.439 23.1644 99.418 32.297 97.3467C34.1087 96.8767 35.9822 96.6603 37.8495 96.6974C41.9614 96.784 46.0361 98.0948 49.307 100.63C56.3744 105.768 60.0782 115.686 56.6774 123.984L56.6836 123.99ZM113.143 162.697C112.629 164.107 111.009 164.626 109.643 164.521C98.2596 164.515 86.8701 164.54 75.493 164.515C73.4649 164.75 72.6178 162.295 72.5498 160.669C72.3704 150.052 72.5745 139.442 72.4817 128.825C72.4817 128.807 72.4817 128.795 72.4817 128.776C72.3766 126.482 74.1698 124.503 76.4576 124.287C77.4716 124.188 78.4918 124.157 79.5183 124.145C81.299 124.126 83.086 124.194 84.8606 124.163C93.3934 124.281 101.914 124.101 110.447 124.2C112.53 124.021 113.755 126.272 113.687 128.096C113.835 137.395 113.563 146.689 113.767 155.988C113.742 158.227 113.841 160.527 113.155 162.691L113.143 162.697Z" />
                                </m.svg>
                            </m.div>
                        )}

                        {privacyIsOpen && (
                            <m.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                                className="Privacy_Container"
                                key={"Privacy_Container"}
                            >
                                <h2>Privacidade</h2>
                                <p>
                                    Nossa Política de Privacidade explica quais dados pessoais coletamos, como usamos os dados pessoais, como os dados
                                    pessoais são compartilhados e os direitos de privacidade.
                                </p>

                                <h3>1. DEFINIÇÕES</h3>
                                <p>
                                    Termos não definidos nesta Política de Privacidade têm a mesma definição que em nossos{" "}
                                    <a href="#Termos">Termos de Serviço</a> (“Termos”).
                                </p>
                                <h3>2. DADOS PESSOAIS QUE COLETAMOS</h3>
                                <h4>2.1 Informações necessárias para usar a Loja Tropical Cacau</h4>
                                <p>
                                    Nós coletamos dados pessoais sobre você quando você usa a Loja. Sem essas informações, poderemos não ser capazes
                                    de fornecer todos os serviços que você solicitar. Essas informações incluem:
                                </p>

                                <p>
                                    <strong>Informações de contato, da conta e do perfil.</strong>Como nome, sobrenome, número de telefone, endereço
                                    postal, endereço de email, data de nascimento e foto de perfil, dos quais alguns dependerão dos recursos que você
                                    usa.
                                </p>
                                <p>
                                    <strong>Verificação de identidade e informações de pagamento.</strong>Como imagens do seu documento de
                                    identificação oficial (conforme permitido pelas leis aplicáveis), número do seu documento de identificação oficial
                                    ou outras informações de verificação, uma selfie quando verificamos seu documento de identificação oficial, conta
                                    bancária ou informações de conta de pagamento. Se você não for um usuário do Airbnb, poderemos receber informações
                                    de pagamento relacionadas a você, como quando um usuário do Airbnb fornece seu cartão de pagamento para concluir
                                    uma reserva. Se nos for fornecida uma cópia do seu documento de identificação oficial, poderemos digitalizar,
                                    utilizar e armazenar as informações contidas no seu documento de identificação oficial para verificar a sua
                                    identidade e por razões de segurança.
                                </p>
                                <h4>2.2 Informações que você opta por nos fornecer</h4>
                                <p>Você pode optar por nos fornecer dados pessoais adicionais. Essas informações podem incluir:</p>
                                <p>
                                    <strong>Informações de perfil adicionais.</strong>Como gênero, idiomas preferidos, cidade e descrição pessoal.
                                    Algumas dessas informações, conforme indicado nas configurações da sua Conta, fazem parte da página do seu perfil
                                    público e serão publicamente visíveis.
                                </p>
                                <p>
                                    <strong>Outras informações.</strong>Por exemplo, quando você preenche um formulário, adiciona informações à sua
                                    conta, responde a pesquisas, posta em fóruns da comunidade, participa de promoções, se comunica com o Atendimento
                                    ao Cliente Airbnb e com outros Membros, importa ou insere manualmente contatos, fornece seu endereço e/ou
                                    localização geográfica ou compartilha sua experiência conosco. Isso pode incluir informações de saúde se você
                                    optar por compartilhá-las conosco.
                                </p>
                                <h3>
                                    2.3 Informações coletadas automaticamente quando você usa a Loja Tropical Cacau e nossos Serviços de Pagamento.
                                </h3>
                                <p>
                                    Quando você usa a Loja Tropical Cacau e os Serviços de Pagamento, coletamos automaticamente dados pessoais e
                                    outros tipos de dados. Essas informações podem incluir:
                                </p>
                                <p>
                                    <strong>Informações de geolocalização.</strong> Como a localização precisa ou aproximada determinada a partir do
                                    seu endereço de IP, celular ou GPS de outro dispositivo, ou outras informações que você compartilha conosco,
                                    dependendo das configurações do seu dispositivo. Também podemos coletar essas informações quando você não estiver
                                    usando o aplicativo se você habilitar isso por meio de suas configurações ou permissões de dispositivo.
                                </p>
                                <p>
                                    <strong>Informações de uso.</strong> Como páginas e conteúdo que você visualiza, buscas por Anúncios, reservas que
                                    você fez, serviços extras que você adicionou e outras ações na Plataforma Airbnb.
                                </p>
                                <p>
                                    <strong>Dados de log e informações do dispositivo.</strong> Como detalhes sobre como você usou a Plataforma Airbnb
                                    (incluindo se você clicou em links para aplicativos de terceiros), endereço de IP, datas e horários de acesso,
                                    informações de hardware e software, informações do dispositivo, informações de eventos do dispositivo,
                                    identificadores exclusivos, dados de falha e as páginas que você visualizou ou interagiu antes e depois de usar a
                                    Plataforma Airbnb. Podemos coletar essas informações mesmo que você não tenha criado ou acessado uma conta do
                                    Airbnb.
                                </p>
                                <p>
                                    <strong>Cookies e tecnologias semelhantes</strong>, conforme descrito em nossa{" "}
                                    <a href="#Cookies">Política de cookies</a>.
                                </p>
                                <p>
                                    <strong>Informações de transação de pagamento.</strong> Como instrumento de pagamento usado, data e hora, valor do
                                    pagamento, data de vencimento do instrumento de pagamento e código postal de cobrança, endereço de email do
                                    PayPal, informações do IBAN, seu endereço e outras informações relacionadas à transação.
                                </p>
                            </m.div>
                        )}

                        {termsIsOpen && (
                            <m.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                                className="Terms_Container"
                                key={"Terms_Container"}
                            >
                                <p>Termos</p>
                                <p>Nossos Termos de Serviço explicam seus direitos legais e certas obrigações legais que você tem.</p>
                            </m.div>
                        )}

                        {siteMapIsOpen && (
                            <m.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                                className="SiteMap_Container"
                                key={"SiteMap_Container"}
                            >
                                <p>Mapa do Site</p>
                            </m.div>
                        )}
                    </AnimatePresence>
                </m.div>
                <m.div layout className="Menu_Main_List">
                    <div className="Main_List_Header">
                        <a href="#" className="Menu_Link Header_Link hoverable undecorated" onClick={toggleMenuButton} id="menu-inicio">
                            <div className="Header_Link_Organizer">
                                <span className="material-icons LP_Links_Icon">flag_circle</span>
                                <p>Início</p>
                            </div>
                            <div className="Menu_Link_Actions">
                                <a href="#" className="material-icons hoverable undecorated">
                                    keyboard_double_arrow_up
                                </a>
                            </div>
                        </a>
                    </div>
                    <div className="List_Horizontal_Organizer">
                        <div className="List_Line_Container">
                            <div className="List_Line"></div>
                        </div>
                        <div className="LP_Links">
                            <div className="Links_Container">
                                <m.div className="Links_Header">
                                    <a href="#menu-inicio" className="Menu_Link hoverable undecorated" onClick={toggleProducts}>
                                        <p>Produtos</p>

                                        <div className="Menu_Link_Actions">
                                            <a href="#lista-de-produtos" className="material-icons hoverable undecorated" onClick={toggleProducts}>
                                                more
                                            </a>
                                            <a href="#produtos" className="material-icons hoverable undecorated" onClick={toggleMenuButton}>
                                                keyboard_double_arrow_up
                                            </a>
                                        </div>
                                    </a>
                                </m.div>
                                <AnimatePresence>
                                    {productsIsOpen && (
                                        <m.div
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            layoutScroll
                                            variants={{
                                                open: { opacity: 1, height: "auto" },
                                                collapsed: { opacity: 0, height: 0 },
                                            }}
                                            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98], delay: 0.2 }}
                                            className="List_Horizontal_Organizer"
                                        >
                                            <m.div
                                                key={"List_Line_Container1"}
                                                layoutScroll
                                                variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className="List_Line_Container"
                                            >
                                                <div className="List_Line"></div>
                                            </m.div>
                                            <m.div
                                                key={"Product_Links1"}
                                                layoutScroll
                                                variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className="Product_Links"
                                            >
                                                <a
                                                    href="#produtos"
                                                    className="Menu_Link hoverable undecorated"
                                                    onClick={() => {
                                                        toggleProductDetailsButton("robos", 0);
                                                    }}
                                                >
                                                    RobiOS GO
                                                </a>
                                                <a
                                                    href="#produtos"
                                                    className="Menu_Link hoverable undecorated"
                                                    onClick={() => {
                                                        toggleProductDetailsButton("robos", 1);
                                                    }}
                                                >
                                                    RobiOS Inspector
                                                </a>
                                                <a
                                                    href="#produtos"
                                                    className="Menu_Link hoverable undecorated"
                                                    onClick={() => {
                                                        toggleProductDetailsButton("robos", 2);
                                                    }}
                                                >
                                                    RobiOS Cargo
                                                </a>
                                                <a
                                                    href="#produtos"
                                                    className="Menu_Link hoverable undecorated"
                                                    onClick={() => {
                                                        toggleProductDetailsButton("softwares", 3);
                                                    }}
                                                >
                                                    RobiOS
                                                </a>
                                                <a
                                                    href="#produtos"
                                                    className="Menu_Link hoverable undecorated"
                                                    onClick={() => {
                                                        toggleProductDetailsButton("softwares", 4);
                                                    }}
                                                >
                                                    RobiOS Studio
                                                </a>
                                                <a
                                                    href="#produtos"
                                                    className="Menu_Link hoverable undecorated"
                                                    onClick={() => {
                                                        toggleProductDetailsButton("softwares", 5);
                                                    }}
                                                >
                                                    RobiOS Avatar
                                                </a>
                                            </m.div>
                                        </m.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="Links_Container">
                                <m.div className="Links_Header" key={"Links_Header_Solucoes"}>
                                    <div className="Menu_Link hoverable undecorated" onClick={toggleSolutions}>
                                        <p>Soluções</p>

                                        <div className="Menu_Link_Actions">
                                            <a href="#lista-de-solucoes" className="material-icons hoverable undecorated" onClick={toggleSolutions}>
                                                more
                                            </a>
                                            <a href="#solucoes" className="material-icons hoverable undecorated" onClick={toggleMenuButton}>
                                                keyboard_double_arrow_up
                                            </a>
                                        </div>
                                    </div>
                                </m.div>

                                <AnimatePresence>
                                    {solutionsIsOpen && (
                                        <m.div
                                            key="content_solucoes"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            layoutScroll
                                            variants={{
                                                open: { opacity: 1, height: "auto" },
                                                collapsed: { opacity: 0, height: 0 },
                                            }}
                                            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98], delay: 0.2 }}
                                            className="List_Horizontal_Organizer"
                                        >
                                            <m.div
                                                key={"List_Line_Container2"}
                                                layoutScroll
                                                variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className="List_Line_Container"
                                            >
                                                <div className="List_Line"></div>
                                            </m.div>
                                            <m.div
                                                layoutScroll
                                                variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className="Product_Links"
                                            >
                                                <a
                                                    href="#solucoes"
                                                    className="Menu_Link hoverable undecorated"
                                                    onClick={() => {
                                                        toggleProductDetailsButton("robos", 0);
                                                    }}
                                                >
                                                    Atendimento
                                                </a>
                                                <a
                                                    href="#solucoes"
                                                    className="Menu_Link hoverable undecorated"
                                                    onClick={() => {
                                                        toggleProductDetailsButton("robos", 1);
                                                    }}
                                                >
                                                    Publicidade
                                                </a>
                                                <a
                                                    href="#solucoes"
                                                    className="Menu_Link hoverable undecorated"
                                                    onClick={() => {
                                                        toggleProductDetailsButton("robos", 2);
                                                    }}
                                                >
                                                    Inspeção
                                                </a>
                                                <a
                                                    href="#solucoes"
                                                    className="Menu_Link hoverable undecorated"
                                                    onClick={() => {
                                                        toggleProductDetailsButton("softwares", 3);
                                                    }}
                                                >
                                                    Transporte
                                                </a>
                                            </m.div>
                                        </m.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <a href="#sobre" className="Menu_Link hoverable undecorated" onClick={toggleMenuButton}>
                                <p>Sobre</p>
                                <div className="Menu_Link_Actions">
                                    <a href="#sobre" className="material-icons hoverable undecorated" onClick={toggleMenuButton}>
                                        keyboard_double_arrow_up
                                    </a>
                                </div>
                            </a>

                            <a href="#contato" className="Menu_Link hoverable undecorated" onClick={toggleMenuButton}>
                                <p>Contato</p>
                                <div className="Menu_Link_Actions">
                                    <a href="#contato" className="material-icons hoverable undecorated" onClick={toggleMenuButton}>
                                        keyboard_double_arrow_up
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="Secondary_Links">
                        <a href="#privacidade" className="Menu_Link_Secondary hoverable undecorated" onClick={togglePrivacy}>
                            <div className="Header_Link_Organizer">
                                <span className="material-icons">privacy_tip</span>
                                <p>Privacidade</p>
                            </div>

                            <a href="#privacidade" className="material-icons hoverable undecorated" onClick={togglePrivacy}>
                                more
                            </a>
                        </a>
                        <a href="#termos" className="Menu_Link_Secondary hoverable undecorated" onClick={toggleTerms2}>
                            <div className="Header_Link_Organizer">
                                <span className="material-icons">assignment</span>
                                <p>Termos</p>
                            </div>
                            <a href="#termos" className="material-icons hoverable undecorated" onClick={toggleTerms2}>
                                more
                            </a>
                        </a>
                        <a href="#mapa-do-site" className="Menu_Link_Secondary hoverable undecorated" onClick={toggleSiteMap2}>
                            <div className="Header_Link_Organizer">
                                <span className="material-icons">map</span>
                                <p>Mapa do Site</p>
                            </div>

                            <a href="#mapa-do-site" className="material-icons hoverable undecorated" onClick={toggleSiteMap2}>
                                more
                            </a>
                        </a>
                    </div>

                    <div className="Configurations">
                        <m.a className="Configurations_Header hoverable undecorated">
                            <div className="Menu_Link" onClick={toggleConfig}>
                                <div className="Header_Link_Organizer">
                                    <span className="material-icons LP_Links_Icon">settings</span>
                                    <p>Configurações</p>
                                </div>

                                <a href="#lista-de-produtos" className="material-icons hoverable undecorated" onClick={toggleConfig}>
                                    more
                                </a>
                            </div>
                        </m.a>
                        <AnimatePresence>
                            {configIsOpen && (
                                <m.div
                                    key="content"
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    layoutScroll
                                    variants={{
                                        open: { opacity: 1, height: "auto" },
                                        collapsed: { opacity: 0, height: 0 },
                                    }}
                                    transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98], delay: 0.2 }}
                                    className="List_Horizontal_Organizer Config_Organizer"
                                >
                                    <m.div
                                        variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="List_Line_Container"
                                        layoutScroll
                                    >
                                        <div className="List_Line"></div>
                                    </m.div>
                                    <m.div
                                        layoutScroll
                                        variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="Configurations_Links"
                                    >
                                        <a href="#Idioma" className="Config_Link hoverable undecorated" onClick={toggleLanguageButton}>
                                            <span className="Config_Option_Title">
                                                <i className="material-icons hoverable">translate</i>
                                                <p>Idioma</p>
                                            </span>
                                            <div className="Config_Options">
                                                <span className={language === "pt-br" ? "Config_Option active" : "Config_Option hoverable"}>
                                                    Português
                                                </span>
                                                <span className={language === "en" ? "Config_Option active" : "Config_Option hoverable"}>
                                                    English
                                                </span>
                                            </div>
                                        </a>
                                        <a href="#Moeda" className="Config_Link hoverable undecorated" onClick={toggleCurrencyButton}>
                                            <span className="Config_Option_Title">
                                                <span className="material-icons">payments</span>
                                                <p>Moeda</p>
                                            </span>
                                            <div className="Config_Options">
                                                <span className={currencyType === "BRL" ? "Config_Option active" : "Config_Option hoverable"}>
                                                    Real (R$)
                                                </span>
                                                <span className={currencyType === "USD" ? "Config_Option active" : "Config_Option hoverable"}>
                                                    Dollar (USD)
                                                </span>
                                            </div>
                                        </a>
                                        <a href="#Cores" className="Config_Link hoverable undecorated" onClick={toggleColorModeButton}>
                                            <span className="Config_Option_Title">
                                                <span className="material-icons">palette</span>
                                                <p>Modo de Cor</p>
                                            </span>
                                            <div className="Config_Options">
                                                <span className={mode === "dark" ? "Config_Option active" : "Config_Option hoverable"}>Escuro</span>
                                                <span className={mode === "light" ? "Config_Option active" : "Config_Option"}>Claro</span>
                                            </div>
                                        </a>
                                        <button className="Config_Reset hoverable" onClick={handleResetButton}>
                                            <span className="material-icons">restart_alt</span>Reiniciar aplicativo e limpar todos os dados
                                        </button>
                                    </m.div>
                                </m.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="Pragmata_Web hoverable">
                        <svg id="PragLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.87 172.3">
                            <g id="PragLogoGroup">
                                <g>
                                    <path d="m108.11,91.75c3.38-8.24,3.55-11.42.64-14.31-1.64-1.52-2.44-1.99-7.65-4.13l-16.35-6.71-10.63,25.92,15.5,6.36c11.63,4.77,13.97,3.89,18.49-7.13Z" />
                                    <path d="m173.39,96.03l-36.02-19.05c-1.6-.85-1.98-2.97-.76-4.32l27.33-30.22c1.81-2,0-5.14-2.64-4.58l-39.84,8.56c-1.77.38-3.42-1.01-3.36-2.82l1.51-40.72c.1-2.69-3.31-3.93-4.97-1.81l-25.02,32.16c-1.11,1.43-3.27,1.43-4.38,0L60.22,1.08c-1.65-2.13-5.07-.89-4.97,1.81l1.51,40.72c.07,1.81-1.59,3.2-3.36,2.82l-39.84-8.56c-2.64-.57-4.45,2.58-2.64,4.58l27.33,30.22c1.21,1.34.84,3.47-.76,4.32L1.48,96.03c-2.38,1.26-1.75,4.83.92,5.2l40.36,5.59c.23.03.44.09.64.17,1.42.56,3.03-.13,3.61-1.54l25.39-61.88,32.1,13.17q10.42,4.27,13.03,5.49c7.6,3.54,12.56,9.4,13.76,16.12.97,5.92-.2,11.52-4.42,21.82-5.02,12.23-9.91,18.29-16.22,20.23-4.7,1.47-9.88,1.32-14.78-.54-.78-.18-3.32-1.22-12.99-4.9l-12.79-5.25c-1.43-.59-3.07.1-3.66,1.53l-7.46,18.19c-.59,1.43-2.22,2.12-3.66,1.53l-13.37-5.48c-1.43-.59-3.08.1-3.66,1.54l-8.69,21.38c-1.01,2.5,1.77,4.83,4.05,3.4l34.51-21.67c1.53-.96,3.56-.22,4.12,1.5l12.51,38.78c.83,2.57,4.46,2.57,5.28,0l12.51-38.78c.56-1.72,2.58-2.46,4.12-1.5l34.51,21.67c2.28,1.43,5.06-.9,4.05-3.4l-15.35-37.75c-.68-1.68.4-3.55,2.19-3.8l40.36-5.59c2.67-.37,3.3-3.94.92-5.2Z" />
                                </g>
                            </g>
                        </svg>
                        <p>
                            Webdesign por{" "}
                            <a className="undecorated" href="https://pragmata.ninja" target="_blank" rel="noopener noreferrer">
                                P R A G M A T A
                            </a>
                        </p>
                    </div>
                </m.div>
            </div>
        </m.div>
    );
});

export default Section_Menu;
