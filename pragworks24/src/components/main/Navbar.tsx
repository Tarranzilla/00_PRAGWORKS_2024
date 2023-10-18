// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { toggleSearch } from "../../context/main-context.tsx";

// Icons Imports
import Icon_HumanRobotics from "../icons/Icon_HumanRobotics";

const Navbar = forwardRef(function Navbar(props, ref: any) {
    const activeSection = useSelector((state: any) => state.activeSection);

    const dispatch = useDispatch();
    const toggleSearchBarFunction = () => {
        dispatch(toggleSearch());
    };

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Navbar" key={"navbar_key"}>
            <a href="#" className="Nav_Logo_Container undecorated">
                <Icon_HumanRobotics />
                <h1 className="Nav_Logotype">Human Robotics</h1>
            </a>
            <div className="Nav_Links_Container">
                <a
                    href="#inicio"
                    className={activeSection === 1 ? "Nav_Link hoverable undecorated Nav_Link_Active" : "Nav_Link hoverable undecorated"}
                >
                    Início
                </a>
                <a
                    href="#produtos"
                    className={activeSection === 2 ? "Nav_Link hoverable undecorated Nav_Link_Active" : "Nav_Link hoverable undecorated"}
                >
                    Produtos
                </a>
                <a
                    href="#solucoes"
                    className={activeSection === 3 ? "Nav_Link hoverable undecorated Nav_Link_Active" : "Nav_Link hoverable undecorated"}
                >
                    Soluções
                </a>
                <a
                    href="#sobre"
                    className={activeSection === 4 ? "Nav_Link hoverable undecorated Nav_Link_Active" : "Nav_Link hoverable undecorated"}
                >
                    Sobre
                </a>
                <a
                    href="#contato"
                    className={activeSection === 5 ? "Nav_Link hoverable undecorated Nav_Link_Active" : "Nav_Link hoverable undecorated"}
                >
                    Contato
                </a>
            </div>

            <div className="Nav_Utility">
                <div className="Nav_Tools_Container">
                    <a href="#idioma" className="Nav_Tool undecorated" title="Idioma">
                        <i className="material-icons hoverable">translate</i>
                    </a>
                    <a href="#busca" className="Nav_Tool undecorated" title="Busca" onClick={toggleSearchBarFunction}>
                        <i className="material-icons hoverable">search</i>
                    </a>
                    <a href="#perfil" className="Nav_Tool undecorated" title="Perfil">
                        <i className="material-icons hoverable">person</i>
                    </a>
                    <a href="#lista-de-compras" className="Nav_Tool undecorated" title="Lista de Compras">
                        <i className="material-icons hoverable">shopping_cart</i>
                    </a>
                </div>
                <a
                    href="#menu"
                    className={activeSection === 6 ? "Nav_Menu_Btn hoverable undecorated Nav_Menu_Btn_Active" : "Nav_Menu_Btn hoverable undecorated"}
                    title="Menu"
                >
                    <i className="material-icons">menu</i>
                </a>
            </div>
        </m.div>
    );
});

export default Navbar;
