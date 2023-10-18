// Vanilla React Imports
import { useEffect, useState } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence, useScroll } from "framer-motion";

// React Router Imports
import { Outlet } from "react-router-dom";

//React Redux Imports
import { useSelector, useDispatch } from "react-redux";

// Icons Imports
import Icon_HumanRobotics from "./components/icons/Icon_HumanRobotics";
import Icon_Whatsapp from "./components/icons/Icon_Whatsapp";
import Icon_Linkedin from "./components/icons/Icon_Linkedin";
import Icon_Facebook from "./components/icons/Icon_Facebook";
import Icon_Instagram from "./components/icons/Icon_Instagram";
import Icon_Youtube from "./components/icons/Icon_Youtube";

function App() {
    // const [state, setState] = useState(initialState);

    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

    function toggleSearchBar() {
        setIsSearchBarOpen(!isSearchBarOpen);
    }

    const { scrollYProgress } = useScroll();

    return (
        <>
            <AnimatePresence mode="popLayout">
                {/* Navbar */}
                <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Navbar" key={"navbar_key"}>
                    <a href="#" className="Nav_Logo_Container undecorated">
                        <Icon_HumanRobotics />
                        <h1 className="Nav_Logotype">Human Robotics</h1>
                    </a>
                    <div className="Nav_Links_Container">
                        <a href="#inicio" className="Nav_Link hoverable undecorated">
                            Início
                        </a>
                        <a href="#produtos" className="Nav_Link hoverable undecorated">
                            Produtos
                        </a>
                        <a href="#solucoes" className="Nav_Link hoverable undecorated">
                            Soluções
                        </a>
                        <a href="#sobre" className="Nav_Link hoverable undecorated">
                            Sobre
                        </a>
                        <a href="#contato" className="Nav_Link hoverable undecorated">
                            Contato
                        </a>
                    </div>

                    <div className="Nav_Utility">
                        <div className="Nav_Tools_Container">
                            <a href="#idioma" className="Nav_Tool undecorated" title="Idioma">
                                <i className="material-icons hoverable">translate</i>
                            </a>
                            <a href="#busca" className="Nav_Tool undecorated" title="Busca" onClick={toggleSearchBar}>
                                <i className="material-icons hoverable">search</i>
                            </a>
                            <a href="#perfil" className="Nav_Tool undecorated" title="Perfil">
                                <i className="material-icons hoverable">person</i>
                            </a>
                            <a href="#lista-de-compras" className="Nav_Tool undecorated" title="Lista de Compras">
                                <i className="material-icons hoverable">shopping_cart</i>
                            </a>
                        </div>
                        <a href="#menu" className="Nav_Menu_Btn hoverable undecorated" title="Menu">
                            <i className="material-icons">menu</i>
                        </a>
                    </div>
                </m.div>

                {/* Section Observer */}
                <div className="Section_Observer" key={"section_observer_key"}></div>

                {/* Search Bar */}
                {isSearchBarOpen && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Search_Container" key={"searchbar_key"}>
                        <div className="Search_Bar hoverable">
                            <input className="Search_Bar_Input" type="text" placeholder="O que você procura?" />
                            <button className="Search_Btn hoverable">
                                <i className="material-icons">search</i>
                            </button>
                        </div>
                        <button className="Close_Btn hoverable" onClick={toggleSearchBar}>
                            <i className="material-icons">close</i>
                        </button>
                    </m.div>
                )}

                {/* Progress Bar */}
                <m.div className="progress-bar" style={{ scaleX: scrollYProgress }} key={"progress_bar_key"} />

                {/* Outlet */}
                <Outlet />

                {/* Footer */}
                <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Footer" key={"Footer_key"}>
                    <div className="Footer_Actions_Container">
                        <a href="#termos-e-condicoes" className="Footer_Action hoverable undecorated" title="Termos e Condições">
                            <i className="material-icons">assignment</i>
                            <p className="Footer_Action_Title">Termos e Condições</p>
                        </a>
                        <a href="#privacidade" className="Footer_Action hoverable undecorated" title="Privacidade">
                            <i className="material-icons">privacy_tip</i>
                            <p className="Footer_Action_Title">Privacidade</p>
                        </a>
                        <a href="#mapa-do-site" className="Footer_Action hoverable undecorated" title="Mapa do Site">
                            <i className="material-icons">explore</i>
                            <p className="Footer_Action_Title">Mapa do Site</p>
                        </a>
                    </div>

                    <div className="Footer_Copyright" title="Footer Copyright">
                        Human Robotics © 2024
                    </div>

                    <div className="Footer_SocialMedia_Container">
                        <Icon_Whatsapp />
                        <Icon_Linkedin />
                        <Icon_Facebook />
                        <Icon_Instagram />
                        <Icon_Youtube />
                    </div>
                </m.div>
            </AnimatePresence>
        </>
    );
}

export default App;
