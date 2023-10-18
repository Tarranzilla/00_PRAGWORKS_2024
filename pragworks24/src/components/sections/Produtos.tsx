// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useDispatch } from "react-redux";
import { setActiveSection } from "../../context/main-context.tsx";

const Section_Produtos = forwardRef(function Section_Produtos(props, ref: any) {
    const dispatch = useDispatch();
    const [activeProduct, setActiveProduct] = useState(1);

    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    const setActiveProductClass = (id: number) => {
        setActiveProduct(id);
    };

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

            {/* Robôs */}
            {activeProduct === 1 && (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="Products_Container"
                    id="produtos-robos"
                    title="Robôs"
                    key="Product_Container_01"
                >
                    <div className="Product_Card">
                        <h3>RobiOS</h3>
                        <h2>GO</h2>
                    </div>
                    <div className="Product_Card">
                        <h3>RobiOS</h3>
                        <h2>INSPECTOR</h2>
                    </div>
                    <div className="Product_Card">
                        <h3>RobiOS</h3>
                        <h2>CARGO</h2>
                    </div>
                </m.div>
            )}

            {/* Softwares */}
            {activeProduct === 2 && (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="Products_Container"
                    id="produtos-softwares"
                    title="Softwares"
                    key="Product_Container_02"
                >
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>RobiOS</h2>
                    </div>
                    <div className="Product_Card">
                        <h3>RobiOS</h3>
                        <h2>STUDIO</h2>
                    </div>
                    <div className="Product_Card">
                        <h3>RobiOS</h3>
                        <h2>AVATAR</h2>
                    </div>
                </m.div>
            )}

            {/* Serviços */}
            {activeProduct === 3 && (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="Products_Container"
                    id="produtos-servicos"
                    title="Serviços"
                    key="Product_Container_03"
                >
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>Customização</h2>
                    </div>
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>Mapeamento de Ambientes</h2>
                    </div>
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>Treinamento e Suporte</h2>
                    </div>
                </m.div>
            )}

            {/* Experiências */}
            {activeProduct === 4 && (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="Products_Container"
                    id="produtos-experiencias"
                    title="Experiências"
                    key="Product_Container_04"
                >
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>Varejo</h2>
                    </div>
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>Indústria</h2>
                    </div>
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>Cultura</h2>
                    </div>
                </m.div>
            )}

            {/* Seletores */}
            <div className="Products_Selector">
                <button className="Product_Type_Selector hoverable" onClick={() => setActiveProductClass(1)}>
                    Robôs
                </button>
                <button className="Product_Type_Selector hoverable" onClick={() => setActiveProductClass(2)}>
                    Softwares
                </button>
                <button className="Product_Type_Selector hoverable" onClick={() => setActiveProductClass(3)}>
                    Serviços
                </button>
                <button className="Product_Type_Selector hoverable" onClick={() => setActiveProductClass(4)}>
                    Experiências
                </button>
            </div>
        </m.div>
    );
});

export default Section_Produtos;
