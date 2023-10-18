// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useDispatch } from "react-redux";
import { setActiveSection } from "../../context/main-context.tsx";

const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
    bounce: 0.5,
    velocity: 50,
};

const customTransition = springTransition;

const Section_Inicio = forwardRef(function Section_Inicio(props, ref: any) {
    const dispatch = useDispatch();
    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    /* Brand Declaration Text Animate */
    const [text, setText] = useState("Agora");
    const textArray = ["Agora", "Interativo", "Humano"];
    let index = 0;
    let intervalId: number;

    const animateText = () => {
        setText(textArray[index]);
        index = (index + 1) % textArray.length;
    };

    const handleVisibilityChange = () => {
        if (document.hidden) {
            // Page is not visible, clear the interval
            clearInterval(intervalId);
        } else {
            // Page is visible, restart the interval
            intervalId = setInterval(animateText, 2000);
        }
    };

    useEffect(() => {
        // Start the animation loop
        intervalId = setInterval(animateText, 2000);

        // Add visibility change event listener
        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Cleanup function
        return () => {
            clearInterval(intervalId);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            index = 0; // Reset the index
        };
    }, []); // Run once on mount

    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onViewportEnter={() => {
                console.log("Início está visível!");
                setActiveSectionFunction(1);
            }}
            transition={{ duration: 1.0, type: "tween" }}
            className="LP_Section"
            id="inicio"
            key={"inicio_key"}
        >
            <h1 className="LP_Section_Title">Início</h1>
            <div className="auto_slider_card_container" id="auto_slider_blogPosts">
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>

                {/* Cópias */}
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
            </div>
            <div className="Brand_Declaration">
                <h2>O Futuro da Robótica é</h2>
                <AnimatePresence mode="popLayout">
                    {text === "Agora" && (
                        <m.h2
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            key="Agora_BRAND"
                            className="Brand_Name"
                        >
                            Agora
                        </m.h2>
                    )}
                    {text === "Interativo" && (
                        <m.h2
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            key="Interativo_BRAND"
                            className="Brand_Name"
                        >
                            Interativo
                        </m.h2>
                    )}
                    {text === "Humano" && (
                        <m.h2
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            key="Humano_BRAND"
                            className="Brand_Name"
                        >
                            Humano
                        </m.h2>
                    )}
                </AnimatePresence>
            </div>
            <div className="auto_slider_card_container" id="auto_slider_partners">
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>

                {/* Cópias */}
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
                <div className="auto_slider_card">Slider Card</div>
            </div>
        </m.div>
    );
});

export default Section_Inicio;
