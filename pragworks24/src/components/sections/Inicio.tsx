// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Nanoid import
import { nanoid } from "nanoid";

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

import epx_carrefour from "../../assets/experiencias/Experience_01_Hero_Image.png";
import exp_activa_id from "../../assets/experiencias/Experience_02_Hero_Image.png";
import exp_varejo from "../../assets/experiencias/Experience_03_Hero_Image.png";
import exp_novo from "../../assets/experiencias/Experience_04_Hero_Image.png";
import exp_pipefy_1 from "../../assets/experiencias/Experience_05_Hero_Image.png";
import exp_pipefy_2 from "../../assets/experiencias/Experience_06_Hero_Image.png";
import exp_montagem from "../../assets/experiencias/Experience_07_Hero_Image.png";
import exp_lab from "../../assets/experiencias/Experience_08_Hero_Image.png";
import exp_cajuru from "../../assets/experiencias/Experience_09_Hero_Image.png";
import exp_inno from "../../assets/experiencias/Experience_10_Hero_Image.png";
import exp_teatro from "../../assets/experiencias/Experience_11_Hero_Image.png";
import exp_bioos from "../../assets/experiencias/Experience_12_Hero_Image.png";
import exp_shopping from "../../assets/experiencias/Experience_13_Hero_Image.png";
import exp_valedopinhao from "../../assets/experiencias/Experience_14_Hero_Image.png";
import exp_topmed from "../../assets/experiencias/Experience_15_Hero_Image.png";
import exp_terca_da_terra from "../../assets/experiencias/Experience_16_Hero_Image.png";
import exp_caixa from "../../assets/experiencias/Experience_17_Hero_Image.png";

const baseExperiencias = [
    { id: nanoid(), type: "exp", indx: 1, text: "Activa Id", description: "Campanha de Marketing", image: exp_activa_id },
    { id: nanoid(), type: "exp", indx: 2, text: "Bioos", description: "Campanha de Marketing", image: exp_bioos },
    { id: nanoid(), type: "exp", indx: 3, text: "Caixa", description: "Campanha de Marketing", image: exp_caixa },
    { id: nanoid(), type: "exp", indx: 4, text: "Cajuru", description: "Campanha de Marketing", image: exp_cajuru },
    { id: nanoid(), type: "exp", indx: 5, text: "Carrefour", description: "Campanha de Marketing", image: epx_carrefour },
    { id: nanoid(), type: "exp", indx: 6, text: "Inno", description: "Campanha de Marketing", image: exp_inno },
    { id: nanoid(), type: "exp", indx: 7, text: "Lab", description: "Campanha de Marketing", image: exp_lab },
    { id: nanoid(), type: "exp", indx: 8, text: "Montagem", description: "Campanha de Marketing", image: exp_montagem },
    { id: nanoid(), type: "exp", indx: 9, text: "Novo", description: "Campanha de Marketing", image: exp_novo },
    { id: nanoid(), type: "exp", indx: 10, text: "Pipefy 1", description: "Campanha de Marketing", image: exp_pipefy_1 },
    { id: nanoid(), type: "exp", indx: 11, text: "Pipefy 2", description: "Campanha de Marketing", image: exp_pipefy_2 },
    { id: nanoid(), type: "exp", indx: 12, text: "Shopping", description: "Campanha de Marketing", image: exp_shopping },
    { id: nanoid(), type: "exp", indx: 13, text: "Teatro", description: "Campanha de Marketing", image: exp_teatro },
    { id: nanoid(), type: "exp", indx: 14, text: "Terça da Terra", description: "Campanha de Marketing", image: exp_terca_da_terra },
    { id: nanoid(), type: "exp", indx: 15, text: "Topmed", description: "Campanha de Marketing", image: exp_topmed },
    { id: nanoid(), type: "exp", indx: 16, text: "Vale do Pinhão", description: "Campanha de Marketing", image: exp_valedopinhao },
    { id: nanoid(), type: "exp", indx: 17, text: "Varejo", description: "Campanha de Marketing", image: exp_varejo },
];

