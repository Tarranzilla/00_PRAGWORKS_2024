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
            <div className="auto_slider_card_container auto_slider_experiencias" id="auto_slider_blogPosts">
                <div className="auto_slider_track slider_experiencias">
                    <div className="auto_slider_card hoverable">Slider Card 1</div>
                    <div className="auto_slider_card hoverable">Slider Card 2</div>
                    <div className="auto_slider_card hoverable">Slider Card 3</div>
                    <div className="auto_slider_card hoverable">Slider Card 4</div>
                    <div className="auto_slider_card hoverable">Slider Card 5</div>
                    <div className="auto_slider_card hoverable">Slider Card 6</div>
                    <div className="auto_slider_card hoverable">Slider Card 7</div>
                    <div className="auto_slider_card hoverable">Slider Card 8</div>
                    <div className="auto_slider_card hoverable">Slider Card 9</div>
                    <div className="auto_slider_card hoverable">Slider Card 10</div>
                    <div className="auto_slider_card hoverable">Slider Card 11</div>
                    <div className="auto_slider_card hoverable">Slider Card 12</div>
                    <div className="auto_slider_card hoverable">Slider Card 13</div>
                    <div className="auto_slider_card hoverable">Slider Card 14</div>
                    <div className="auto_slider_card hoverable">Slider Card 15</div>
                    <div className="auto_slider_card hoverable">Slider Card 16</div>
                    <div className="auto_slider_card hoverable">Slider Card 17</div>

                    {/* Cópias */}
                    <div className="auto_slider_card hoverable">Slider Card 1B</div>
                    <div className="auto_slider_card hoverable">Slider Card 2B</div>
                    <div className="auto_slider_card hoverable">Slider Card 3B</div>
                    <div className="auto_slider_card hoverable">Slider Card 4B</div>
                    <div className="auto_slider_card hoverable">Slider Card 5B</div>
                    <div className="auto_slider_card hoverable">Slider Card 6B</div>
                    <div className="auto_slider_card hoverable">Slider Card 7B</div>
                    <div className="auto_slider_card hoverable">Slider Card 8B</div>
                    <div className="auto_slider_card hoverable">Slider Card 9B</div>
                    <div className="auto_slider_card hoverable">Slider Card 10B</div>
                    <div className="auto_slider_card hoverable">Slider Card 11B</div>
                    <div className="auto_slider_card hoverable">Slider Card 12B</div>
                    <div className="auto_slider_card hoverable">Slider Card 13B</div>
                    <div className="auto_slider_card hoverable">Slider Card 14B</div>
                    <div className="auto_slider_card hoverable">Slider Card 15B</div>
                    <div className="auto_slider_card hoverable">Slider Card 16B</div>
                    <div className="auto_slider_card hoverable">Slider Card 17B</div>
                </div>
            </div>
            <div className="Brand_Declaration">
                <h2 className="Brand_Fixed_Phrase">O Futuro da Robótica é</h2>
                <AnimatePresence mode="popLayout">
                    {text === "Agora" && (
                        <m.h2
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            key="Agora_BRAND"
                            className="Brand_Changing_Word"
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
                            className="Brand_Changing_Word"
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
                            className="Brand_Changing_Word"
                        >
                            Humano
                        </m.h2>
                    )}
                </AnimatePresence>
            </div>
            <div className="auto_slider_card_container" id="auto_slider_partners">
                <div className="auto_slider_track slider_parceiros">
                    <div className="auto_slider_card hoverable">Slider Card 1</div>
                    <div className="auto_slider_card hoverable">Slider Card 2</div>
                    <div className="auto_slider_card hoverable">Slider Card 3</div>
                    <div className="auto_slider_card hoverable">Slider Card 4</div>
                    <div className="auto_slider_card hoverable">Slider Card 5</div>
                    <div className="auto_slider_card hoverable">Slider Card 6</div>
                    <div className="auto_slider_card hoverable">Slider Card 7</div>
                    <div className="auto_slider_card hoverable">Slider Card 8</div>
                    <div className="auto_slider_card hoverable">Slider Card 9</div>
                    <div className="auto_slider_card hoverable">Slider Card 10</div>
                    <div className="auto_slider_card hoverable">Slider Card 11</div>
                    <div className="auto_slider_card hoverable">Slider Card 12</div>

                    {/* Cópias */}
                    <div className="auto_slider_card hoverable">Slider Card 1B</div>
                    <div className="auto_slider_card hoverable">Slider Card 2B</div>
                    <div className="auto_slider_card hoverable">Slider Card 3B</div>
                    <div className="auto_slider_card hoverable">Slider Card 4B</div>
                    <div className="auto_slider_card hoverable">Slider Card 5B</div>
                    <div className="auto_slider_card hoverable">Slider Card 6B</div>
                    <div className="auto_slider_card hoverable">Slider Card 7B</div>
                    <div className="auto_slider_card hoverable">Slider Card 8B</div>
                    <div className="auto_slider_card hoverable">Slider Card 9B</div>
                    <div className="auto_slider_card hoverable">Slider Card 10B</div>
                    <div className="auto_slider_card hoverable">Slider Card 11B</div>
                    <div className="auto_slider_card hoverable">Slider Card 12B</div>
                </div>
            </div>
        </m.div>
    );
});

export default Section_Inicio;
