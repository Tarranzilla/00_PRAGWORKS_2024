// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { toggleSearch } from "../../context/main-context.tsx";

const Searchbar = forwardRef(function Searchbar(props, ref: any) {
    const dispatch = useDispatch();
    const toggleSearchBarFunction = () => {
        dispatch(toggleSearch());
    };

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Search_Container" key={"searchbar_key"}>
            <div className="Search_Bar hoverable">
                <input className="Search_Bar_Input" type="text" placeholder="O que você procura?" />
                <button className="Search_Btn hoverable">
                    <i className="material-icons">search</i>
                </button>
            </div>
            <button className="Close_Btn hoverable" onClick={toggleSearchBarFunction}>
                <i className="material-icons">close</i>
            </button>
        </m.div>
    );
});

export default Searchbar;