import ebanx from "../../assets/parceiros/Partner_01_Hero_Image.png";
import tresM from "../../assets/parceiros/Partner_02_Hero_Image.png";
import ambev from "../../assets/parceiros/Partner_03_Hero_Image.png";
import brmalls from "../../assets/parceiros/Partner_04_Hero_Image.png";
import finep from "../../assets/parceiros/Partner_05_Hero_Image.png";
import sebrae from "../../assets/parceiros/Partner_06_Hero_Image.png";
import ntu from "../../assets/parceiros/Partner_07_Hero_Image.png";
import nivea from "../../assets/parceiros/Partner_08_Hero_Image.png";
import cajuru from "../../assets/parceiros/Partner_09_Hero_Image.png";
import sao_cristovao from "../../assets/parceiros/Partner_10_Hero_Image.png";
import unimed from "../../assets/parceiros/Partner_11_Hero_Image.png";
import tercadaterra from "../../assets/parceiros/Partner_12_Hero_Image.png";

const baseParceiros = [
    { id: nanoid(), type: "partner", indx: 1, text: "3M", description: "Campanha de Marketing", image: tresM },
    { id: nanoid(), type: "partner", indx: 2, text: "Ambev", description: "Campanha de Marketing", image: ambev },
    { id: nanoid(), type: "partner", indx: 3, text: "BRMalls", description: "Campanha de Marketing", image: brmalls },
    { id: nanoid(), type: "partner", indx: 4, text: "Cajuru", description: "Campanha de Marketing", image: cajuru },
    { id: nanoid(), type: "partner", indx: 5, text: "Ebanx", description: "Campanha de Marketing", image: ebanx },
    { id: nanoid(), type: "partner", indx: 6, text: "Finep", description: "Campanha de Marketing", image: finep },
    { id: nanoid(), type: "partner", indx: 7, text: "Nivea", description: "Campanha de Marketing", image: nivea },
    { id: nanoid(), type: "partner", indx: 8, text: "NTU", description: "Campanha de Marketing", image: ntu },
    { id: nanoid(), type: "partner", indx: 9, text: "São Cristovão", description: "Campanha de Marketing", image: sao_cristovao },
    { id: nanoid(), type: "partner", indx: 10, text: "Sebrae", description: "Campanha de Marketing", image: sebrae },
    { id: nanoid(), type: "partner", indx: 11, text: "Terca da Terra", description: "Campanha de Marketing", image: tercadaterra },
    { id: nanoid(), type: "partner", indx: 12, text: "Unimed", description: "Campanha de Marketing", image: unimed },
];

const customTransition = springTransition;

