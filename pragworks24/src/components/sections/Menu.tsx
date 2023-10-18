// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useDispatch } from "react-redux";
import { setActiveSection } from "../../context/main-context.tsx";
import { persistor } from "../../main.tsx";

const Section_Menu = forwardRef(function Section_Menu(props, ref: any) {
    const dispatch = useDispatch();
    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    const handleResetButton = () => {
        persistor.purge();
        window.location.reload();
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
    );
});

export default Section_Menu;
