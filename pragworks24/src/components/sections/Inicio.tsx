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

import exp_activa_id from "../../assets/experiencia/exp_activa_id.png";
import exp_bioos from "../../assets/experiencia/exp_bioos.png";
import exp_caixa from "../../assets/experiencia/exp_caixa.png";
import exp_cajuru from "../../assets/experiencia/exp_cajuru.png";
import epx_condor from "../../assets/experiencia/exp_condor.png";
import exp_inno from "../../assets/experiencia/exp_inno.png";
import exp_lab from "../../assets/experiencia/exp_lab.png";
import exp_montagem from "../../assets/experiencia/exp_montagem.png";
import exp_novo from "../../assets/experiencia/exp_novo.png";
import exp_pipefy_1 from "../../assets/experiencia/exp_pipefy_1.png";
import exp_pipefy_2 from "../../assets/experiencia/exp_pipefy_2.png";
import exp_shopping from "../../assets/experiencia/exp_shopping.png";
import exp_teatro from "../../assets/experiencia/exp_teatro.png";
import exp_terca_da_terra from "../../assets/experiencia/exp_terca_da_terra.png";
import exp_topmed from "../../assets/experiencia/exp_topmed.png";
import exp_valedopinhao from "../../assets/experiencia/exp_valedopinhao.png";
import exp_varejo from "../../assets/experiencia/exp_varejo.png";

const baseExperiencias = [
    { id: nanoid(), indx: 1, text: "Activa Id", description: "Campanha de Marketing", image: exp_activa_id },
    { id: nanoid(), indx: 2, text: "Bioos", description: "Campanha de Marketing", image: exp_bioos },
    { id: nanoid(), indx: 3, text: "Caixa", description: "Campanha de Marketing", image: exp_caixa },
    { id: nanoid(), indx: 4, text: "Cajuru", description: "Campanha de Marketing", image: exp_cajuru },
    { id: nanoid(), indx: 5, text: "Condor", description: "Campanha de Marketing", image: epx_condor },
    { id: nanoid(), indx: 6, text: "Inno", description: "Campanha de Marketing", image: exp_inno },
    { id: nanoid(), indx: 7, text: "Lab", description: "Campanha de Marketing", image: exp_lab },
    { id: nanoid(), indx: 8, text: "Montagem", description: "Campanha de Marketing", image: exp_montagem },
    { id: nanoid(), indx: 9, text: "Novo", description: "Campanha de Marketing", image: exp_novo },
    { id: nanoid(), indx: 10, text: "Pipefy 1", description: "Campanha de Marketing", image: exp_pipefy_1 },
    { id: nanoid(), indx: 11, text: "Pipefy 2", description: "Campanha de Marketing", image: exp_pipefy_2 },
    { id: nanoid(), indx: 12, text: "Shopping", description: "Campanha de Marketing", image: exp_shopping },
    { id: nanoid(), indx: 13, text: "Teatro", description: "Campanha de Marketing", image: exp_teatro },
    { id: nanoid(), indx: 14, text: "Terça da Terra", description: "Campanha de Marketing", image: exp_terca_da_terra },
    { id: nanoid(), indx: 15, text: "Topmed", description: "Campanha de Marketing", image: exp_topmed },
    { id: nanoid(), indx: 16, text: "Vale do Pinhão", description: "Campanha de Marketing", image: exp_valedopinhao },
    { id: nanoid(), indx: 17, text: "Varejo", description: "Campanha de Marketing", image: exp_varejo },
];

import tresM from "../../assets/parceiros/3M.webp";
import ambev from "../../assets/parceiros/ambev.webp";
import brmalls from "../../assets/parceiros/brmalls.webp";
import cajuru from "../../assets/parceiros/cajuru_2.png";
import ebanx from "../../assets/parceiros/ebanx.webp";
import finep from "../../assets/parceiros/finep.webp";
import nivea from "../../assets/parceiros/nivea.png";
import ntu from "../../assets/parceiros/ntu.webp";
import sao_cristovao from "../../assets/parceiros/sao_cristovao.webp";
import sebrae from "../../assets/parceiros/sebrae.webp";
import tercadaterra from "../../assets/parceiros/tercadaterra.webp";
import unimed from "../../assets/parceiros/unimed.webp";

const baseParceiros = [
    { id: nanoid(), indx: 1, text: "3M", description: "Campanha de Marketing", image: tresM },
    { id: nanoid(), indx: 2, text: "Ambev", description: "Campanha de Marketing", image: ambev },
    { id: nanoid(), indx: 3, text: "BRMalls", description: "Campanha de Marketing", image: brmalls },
    { id: nanoid(), indx: 4, text: "Cajuru", description: "Campanha de Marketing", image: cajuru },
    { id: nanoid(), indx: 5, text: "Ebanx", description: "Campanha de Marketing", image: ebanx },
    { id: nanoid(), indx: 6, text: "Finep", description: "Campanha de Marketing", image: finep },
    { id: nanoid(), indx: 7, text: "Nivea", description: "Campanha de Marketing", image: nivea },
    { id: nanoid(), indx: 8, text: "NTU", description: "Campanha de Marketing", image: ntu },
    { id: nanoid(), indx: 9, text: "São Cristovão", description: "Campanha de Marketing", image: sao_cristovao },
    { id: nanoid(), indx: 10, text: "Sebrae", description: "Campanha de Marketing", image: sebrae },
    { id: nanoid(), indx: 11, text: "Terca da Terra", description: "Campanha de Marketing", image: tercadaterra },
    { id: nanoid(), indx: 12, text: "Unimed", description: "Campanha de Marketing", image: unimed },
];

const customTransition = springTransition;

const Section_Inicio = forwardRef(function Section_Inicio(props, ref: any) {
    const dispatch = useDispatch();
    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    const [expCards] = useState(baseExperiencias);
    const [partnerCards] = useState(baseParceiros);

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
            <h1 className="LP_Section_Title">Início</h1>
            <div className="auto_slider_card_container auto_slider_experiencias" id="auto_slider_blogPosts">
                <div className="auto_slider_track slider_experiencias">
                    <div className="auto_slider_card hoverable">Slider Card 1</div>
                    {expCards.map((card) => (
                        <div className="auto_slider_card hoverable" key={card.id}>
                            <div className="carroussel_card_content">
                                <p className="auto_slider_card_title">{card.text}</p>
                                <p className="auto_slider_card_description">{card.description}</p>
                            </div>
                            <img className="auto_slider_card_image" src={card.image} alt={card.text} />
                        </div>
                    ))}

                    {/* Cópias */}

                    {expCards.map((card) => (
                        <div className="auto_slider_card hoverable" key={card.id + "_B"}>
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
                        <div className="auto_slider_card hoverable" key={card.id}>
                            <div className="carroussel_card_content">
                                <p className="auto_slider_card_title">{card.text}</p>
                                <p className="auto_slider_card_description">{card.description}</p>
                            </div>
                            <img className="auto_slider_card_image_partner" src={card.image} alt={card.text} />
                        </div>
                    ))}

                    {/* Cópias */}
                    {partnerCards.map((card) => (
                        <div className="auto_slider_card hoverable" key={card.id + "_C"}>
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