const Section_Inicio = forwardRef(function Section_Inicio(props, ref: any) {
    const dispatch = useDispatch();
    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    const [expCards] = useState(baseExperiencias);
    const [partnerCards] = useState(baseParceiros);

    const [activeDetailCard, setActiveDetailCard] = useState(null as any);
    const setActiveDetailCardFunction = (id: any, type: any) => {
        if (type === "exp") {
            expCards.map((card: any) => {
                if (card.id === id) {
                    setActiveDetailCard(card);
                }
            });
        } else if (type === "partner") {
            partnerCards.map((card: any) => {
                if (card.id === id) {
                    setActiveDetailCard(card);
                }
            });
        }
    };
    const closeDetailCard = () => {
        setActiveDetailCard(null);
    };

    /* Brand Declaration Text Animate */
    const [text, setText] = useState("Agora");
    const textArray = ["Agora", "Interativo", "Humano"];
    let index = 0;
    let intervalId: number;

    const animateText = () => {
        setText(textArray[index]);
        index = (index + 1) % textArray.length;
    };

    const handleVisibilityChange = () => {
        if (document.hidden) {
            // Page is not visible, clear the interval
            clearInterval(intervalId);
        } else {
            // Page is visible, restart the interval
            intervalId = setInterval(animateText, 2000);
        }
    };

    useEffect(() => {
        // Start the animation loop
        intervalId = setInterval(animateText, 2000);

        // Add visibility change event listener
        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Cleanup function
        return () => {
            clearInterval(intervalId);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            index = 0; // Reset the index
        };
    }, []); // Run once on mount

    return (
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
            <AnimatePresence mode="popLayout">
                {activeDetailCard && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Experience_Detail_Container">
                        <m.div drag dragSnapToOrigin className="Experience_Detail">
                            <button className="Close_Btn hoverable" onClick={closeDetailCard}>
                                <i className="material-icons">close</i>
                            </button>
                            <div className="Experience_Detail_Text">
                                <h2 className="Experience_Detail_Title">{activeDetailCard.text}</h2>
                                <p className="Experience_Detail_Description">{activeDetailCard.description}</p>
                            </div>
                            <div className="Experience_Detail_Image_Block hoverable">
                                <img src={activeDetailCard.image} alt={activeDetailCard.text} />
                            </div>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>

            <h1 className="LP_Section_Title">Início</h1>
            <div className="auto_slider_card_container auto_slider_experiencias" id="auto_slider_blogPosts">
                <div className="auto_slider_track slider_experiencias">
                    <div className="auto_slider_card hoverable">Slider Card 1</div>
                    {expCards.map((card) => (
                        <div
                            className="auto_slider_card hoverable"
                            key={card.id}
                            onClick={() => {
                                setActiveDetailCardFunction(card.id, card.type);
                            }}
                        >
                            <div className="carroussel_card_content">
                                <p className="auto_slider_card_title">{card.text}</p>
                                <p className="auto_slider_card_description">{card.description}</p>
                            </div>
                            <img className="auto_slider_card_image" src={card.image} alt={card.text} />
                        </div>
                    ))}

                    {/* Cópias */}

                    {expCards.map((card) => (
                        <div
                            className="auto_slider_card hoverable"
                            key={card.id + "_B"}
                            onClick={() => {
                                setActiveDetailCardFunction(card.id, card.type);
                            }}
                        >
                            <div className="carroussel_card_content">
                                <p className="auto_slider_card_title">{card.text}</p>
                                <p className="auto_slider_card_description">{card.description}</p>
                            </div>
                            <img className="auto_slider_card_image" src={card.image} alt={card.text} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="Brand_Declaration">
                <h2 className="Brand_Fixed_Phrase">O Futuro da Robótica é</h2>
                <AnimatePresence mode="popLayout">
                    {text === "Agora" && (
                        <m.h2
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            key="Agora_BRAND"
                            className="Brand_Changing_Word"
                        >
                            Agora
                        </m.h2>
                    )}
                    {text === "Interativo" && (
                        <m.h2
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            key="Interativo_BRAND"
                            className="Brand_Changing_Word"
                        >
                            Interativo
                        </m.h2>
                    )}
                    {text === "Humano" && (
                        <m.h2
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            key="Humano_BRAND"
                            className="Brand_Changing_Word"
                        >
                            Humano
                        </m.h2>
                    )}
                </AnimatePresence>
            </div>
            <div className="auto_slider_card_container" id="auto_slider_partners">
                <div className="auto_slider_track slider_parceiros">
                    {partnerCards.map((card) => (
                        <div
                            className="auto_slider_card hoverable"
                            key={card.id}
                            onClick={() => {
                                setActiveDetailCardFunction(card.id, card.type);
                            }}
                        >
                            <div className="carroussel_card_content">
                                <p className="auto_slider_card_title">{card.text}</p>
                                <p className="auto_slider_card_description">{card.description}</p>
                            </div>
                            <img className="auto_slider_card_image_partner" src={card.image} alt={card.text} />
                        </div>
                    ))}

                    {/* Cópias */}
                    {partnerCards.map((card) => (
                        <div
                            className="auto_slider_card hoverable"
                            key={card.id + "_C"}
                            onClick={() => {
                                setActiveDetailCardFunction(card.id, card.type);
                            }}
                        >
                            <div className="carroussel_card_content">
                                <p className="auto_slider_card_title">{card.text}</p>
                                <p className="auto_slider_card_description">{card.description}</p>
                            </div>
                            <img className="auto_slider_card_image_partner" src={card.image} alt={card.text} />
                        </div>
                    ))}
                </div>
            </div>
        </m.div>
    );
});

export default Section_Inicio;
