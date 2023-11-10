// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { setActiveSection, setActiveSolution, setActiveSolutionClass, toggleSolutionDetails } from "../../context/main-context.tsx";
import Solucoes_Detalhe from "./Solucoes_Detalhe.tsx";

const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
    bounce: 0.5,
    velocity: 50,
};

const customTransition = springTransition;

const Section_Solucoes = forwardRef(function Section_Solucoes(props, ref: any) {
    const dispatch = useDispatch();
    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    const availableSolutions = useSelector((state: any) => state.availableSolutions);
    const activeSolutionClass = useSelector((state: any) => state.activeSolutionClass);

    const toggleActiveSolutionButton = (id: any) => {
        dispatch(setActiveSolution(id));
        dispatch(toggleSolutionDetails());
        console.log("Toggling Solution Details");
    };

    const handleSetActiveSolutionClass = (activeSolutionClass: any) => {
        dispatch(setActiveSolutionClass(activeSolutionClass));
    };

    const solutionDetailsIsOpen = useSelector((state: any) => state.solutionDetailsIsOpen);

    return (
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
            <AnimatePresence mode="popLayout">{solutionDetailsIsOpen && <Solucoes_Detalhe key="Solution_Detail_key" />}</AnimatePresence>

            <h1 className="LP_Section_Title">Soluções</h1>
            <AnimatePresence mode="popLayout">
                {activeSolutionClass === null && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Solution_Card" key={"Solution_Container_NONE"}>
                        <h3 className="No_Product_Selected_Title">Nenhuma Categoria de Produto Selecionada</h3>
                    </m.div>
                )}

                {availableSolutions.map((solution: any) => {
                    if (solution.class === activeSolutionClass) {
                        return (
                            <m.div
                                initial={{ x: "100vw" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100vw" }}
                                transition={customTransition}
                                className="Solution_Card"
                                key={solution.domId}
                            >
                                <h1 className="Solution_Title">{solution.name}</h1>
                                <h4 className="Solution_Description">{solution.description}</h4>
                                <button
                                    className="Solution_KnowMore_Button hoverable"
                                    onClick={() => {
                                        toggleActiveSolutionButton({ id: solution.id });
                                    }}
                                >
                                    <span className="material-icons">info</span>Mais Detalhes
                                </button>
                                <div className="Solution_Video_Fader"></div>
                                <div className="Solution_Video_Fader" id="Solution_Top_Fader"></div>
                                <video className="Solution_Video" src={solution.videoSrc[0]} autoPlay loop muted />
                            </m.div>
                        );
                    }
                })}
            </AnimatePresence>

            {/* Seletores */}
            <div className="Solutions_Selector">
                <button
                    className={
                        activeSolutionClass === "atendimento" ? "Solution_Type_Selector hoverable selected" : "Solution_Type_Selector hoverable"
                    }
                    onClick={() => {
                        handleSetActiveSolutionClass("atendimento");
                    }}
                >
                    Atendimento
                </button>
                <button
                    className={
                        activeSolutionClass === "publicidade" ? "Solution_Type_Selector hoverable selected" : "Solution_Type_Selector hoverable"
                    }
                    onClick={() => {
                        handleSetActiveSolutionClass("publicidade");
                    }}
                >
                    Publicidade
                </button>
                <button
                    className={activeSolutionClass === "inspecao" ? "Solution_Type_Selector hoverable selected" : "Solution_Type_Selector hoverable"}
                    onClick={() => {
                        handleSetActiveSolutionClass("inspecao");
                    }}
                >
                    Inspeção
                </button>
                <button
                    className={
                        activeSolutionClass === "transporte" ? "Solution_Type_Selector hoverable selected" : "Solution_Type_Selector hoverable"
                    }
                    onClick={() => {
                        handleSetActiveSolutionClass("transporte");
                    }}
                >
                    Transporte
                </button>
            </div>
        </m.div>
    );
});

export default Section_Solucoes;
