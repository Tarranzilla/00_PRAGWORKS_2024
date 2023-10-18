// Vanilla React Imports
import { useEffect, useState } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence, useScroll } from "framer-motion";

// React Router Imports
import { Outlet } from "react-router-dom";

//React Redux Imports
import { useSelector, useDispatch } from "react-redux";

//Components Imports
import Navbar from "./components/main/Navbar";
import Searchbar from "./components/main/Searchbar";
import Footer from "./components/main/Footer";

function App() {
    const isSearchBarOpen = useSelector((state: any) => state.searchIsOpen);
    const { scrollYProgress } = useScroll();

    return (
        <>
            <AnimatePresence mode="popLayout">
                <Navbar key="Navbar_Component_Key" />

                {/* Section Observer */}
                <div className="Section_Observer" key={"section_observer_key"}></div>

                {/* Search Bar */}
                {isSearchBarOpen && <Searchbar key="Searchbar_Component_Key" />}

                {/* Progress Bar */}
                <m.div className="progress-bar" style={{ scaleX: scrollYProgress }} key={"progress_bar_key"} />
            </AnimatePresence>

            {/* Outlet */}
            <Outlet />

            <AnimatePresence mode="popLayout">
                <Footer key="Footer_Component_Key" />
            </AnimatePresence>
        </>
    );
}

export default App;
