// Vanilla React Imports
import { useEffect, useState } from "react";

//React Redux Imports
import { useDispatch } from "react-redux";

//Framer Motion Imports
import { motion as m, AnimatePresence, useScroll } from "framer-motion";

import { persistor } from "../../main.tsx";

import { setActiveSection } from "../../context/main-context.tsx";

const handleResetButton = () => {
    persistor.purge();
    window.location.reload();
};

export default function LandingPage() {
    const dispatch = useDispatch();

    const [activeProduct, setActiveProduct] = useState(1);
    const [activeSolution, setActiveSolution] = useState(1);
    const [activeAbout, setActiveAbout] = useState(1);

    const setActiveProductClass = (id: number) => {
        setActiveProduct(id);
    };
    const setActiveSolutionClass = (id: number) => {
        setActiveSolution(id);
    };
    const setActiveAboutClass = (id: number) => {
        setActiveAbout(id);
    };

    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    return (
        <>
            {/* Início */}
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                onViewportEnter={() => {
                    console.log("Início está visível!");
                    setActiveSectionFunction(1);
                }}
                transition={{ duration: 1.0, type: "tween" }}
                className="LP_Section"
                id="inicio"
                key={"inicio_key"}
            >
                <h1 className="LP_Section_Title">Início</h1>
                <div className="card_auto_slider" id="auto_slider_blogPosts"></div>
                <div className="Brand_Declaration">
                    <h2>O Futuro da Robótica é</h2>
                    <h2>Humano</h2>
                </div>
                <div className="card_auto_slider" id="auto_slider_partners"></div>
            </m.div>

            <div className="Section_Divider" id="SD01" key={"SD01_key"}></div>

            {/* Produtos */}
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                onViewportEnter={() => {
                    console.log("Produtos está visível!");
                    setActiveSectionFunction(2);
                }}
                transition={{ duration: 1.0, type: "tween" }}
                className="LP_Section"
                id="produtos"
                key={"produtos_key"}
            >
                <h1 className="LP_Section_Title">Produtos</h1>

                {/* Robôs */}
                {activeProduct === 1 && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="Products_Container"
                        id="produtos-robos"
                        title="Robôs"
                        key="Product_Container_01"
                    >
                        <div className="Product_Card">
                            <h3>RobiOS</h3>
                            <h2>GO</h2>
                        </div>
                        <div className="Product_Card">
                            <h3>RobiOS</h3>
                            <h2>INSPECTOR</h2>
                        </div>
                        <div className="Product_Card">
                            <h3>RobiOS</h3>
                            <h2>CARGO</h2>
                        </div>
                    </m.div>
                )}

                {/* Softwares */}
                {activeProduct === 2 && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="Products_Container"
                        id="produtos-softwares"
                        title="Softwares"
                        key="Product_Container_02"
                    >
                        <div className="Product_Card">
                            <h3> </h3>
                            <h2>RobiOS</h2>
                        </div>
                        <div className="Product_Card">
                            <h3>RobiOS</h3>
                            <h2>STUDIO</h2>
                        </div>
                        <div className="Product_Card">
                            <h3>RobiOS</h3>
                            <h2>AVATAR</h2>
                        </div>
                    </m.div>
                )}

                {/* Serviços */}
                {activeProduct === 3 && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="Products_Container"
                        id="produtos-servicos"
                        title="Serviços"
                        key="Product_Container_03"
                    >
                        <div className="Product_Card">
                            <h3> </h3>
                            <h2>Customização</h2>
                        </div>
                        <div className="Product_Card">
                            <h3> </h3>
                            <h2>Mapeamento de Ambientes</h2>
                        </div>
                        <div className="Product_Card">
                            <h3> </h3>
                            <h2>Treinamento e Suporte</h2>
                        </div>
                    </m.div>
                )}

                {/* Experiências */}
                {activeProduct === 4 && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="Products_Container"
                        id="produtos-experiencias"
                        title="Experiências"
                        key="Product_Container_04"
                    >
                        <div className="Product_Card">
                            <h3> </h3>
                            <h2>Varejo</h2>
                        </div>
                        <div className="Product_Card">
                            <h3> </h3>
                            <h2>Indústria</h2>
                        </div>
                        <div className="Product_Card">
                            <h3> </h3>
                            <h2>Cultura</h2>
                        </div>
                    </m.div>
                )}

                {/* Seletores */}
                <div className="Products_Selector">
                    <button className="Product_Type_Selector hoverable" onClick={() => setActiveProductClass(1)}>
                        Robôs
                    </button>
                    <button className="Product_Type_Selector hoverable" onClick={() => setActiveProductClass(2)}>
                        Softwares
                    </button>
                    <button className="Product_Type_Selector hoverable" onClick={() => setActiveProductClass(3)}>
                        Serviços
                    </button>
                    <button className="Product_Type_Selector hoverable" onClick={() => setActiveProductClass(4)}>
                        Experiências
                    </button>
                </div>
            </m.div>

            <div className="Section_Divider" id="SD02" key={"SD02_key"}></div>

            {/* Soluções */}
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                onViewportEnter={() => {
                    console.log("Soluções está visível!");
                    setActiveSectionFunction(3);
                }}
                transition={{ duration: 1.0, type: "tween" }}
                className="LP_Section"
                id="solucoes"
                key={"solucoes_key"}
            >
                <h1 className="LP_Section_Title">Soluções</h1>

                {/* Atendimento */}
                {activeSolution === 1 && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Solutions_Container" key={"SC_01"}>
                        <div className="Solution_Card">
                            <h2>Atendimento</h2>
                        </div>
                    </m.div>
                )}

                {/* Publicidade */}
                {activeSolution === 2 && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Solutions_Container" key={"SC_02"}>
                        <div className="Solution_Card">
                            <h2>Publicidade</h2>
                        </div>
                    </m.div>
                )}

                {/* Inspeção */}
                {activeSolution === 3 && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Solutions_Container" key={"SC_03"}>
                        <div className="Solution_Card">
                            <h2>Inspeção</h2>
                        </div>
                    </m.div>
                )}

                {/* Transporte */}
                {activeSolution === 4 && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Solutions_Container" key={"SC_04"}>
                        <div className="Solution_Card">
                            <h2>Transporte</h2>
                        </div>
                    </m.div>
                )}

                {/* Seletores */}
                <div className="Solutions_Selector">
                    <button
                        className="Solution_Type_Selector hoverable"
                        onClick={() => {
                            setActiveSolutionClass(1);
                        }}
                    >
                        Atendimento
                    </button>
                    <button
                        className="Solution_Type_Selector hoverable"
                        onClick={() => {
                            setActiveSolutionClass(2);
                        }}
                    >
                        Publicidade
                    </button>
                    <button
                        className="Solution_Type_Selector hoverable"
                        onClick={() => {
                            setActiveSolutionClass(3);
                        }}
                    >
                        Inspeção
                    </button>
                    <button
                        className="Solution_Type_Selector hoverable"
                        onClick={() => {
                            setActiveSolutionClass(4);
                        }}
                    >
                        Transporte
                    </button>
                </div>
            </m.div>

            <div className="Section_Divider" id="SD03" key={"SD03_key"}></div>

            {/* Sobre */}
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
                <h1 className="LP_Section_Title">Sobre</h1>
                <m.div className="Abouts_Container">
                    {/* Sobre a Human Robotics */}
                    {activeAbout === 1 && (
                        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="About_Card" key="AC_01">
                            <h3>Sobre</h3>
                            <h2>A Human Robotics</h2>
                        </m.div>
                    )}

                    {/* Sobre Nossos Parceiros */}
                    {activeAbout === 2 && (
                        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="About_Card" key="AC_02">
                            <h3>Sobre</h3>
                            <h2>Nossos Parceiros</h2>
                        </m.div>
                    )}

                    {/* Sobre a Fundação */}
                    {activeAbout === 3 && (
                        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="About_Card" key="AC_03">
                            <h3>Sobre</h3>
                            <h2>A Fundação</h2>
                        </m.div>
                    )}

                    {/* Sobre a Robótica e o Brasil */}
                    {activeAbout === 4 && (
                        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="About_Card" key="AC_04">
                            <h3>Sobre</h3>
                            <h2>A Robótica e o Brasil</h2>
                        </m.div>
                    )}

                    {/* Sobre a História da Robótica */}
                    {activeAbout === 5 && (
                        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="About_Card" key="AC_05">
                            <h3>Sobre</h3>
                            <h2>A História da Robótica</h2>
                        </m.div>
                    )}

                    {/* Sobre a Nossa Equipe */}
                    {activeAbout === 6 && (
                        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="About_Card" key="AC_06">
                            <h3>Sobre</h3>
                            <h2>A Nossa Equipe</h2>
                        </m.div>
                    )}

                    {/* Blog */}
                    {activeAbout === 7 && (
                        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="About_Card" key="AC_07">
                            <h3>Sobre</h3>
                            <h2>Blog</h2>
                        </m.div>
                    )}
                </m.div>

                <div className="Abouts_Selector">
                    <button
                        className="About_Type_Selector hoverable"
                        onClick={() => {
                            setActiveAboutClass(1);
                        }}
                    >
                        Nossa Missão
                    </button>
                    <button
                        className="About_Type_Selector hoverable"
                        onClick={() => {
                            setActiveAboutClass(2);
                        }}
                    >
                        Equipe
                    </button>
                    <button
                        className="About_Type_Selector hoverable"
                        onClick={() => {
                            setActiveAboutClass(3);
                        }}
                    >
                        A Fundação
                    </button>
                    <button
                        className="About_Type_Selector hoverable"
                        onClick={() => {
                            setActiveAboutClass(4);
                        }}
                    >
                        Parceiros
                    </button>
                    <button
                        className="About_Type_Selector hoverable"
                        onClick={() => {
                            setActiveAboutClass(5);
                        }}
                    >
                        Robótica e o Brasil
                    </button>
                    <button
                        className="About_Type_Selector hoverable"
                        onClick={() => {
                            setActiveAboutClass(6);
                        }}
                    >
                        História da Robótica
                    </button>
                    <button
                        className="About_Type_Selector hoverable"
                        onClick={() => {
                            setActiveAboutClass(7);
                        }}
                    >
                        Blog
                    </button>
                </div>
            </m.div>

            <div className="Section_Divider" id="SD04" key={"SD04_key"}></div>

            {/* Contato */}
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                onViewportEnter={() => {
                    console.log("Contato está visível!");
                    setActiveSectionFunction(5);
                }}
                transition={{ duration: 1.0, type: "tween" }}
                className="LP_Section"
                id="contato"
                key={"contato_key"}
            >
                <h1 className="LP_Section_Title">Contato</h1>
                <div className="Contact_Container">
                    <h2>Entre em Contato, estamos a disposição!</h2>
                    <button>Envie um email</button>
                    <button>Entre em Contato pelo Whatsapp</button>
                    <button>Inscreva-se na Newsletter</button>
                    <div className="Contact_Form_Container">
                        <form className="Contact_Form">
                            <input type="text" placeholder="Nome" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Assunto" />
                            <textarea placeholder="Mensagem" />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </m.div>

            <div className="Section_Divider" id="SD05" key={"SD05_key"}></div>

            {/* Menu */}
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
                <h1 className="LP_Section_Title">Menu</h1>
                <div className="Menu_Container">
                    <div className="Menu_Main_List">
                        <h2>Produtos</h2>
                        <h2>Soluções</h2>
                        <h2>Sobre</h2>
                        <h2>Contato</h2>
                    </div>
                    <div className="App_Reset_Container">
                        <button onClick={handleResetButton}>Reiniciar Aplicação</button>
                    </div>
                </div>
            </m.div>

            <div className="Section_Divider" id="SD06" key={"SD06_key"}></div>
        </>
    );
}
