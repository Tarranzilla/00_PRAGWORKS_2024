// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import {
    setActiveSection,
    toggleMenu,
    setActiveProduct,
    toggleProductDetails,
    setActiveProductClass,
    togglePrivacyPolicy,
    toggleTerms,
    toggleSiteMap,
    setMode,
    toggleCurrency,
    toggleLanguage,
} from "../../context/main-context.tsx";
import { persistor } from "../../main.tsx";

const Section_Menu = forwardRef(function Section_Menu(props, ref: any) {
    const dispatch = useDispatch();

    const productDetailsIsOpen = useSelector((state: any) => state.productDetailsIsOpen);
    const mode = useSelector((state: any) => state.mode);
    const currencyType = useSelector((state: any) => state.currencyType);
    const language = useSelector((state: any) => state.language);

    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    const handleResetButton = () => {
        persistor.purge();
        window.location.reload();
    };

    const toggleMenuButton = () => {
        dispatch(toggleMenu());
    };

    const toggleProductDetailsButton = (productClass, productId) => {
        dispatch(toggleMenu());
        dispatch(setActiveProductClass(productClass));
        dispatch(setActiveProduct({ id: productId }));
        if (!productDetailsIsOpen) {
            dispatch(toggleProductDetails());
        }
    };

    const togglePrivacyButton = () => {
        dispatch(togglePrivacyPolicy());
        dispatch(toggleMenu());
    };

    const toggleTermsButton = () => {
        dispatch(toggleTerms());
        dispatch(toggleMenu());
    };

    const toggleSiteMapButton = () => {
        dispatch(toggleSiteMap());
        dispatch(toggleMenu());
    };

    const toggleCurrencyButton = () => {
        dispatch(toggleCurrency());
    };

    const toggleLanguageButton = () => {
        dispatch(toggleLanguage());
    };

    const toggleColorModeButton = () => {
        dispatch(setMode());
        // "light" || "dark"
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
            <a href="#" className="material-icons Menu_GoUp_Btn hoverable undecorated">
                keyboard_double_arrow_up
            </a>
            <h1 className="LP_Section_Title">Menu</h1>
            <div className="Menu_Container">
                <div className="Menu_Main_List">
                    <div className="Main_List_Header">
                        <a href="#" className="Menu_Link hoverable undecorated" onClick={toggleMenuButton}>
                            <span className="material-icons LP_Links_Icon">flag_circle</span>
                            <p>Início</p>
                        </a>
                    </div>
                    <div className="List_Horizontal_Organizer">
                        <div className="List_Line_Container">
                            <div className="List_Line"></div>
                        </div>
                        <div className="LP_Links">
                            <div className="Product_Links_Container">
                                <div className="Product_Links_Header">
                                    <a href="#produtos" className="Menu_Link hoverable undecorated" onClick={toggleMenuButton}>
                                        Produtos
                                    </a>
                                </div>
                                <div className="List_Horizontal_Organizer">
                                    <div className="List_Line_Container">
                                        <div className="List_Line"></div>
                                    </div>
                                    <div className="Product_Links">
                                        <a
                                            href="#produtos"
                                            className="Menu_Link hoverable undecorated"
                                            onClick={() => {
                                                toggleProductDetailsButton("robos", 0);
                                            }}
                                        >
                                            RobiOS GO
                                        </a>
                                        <a
                                            href="#produtos"
                                            className="Menu_Link hoverable undecorated"
                                            onClick={() => {
                                                toggleProductDetailsButton("robos", 1);
                                            }}
                                        >
                                            RobiOS Inspector
                                        </a>
                                        <a
                                            href="#produtos"
                                            className="Menu_Link hoverable undecorated"
                                            onClick={() => {
                                                toggleProductDetailsButton("robos", 2);
                                            }}
                                        >
                                            RobiOS Cargo
                                        </a>
                                        <a
                                            href="#produtos"
                                            className="Menu_Link hoverable undecorated"
                                            onClick={() => {
                                                toggleProductDetailsButton("softwares", 3);
                                            }}
                                        >
                                            RobiOS
                                        </a>
                                        <a
                                            href="#produtos"
                                            className="Menu_Link hoverable undecorated"
                                            onClick={() => {
                                                toggleProductDetailsButton("softwares", 4);
                                            }}
                                        >
                                            RobiOS Studio
                                        </a>
                                        <a
                                            href="#produtos"
                                            className="Menu_Link hoverable undecorated"
                                            onClick={() => {
                                                toggleProductDetailsButton("softwares", 5);
                                            }}
                                        >
                                            RobiOS Avatar
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a href="#solucoes" className="Menu_Link hoverable undecorated" onClick={toggleMenuButton}>
                                Soluções
                            </a>
                            <a href="#sobre" className="Menu_Link hoverable undecorated" onClick={toggleMenuButton}>
                                Sobre
                            </a>

                            <a href="#contato" className="Menu_Link hoverable undecorated" onClick={toggleMenuButton}>
                                Contato
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Menu_Options">
                    <div className="Secondary_Links">
                        <a href="#privacidade" className="Menu_Link_Secondary hoverable undecorated" onClick={togglePrivacyButton}>
                            <span className="material-icons">privacy_tip</span>Privacidade
                        </a>
                        <a href="#termos" className="Menu_Link_Secondary hoverable undecorated" onClick={toggleTermsButton}>
                            <span className="material-icons">assignment</span>
                            Termos
                        </a>
                        <a href="#mapa-do-site" className="Menu_Link_Secondary hoverable undecorated" onClick={toggleSiteMapButton}>
                            <span className="material-icons">map</span>Mapa do Site
                        </a>
                    </div>

                    <div className="Configurations">
                        <div className="Configurations_Header">
                            <div className="Menu_Link">
                                <span className="material-icons LP_Links_Icon">settings</span>
                                <p>Configurações</p>
                            </div>
                        </div>
                        <div className="LP_Links_Horizontal_Organizer Config_Organizer">
                            <div className="LP_Links_Line_Container">
                                <div className="LP_Links_Line"></div>
                            </div>
                            <div className="Configurations_Links">
                                <a href="#Idioma" className="Menu_Link Config_Link" onClick={toggleLanguageButton}>
                                    Idioma:{" "}
                                    <span className={language === "pt-br" ? "Config_Option active" : "Config_Option hoverable"}>Português</span>
                                    <span className={language === "en" ? "Config_Option active" : "Config_Option hoverable"}>English</span>
                                </a>
                                <a href="#Moeda" className="Menu_Link Config_Link" onClick={toggleCurrencyButton}>
                                    Moeda:{" "}
                                    <span className={currencyType === "BRL" ? "Config_Option active" : "Config_Option hoverable"}>Real (R$)</span>{" "}
                                    <span className={currencyType === "USD" ? "Config_Option active" : "Config_Option hoverable"}>Dollar (USD)</span>
                                </a>
                                <a href="#Cores" className="Menu_Link Config_Link" onClick={toggleColorModeButton}>
                                    Modo de Cor: <span className={mode === "dark" ? "Config_Option active" : "Config_Option hoverable"}>Escuro</span>
                                    <span className={mode === "light" ? "Config_Option active" : "Config_Option"}>Claro</span>
                                </a>
                                <button className="Config_Reset hoverable" onClick={handleResetButton}>
                                    <span className="material-icons">restart_alt</span>Reiniciar aplicativo e limpar todos os dados
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="Pragmata_Web hoverable">
                        <p>
                            Webdesign por{" "}
                            <a href="https://pragmata.ninja" target="_blank" rel="noopener noreferrer">
                                Pragmata
                            </a>
                        </p>

                        <svg id="PragLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.87 172.3">
                            <g id="PragLogoGroup">
                                <g>
                                    <path d="m108.11,91.75c3.38-8.24,3.55-11.42.64-14.31-1.64-1.52-2.44-1.99-7.65-4.13l-16.35-6.71-10.63,25.92,15.5,6.36c11.63,4.77,13.97,3.89,18.49-7.13Z" />
                                    <path d="m173.39,96.03l-36.02-19.05c-1.6-.85-1.98-2.97-.76-4.32l27.33-30.22c1.81-2,0-5.14-2.64-4.58l-39.84,8.56c-1.77.38-3.42-1.01-3.36-2.82l1.51-40.72c.1-2.69-3.31-3.93-4.97-1.81l-25.02,32.16c-1.11,1.43-3.27,1.43-4.38,0L60.22,1.08c-1.65-2.13-5.07-.89-4.97,1.81l1.51,40.72c.07,1.81-1.59,3.2-3.36,2.82l-39.84-8.56c-2.64-.57-4.45,2.58-2.64,4.58l27.33,30.22c1.21,1.34.84,3.47-.76,4.32L1.48,96.03c-2.38,1.26-1.75,4.83.92,5.2l40.36,5.59c.23.03.44.09.64.17,1.42.56,3.03-.13,3.61-1.54l25.39-61.88,32.1,13.17q10.42,4.27,13.03,5.49c7.6,3.54,12.56,9.4,13.76,16.12.97,5.92-.2,11.52-4.42,21.82-5.02,12.23-9.91,18.29-16.22,20.23-4.7,1.47-9.88,1.32-14.78-.54-.78-.18-3.32-1.22-12.99-4.9l-12.79-5.25c-1.43-.59-3.07.1-3.66,1.53l-7.46,18.19c-.59,1.43-2.22,2.12-3.66,1.53l-13.37-5.48c-1.43-.59-3.08.1-3.66,1.54l-8.69,21.38c-1.01,2.5,1.77,4.83,4.05,3.4l34.51-21.67c1.53-.96,3.56-.22,4.12,1.5l12.51,38.78c.83,2.57,4.46,2.57,5.28,0l12.51-38.78c.56-1.72,2.58-2.46,4.12-1.5l34.51,21.67c2.28,1.43,5.06-.9,4.05-3.4l-15.35-37.75c-.68-1.68.4-3.55,2.19-3.8l40.36-5.59c2.67-.37,3.3-3.94.92-5.2Z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </m.div>
    );
});

export default Section_Menu;
