// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

// Icons Imports
import Icon_Whatsapp from "../icons/Icon_Whatsapp";
import Icon_Linkedin from "../icons/Icon_Linkedin";
import Icon_Facebook from "../icons/Icon_Facebook";
import Icon_Instagram from "../icons/Icon_Instagram";
import Icon_Youtube from "../icons/Icon_Youtube";

const Footer = forwardRef(function Footer(props, ref: any) {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Footer" key={"Footer_key"}>
            <div className="Footer_Actions_Container">
                <a href="#termos-e-condicoes" className="Footer_Action hoverable undecorated" title="Termos e Condições">
                    <i className="material-icons">assignment</i>
                    <p className="Footer_Action_Title">Termos e Condições</p>
                </a>
                <a href="#privacidade" className="Footer_Action hoverable undecorated" title="Privacidade">
                    <i className="material-icons">privacy_tip</i>
                    <p className="Footer_Action_Title">Privacidade</p>
                </a>
                <a href="#mapa-do-site" className="Footer_Action hoverable undecorated" title="Mapa do Site">
                    <i className="material-icons">explore</i>
                    <p className="Footer_Action_Title">Mapa do Site</p>
                </a>
            </div>

            <div className="Footer_Copyright" title="Footer Copyright">
                Human Robotics © 2024
            </div>

            <div className="Footer_SocialMedia_Container">
                <Icon_Whatsapp />
                <Icon_Linkedin />
                <Icon_Facebook />
                <Icon_Instagram />
                <Icon_Youtube />
            </div>
        </m.div>
    );
});

export default Footer;
