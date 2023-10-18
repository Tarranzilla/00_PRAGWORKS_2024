// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useDispatch } from "react-redux";
import { setActiveSection } from "../../context/main-context.tsx";

const Section_Contato = forwardRef(function Section_Contato(props, ref: any) {
    const dispatch = useDispatch();
    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onViewportEnter={() => {
                console.log("Contato está visível!");
                setActiveSectionFunction(5);
            }}
            transition={{ duration: 1.0, type: "tween" }}
            className="LP_Section"
            id="contato"
            key={"contato_key"}
        >
            <h1 className="LP_Section_Title">Contato</h1>
            <div className="Contact_Container">
                <h2>Entre em Contato, estamos a disposição!</h2>
                <button>Envie um email</button>
                <button>Entre em Contato pelo Whatsapp</button>
                <button>Inscreva-se na Newsletter</button>
                <div className="Contact_Form_Container">
                    <form className="Contact_Form">
                        <input type="text" placeholder="Nome" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Assunto" />
                        <textarea placeholder="Mensagem" />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </m.div>
    );
});

export default Section_Contato;
