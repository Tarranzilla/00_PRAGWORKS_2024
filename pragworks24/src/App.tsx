// Vanilla React Imports
import { useEffect, useState } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence, useScroll } from "framer-motion";

// React Router Imports
import { Outlet } from "react-router-dom";

//React Redux Imports
import { useSelector, useDispatch } from "react-redux";

import { setLgpdConsent } from "./context/main-context";

import ScrollToHashElement from "./utils/ScrollToHashElement.tsx";

//Components Imports
import Navbar from "./components/main/Navbar";
import Searchbar from "./components/main/Searchbar";
import Footer from "./components/main/Footer";
import Section_Menu from "./components/sections/Menu.tsx";

import Icon_HumanRobotics from "./components/icons/Icon_HumanRobotics";
import { clearPersistedData } from "./main.tsx";

function App() {
    clearPersistedData();
    const dispatch = useDispatch();

    const isLoading = useSelector((state: any) => state.isLoading);
    const menuIsOpen = useSelector((state: any) => state.menuIsOpen);
    const cartIsOpen = useSelector((state: any) => state.cartIsOpen);
    const checkoutHelpIsOpen = useSelector((state: any) => state.checkoutHelpIsOpen);
    const privacyPolicyIsOpen = useSelector((state: any) => state.privacyPolicyIsOpen);
    const termsIsOpen = useSelector((state: any) => state.termsIsOpen);
    const siteMapIsOpen = useSelector((state: any) => state.siteMapIsOpen);
    const lgpdConsent = useSelector((state: any) => state.lgpdConsent);
    const searchIsOpen = useSelector((state: any) => state.searchIsOpen);

    const isSearchBarOpen = useSelector((state: any) => state.searchIsOpen);
    const { scrollYProgress } = useScroll();

    const [isLocalLoading, setIsLocalLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLocalLoading(false);
            document.body.style.overflow = "auto";
        }, 5000);
    }, []);

    return (
        <>
            <ScrollToHashElement />
            <AnimatePresence mode="popLayout">
                {/* Loading Screen */}
                {isLocalLoading && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Loading_Screen">
                        <m.div
                            layout
                            initial={{ opacity: 1 }}
                            animate={{ rotateY: [0, 180, 360, 0, 180, 360, 0] }}
                            transition={{ duration: 5, ease: "easeInOut" }}
                            exit={{ opacity: 0, transition: { duration: 0.5 } }}
                            className="Loading_Screen_Logo"
                        >
                            <Icon_HumanRobotics />
                        </m.div>
                    </m.div>
                )}

                <Navbar key="Navbar_Component_Key" />

                {/* Cookies Banner */}
                {!lgpdConsent && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="Cookies_Banner"
                        key={"cookies_banner_key"}
                    >
                        <m.div drag dragSnapToOrigin className="Cookies_Banner_Card">
                            <span className="material-icons Cookies_Banner_Icon hoverable">cookie</span>
                            <p className="Cookies_Banner_Text">Este site usa cookies para melhorar sua experiência.</p>
                            <p className="Cookies_Banner_Text">
                                {" "}
                                Ao clicar em "Aceitar e Fechar" você concorda com o uso de cookies, termos e políticas do site.
                            </p>
                            <m.button
                                whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                                className="Cookies_Banner_Btn hoverable"
                                onClick={() => {
                                    dispatch(setLgpdConsent());
                                }}
                            >
                                Aceitar e Fechar
                            </m.button>
                        </m.div>
                    </m.div>
                )}

                {/* Menu */}

                {/* Section Observer */}
                <div className="Section_Observer" key={"section_observer_key"}></div>

                {/* Search Bar */}
                {isSearchBarOpen && <Searchbar key="Searchbar_Component_Key" />}

                {/* Progress Bar */}
                <m.div className="progress-bar" style={{ scaleX: scrollYProgress }} key={"progress_bar_key"} />
                <m.div className="progress-bar-bg" key={"progress_bar_bg_key"}></m.div>
            </AnimatePresence>

            {/* Outlet */}
            <Outlet />

            <Section_Menu />
            <div className="Section_Divider Section_Divider_With_Text" id="SD06" key={"SD06_key"}>
                <h1 className="Section_Divider_Text">Human Robotics</h1>
            </div>

            <AnimatePresence mode="popLayout">
                <Footer key="Footer_Component_Key" />
            </AnimatePresence>
        </>
    );
}

export default App;
