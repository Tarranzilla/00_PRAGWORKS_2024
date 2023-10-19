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
            <div className="Section_Divider Section_Divider_With_Text" id="SD01" key={"SD01_key"}>
                <h1 className="Section_Divider_Text">Produtos</h1>
            </div>
            <Section_Produtos />
            <div className="Section_Divider Section_Divider_With_Text" id="SD02" key={"SD02_key"}>
                <h1 className="Section_Divider_Text">Soluções</h1>
            </div>
            <Section_Solucoes />
            <div className="Section_Divider Section_Divider_With_Text" id="SD03" key={"SD03_key"}>
                <h1 className="Section_Divider_Text">Sobre Nós</h1>
            </div>
            <Section_Sobre />
            <div className="Section_Divider Section_Divider_With_Text" id="SD04" key={"SD04_key"}>
                <h1 className="Section_Divider_Text">Contato</h1>
            </div>
            <Section_Contato />
            <div className="Section_Divider Section_Divider_With_Text" id="SD05" key={"SD05_key"}>
                <h1 className="Section_Divider_Text">Menu</h1>
            </div>
            <Section_Menu />
            <div className="Section_Divider Section_Divider_With_Text" id="SD06" key={"SD06_key"}>
                <h1 className="Section_Divider_Text">Human Robotics</h1>
            </div>
        </>
    );
});

export default LandingPage;
