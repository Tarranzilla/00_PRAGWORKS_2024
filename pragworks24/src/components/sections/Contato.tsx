// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence, LayoutGroup } from "framer-motion";

//React Redux Imports
import { useDispatch } from "react-redux";
import { setActiveSection } from "../../context/main-context.tsx";

const Section_Contato = forwardRef(function Section_Contato(props, ref: any) {
    const dispatch = useDispatch();
    const setActiveSectionFunction = (id: number) => {
        dispatch(setActiveSection(id));
    };

    const [map1isOpen, setMap1isOpen] = useState(true);
    const [map2isOpen, setMap2isOpen] = useState(false);

    const toggleMap1 = () => {
        setMap1isOpen(!map1isOpen);
    };

    const toggleMap2 = () => {
        setMap2isOpen(!map2isOpen);
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
                <h3 className="Contact_CallToAction">Sinta-se a vontade para entrar em contato, estamos de prontidão para lhe atender!</h3>
                <div className="Contact_Info">
                    <div className="Contact_Info_Item">
                        <h3>Telefone:</h3>
                        <p className="Contact_Info_Item_Detail_B">+55 (41) 999 999 999</p>
                    </div>

                    <div className="Contact_Info_Item">
                        <h3 className="Contact_Info_Title">Email:</h3> <p className="Contact_Info_Item_Detail">contato@humanrobotics.com.br</p>
                    </div>

                    <div className="Contact_Info_Item">
                        <h3 className="Contact_Info_Title">
                            Escritório
                            <button className="Contact_Location_Btn hoverable" onClick={toggleMap1}>
                                <span className="material-icons">map</span>
                                {map1isOpen ? "Ocultar Mapa" : "Ver Mapa"}
                            </button>
                        </h3>
                        <p className="Contact_Info_Item_Detail">Curitiba, Paraná, Brasil.</p>
                    </div>

                    <div className="Contact_Info_Item">
                        <h3 className="Contact_Info_Title">
                            Laboratório
                            <button className="Contact_Location_Btn hoverable" onClick={toggleMap2}>
                                <span className="material-icons">map</span>
                                {map2isOpen ? "Ocultar Mapa" : "Ver Mapa"}
                            </button>
                        </h3>
                        <p className="Contact_Info_Item_Detail">Curitiba, Paraná, Brasil. </p>
                    </div>
                </div>
                <div className="Contact_Action_Container">
                    <a className="Contact_Action_Btn Btn_Class hoverable undecorated" href="mailto:recipient@example.com">
                        <i className="material-icons">email</i>
                        <p>Enviar Email</p>
                    </a>
                    <a
                        className="Contact_Action_Btn Btn_Class hoverable undecorated"
                        href="https://api.whatsapp.com/send?phone=5541999977955&text=Ol%C3%A1"
                        target="_blank"
                    >
                        <span className="material-icons">perm_phone_msg</span>
                        <p>Entre em contato pelo WhatsApp</p>
                    </a>
                    <a
                        className="Contact_Action_Btn Btn_Class hoverable undecorated"
                        href="https://api.whatsapp.com/send?phone=5541999977955&text=Ol%C3%A1"
                        target="_blank"
                    >
                        <span className="material-icons">newspaper</span>
                        <p>Inscreva-se na Newsletter</p>
                    </a>
                </div>
            </div>
            <m.div layout layoutRoot className="Maps_Master_Container">
                {map1isOpen && (
                    <m.div
                        layout="preserve-aspect"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="Map_Container Map_1"
                        key="mapa_01"
                        drag
                        dragSnapToOrigin
                    >
                        <div className="Map_Header">
                            <span className="material-icons Info_Icon">info</span>
                            <h3 className="Map_Title">Mapa para o Escritório</h3>
                            <button className="Map_Close_Btn hoverable" onClick={toggleMap1}>
                                <span className="material-icons">close</span>
                            </button>
                        </div>
                        <div className="Map_Body">
                            <iframe
                                className="Map_Iframe"
                                title="Google Maps"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDyXfuRSunXyy-YO9HSag0AFrMJexBPcZA&q=Curitiba`}
                                allowFullScreen
                                key="mapa_02_iframe"
                            ></iframe>
                        </div>
                    </m.div>
                )}

                {map2isOpen && (
                    <m.div
                        layout="preserve-aspect"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="Map_Container Map_2"
                        key="mapa_02"
                        drag
                        dragSnapToOrigin
                    >
                        <div className="Map_Header">
                            <span className="material-icons">info</span>
                            <h3 className="Map_Title">Mapa para o Laboratório</h3>
                            <button className="Map_Close_Btn hoverable" onClick={toggleMap2}>
                                <span className="material-icons">close</span>
                            </button>
                        </div>
                        <div className="Map_Body">
                            <iframe
                                className="Map_Iframe"
                                title="Google Maps"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDyXfuRSunXyy-YO9HSag0AFrMJexBPcZA&q=Curitiba`}
                                allowFullScreen
                                key="mapa_02_iframe"
                            ></iframe>
                        </div>
                    </m.div>
                )}
            </m.div>
        </m.div>
    );
});

export default Section_Contato;
