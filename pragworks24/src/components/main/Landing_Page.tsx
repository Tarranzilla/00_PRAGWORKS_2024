// Vanilla React Imports
import { forwardRef, useEffect, useState } from "react";

//React Redux Imports
import { useDispatch } from "react-redux";

//Framer Motion Imports
import { motion as m, AnimatePresence, useScroll } from "framer-motion";

import { setActiveSection } from "../../context/main-context.tsx";

import Section_Inicio from "../sections/Inicio.tsx";
import Section_Produtos from "../sections/Produtos.tsx";
import Section_Solucoes from "../sections/Solucoes.tsx";
import Section_Sobre from "../sections/Sobre.tsx";
import Section_Contato from "../sections/Contato.tsx";
import Section_Menu from "../sections/Menu.tsx";

const LandingPage = forwardRef(function LandingPage(props, ref: any) {
    return (
        <>
            <Section_Inicio />
            <div className="Section_Divider" id="SD01" key={"SD01_key"}></div>
            <Section_Produtos />
            <div className="Section_Divider" id="SD02" key={"SD02_key"}></div>
            <Section_Solucoes />
            <div className="Section_Divider" id="SD03" key={"SD03_key"}></div>
            <Section_Sobre />
            <div className="Section_Divider" id="SD04" key={"SD04_key"}></div>
            <Section_Contato />
            <div className="Section_Divider" id="SD05" key={"SD05_key"}></div>
            <Section_Menu />
            <div className="Section_Divider" id="SD06" key={"SD06_key"}></div>
        </>
    );
});

export default LandingPage;
