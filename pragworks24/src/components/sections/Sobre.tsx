// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

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

import fotoEquipe from "../../assets/sobre/Equipe_HR.png";

import fotoAlexandria from "../../assets/sobre/alexandria.webp";
import fotoAlexandria2 from "../../assets/sobre/alexandria_02.jpg";
import fotoDaVinci from "../../assets/sobre/davinci.jpg";
import fotoRUR from "../../assets/sobre/rur.jpg";

import fotoGIRINO from "../../assets/sobre/GIRINO.png";
import fotoCHICO from "../../assets/sobre/ROBOCHICO.png";

const customTransition = springTransition;

const Section_Sobre = forwardRef(function Section_Sobre(props, ref: any) {
    const dispatch = useDispatch();
    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    const [activeAbout, setActiveAbout] = useState(1);
    const setActiveAboutClass = (id: number) => {
        setActiveAbout(id);
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
                            <div className="About_Card_Header">
                                <h3>Sobre</h3>
                                <h2>A Human Robotics</h2>
                            </div>

                            <div className="About_Card_Content">
                                <div className="About_Card_Image_Container">
                                    <div className="About_Card_Img_Block">
                                        <img className="About_Card_Img" src={fotoEquipe}></img>
                                    </div>
                                </div>

                                <div className="About_Card_Text_Container">
                                    <p className="Sobre_Header_Text">
                                        <strong>
                                            Somos a vanguarda da robótica e da inteligência artificial no Brasil, criando soluções inovadoras e
                                            personalizadas para atender às necessidades de nossos clientes em setores como Varejo, Indústria e
                                            Cultura.
                                        </strong>
                                    </p>
                                    <p className="Sobre_Description_Text">
                                        Inspirados pela Subjetividade que a nossa Cultura tem a oferecer e na Precisão que nossas Tecnologias
                                        desbloqueiam, confecionamos assistentes virtuais e robôs que se destacam pela sua capacidade de interagir com
                                        as pessoas.
                                    </p>

                                    <p className="Sobre_Header_Text">
                                        Temos uma visão clara e ambiciosa para o futuro. Nossa meta é liderar a transformação tecnológica no Brasil,
                                        sendo a vanguarda das tecnologias de atendimento, educação, interação, inspeção e transporte em bases
                                        robóticas.
                                    </p>
                                    <p className="Sobre_Header_Text">
                                        Nossa missão é tornar a robótica mais humana, mais acessível e mais presente na vida das pessoas.
                                    </p>

                                    <p className="Sobre_Header_Text">
                                        <strong>Junte-se a nós nesta jornada por uma transformação tecnológica mais humana!</strong>
                                    </p>
                                </div>
                            </div>
                        </m.div>
                    )}

                    {/* Sobre Nossos Parceiros */}
                    {activeAbout === 2 && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="About_Card"
                            key="AC_02"
                        >
                            <div className="About_Card_Header">
                                <h3>Sobre</h3>
                                <h2>Nossos Parceiros</h2>
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
                            <div className="About_Card_Header">
                                <h3>Sobre</h3>
                                <h2>A Fundação</h2>
                            </div>
                        </m.div>
                    )}

                    {/* Sobre a Robótica e o Brasil */}
                    {activeAbout === 4 && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="About_Card"
                            key="AC_04"
                        >
                            <div className="About_Card_Header">
                                <h3>Sobre</h3>
                                <h2>A Robótica e o Brasil</h2>
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
                            <div className="About_Card_Header">
                                <h3>Sobre</h3>
                                <h2>A História da Robótica</h2>
                            </div>
                        </m.div>
                    )}

                    {/* Sobre a Nossa Equipe */}
                    {activeAbout === 6 && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="About_Card"
                            key="AC_06"
                        >
                            <div className="About_Card_Header">
                                <h3>Sobre</h3>
                                <h2>A Nossa Equipe</h2>
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
                            <div className="About_Card_Header">
                                <h3>Sobre</h3>
                                <h2>Blog</h2>
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
                    Robótica e o Brasil
                </button>
                <button
                    className={activeAbout === 6 ? "About_Type_Selector hoverable selected" : "About_Type_Selector hoverable"}
                    onClick={() => {
                        setActiveAboutClass(6);
                    }}
                >
                    História da Robótica
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
