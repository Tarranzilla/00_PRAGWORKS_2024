// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { setActiveSection, setActiveProductClass } from "../../context/main-context";

import Robot_Card from "../cards/Robot_Card";
import Software_Card from "../cards/Software_Card";
import Service_Card from "../cards/Service_Card";
import Experience_Card from "../cards/Experience_Card";

const easeInOutQuad = [0.455, 0.03, 0.515, 0.955]; // This easing function provides a smooth start and a smooth end to the animation. It's a simple and widely appreciated easing curve.
const easeInOutCubic = [0.645, 0.045, 0.355, 1]; // This easing function is similar to the quad version but has a slightly more pronounced acceleration towards the middle of the animation.
const easeInOutExpo = [1, 0, 0, 1]; // This easing function starts and ends very softly, but has a bit more pronounced acceleration in the middle, giving it an interesting feel.
const customOvershoot = [0.23, 1, 0.32, 1.5]; // This custom cubic bezier curve gives a subtle bounce effect at the end of the animation, which can add a playful touch.

const customBezier = easeInOutCubic;

const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
    bounce: 0.5,
    velocity: 50,
};

const customTransition = springTransition;

const Section_Produtos = forwardRef(function Section_Produtos(props, ref: any) {
    const dispatch = useDispatch();
    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };
    const activeProductClass = useSelector((state: any) => state.activeProductClass);

    const handleSetActiveProductClass = (activeProductClass: any) => {
        dispatch(setActiveProductClass(activeProductClass));
    };

    const availableProducts = useSelector((state: any) => state.availableProducts);

    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onViewportEnter={() => {
                console.log("Produtos está visível!");
                setActiveSectionFunction(2);
            }}
            transition={{ duration: 1.0, type: "tween" }}
            className="LP_Section"
            id="produtos"
            key={"produtos_key"}
        >
            <h1 className="LP_Section_Title">Produtos</h1>

            <div className="Type_Header" key={"Product_Type_Header_A"}>
                <AnimatePresence mode="popLayout">
                    {activeProductClass === null && (
                        <m.h3 initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: -50 }} key="NPSelected" className="Type_Viewer_Title">
                            Nenhum Produto Selecionado
                        </m.h3>
                    )}
                    {activeProductClass === "robos" && (
                        <m.h3 initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: -50 }} key="ROBOS_Type" className="Type_Viewer_Title">
                            ROBÔS
                        </m.h3>
                    )}
                    {activeProductClass === "softwares" && (
                        <m.h3 initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: -50 }} key="SOFTWARES_TYPE" className="Type_Viewer_Title">
                            SOFTWARES
                        </m.h3>
                    )}
                    {activeProductClass === "servicos" && (
                        <m.h3 initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: -50 }} key="SERVICOS_TYPE" className="Type_Viewer_Title">
                            RobiOS UNIVERSE
                        </m.h3>
                    )}
                    {activeProductClass === "experiencias" && (
                        <m.h3 initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: -50 }} key="EXPERIENCIAS_TYPE" className="Type_Viewer_Title">
                            EXPERIÊNCIAS
                        </m.h3>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence mode="popLayout">
                {activeProductClass === null && (
                    <m.div className="Products_Container" key={"Product_Container_A"}>
                        <h3 className="No_Product_Selected_Title">Nenhuma Categoria de Produto Selecionada</h3>
                    </m.div>
                )}
                {activeProductClass === "robos" && (
                    <m.div
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100vw" }}
                        transition={customTransition}
                        className="Products_Container"
                        key={"Prod_Cont_1"}
                    >
                        {availableProducts.map((product: any) => {
                            if (product.class === "robos") {
                                return <Robot_Card product={product} key={product.id} />;
                            }
                        })}
                    </m.div>
                )}
                {activeProductClass === "softwares" && (
                    <m.div
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100vw" }}
                        transition={customTransition}
                        className="Products_Container"
                        key={"Prod_Cont_2"}
                    >
                        {availableProducts.map((product: any) => {
                            if (product.class === "softwares") {
                                return <Software_Card product={product} key={product.id} />;
                            }
                        })}
                    </m.div>
                )}
                {activeProductClass === "servicos" && (
                    <m.div
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100vw" }}
                        transition={customTransition}
                        className="Products_Container"
                        key={"Prod_Cont_3"}
                    >
                        {availableProducts.map((product: any) => {
                            if (product.class === "servicos") {
                                return <Service_Card product={product} key={product.id} />;
                            }
                        })}
                    </m.div>
                )}
                {activeProductClass === "experiencias" && (
                    <m.div
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100vw" }}
                        transition={customTransition}
                        className="Products_Container"
                        key={"Prod_Cont_4"}
                    >
                        {availableProducts.map((product: any) => {
                            if (product.class === "experiencias") {
                                return <Experience_Card product={product} key={product.id} />;
                            }
                        })}
                    </m.div>
                )}
            </AnimatePresence>

            {/* Seletores */}
            <div className="Products_Selector">
                <button
                    className={activeProductClass === "robos" ? "Product_Type_Selector hoverable selected" : "Product_Type_Selector hoverable"}
                    onClick={() => handleSetActiveProductClass("robos")}
                >
                    Robôs
                </button>
                <button
                    className={activeProductClass === "softwares" ? "Product_Type_Selector hoverable selected" : "Product_Type_Selector hoverable"}
                    onClick={() => handleSetActiveProductClass("softwares")}
                >
                    Softwares
                </button>
                <button
                    className={activeProductClass === "servicos" ? "Product_Type_Selector hoverable selected" : "Product_Type_Selector hoverable"}
                    onClick={() => handleSetActiveProductClass("servicos")}
                >
                    Serviços
                </button>
                <button
                    className={activeProductClass === "experiencias" ? "Product_Type_Selector hoverable selected" : "Product_Type_Selector hoverable"}
                    onClick={() => handleSetActiveProductClass("experiencias")}
                >
                    Experiências
                </button>
            </div>
        </m.div>
    );
});

export default Section_Produtos;
