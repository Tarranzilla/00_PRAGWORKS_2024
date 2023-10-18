// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useDispatch } from "react-redux";
import { setActiveSection } from "../../context/main-context.tsx";

const Section_Solucoes = forwardRef(function Section_Solucoes(props, ref: any) {
    const dispatch = useDispatch();
    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    const [activeSolution, setActiveSolution] = useState(1);

    const setActiveSolutionClass = (id: number) => {
        setActiveSolution(id);
    };

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
    );
});

export default Section_Solucoes;
