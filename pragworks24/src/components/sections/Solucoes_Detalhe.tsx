// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { setActiveSection, setActiveProductClass, toggleSolutionDetails } from "../../context/main-context";

import GoThumb from "../../../assets/produtos/RobiOS_Go_Thumb_Image_01.png";
import InspectorThumb from "../../../assets/produtos/RobiOS_Inspector_Thumb_Image_01.png";
import CargoThumb from "../../../assets/produtos/RobiOS_Cargo_Thumb_Image_01.png";
import Icon_HR_All from "../icons/hr/Icon_HR_All";

const Solucoes_Detalhe = forwardRef(function Solucoes_Detalhe(props, ref: any) {
    const dispatch = useDispatch();
    const activeSolution = useSelector((state: any) => state.activeSolution);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);

    let index = 0;
    let intervalId: number;

    const currentPartners = activeSolution.partners;
    const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

    const animatePartner = () => {
        setCurrentPartnerIndex((prevIndex) => (prevIndex + 1) % currentPartners.length);
    };

    const handleVisibilityChange = () => {
        if (document.hidden) {
            // Page is not visible, clear the interval
            clearInterval(intervalId);
        } else {
            // Page is visible, restart the interval
            intervalId = setInterval(animatePartner, 2000);
        }
    };

    const demoMessage = `Olá, eu gostaria de fazer uma solicitação de demonstração para a seguinte Solução:\n\n${activeSolution.name}\n\n`;
    const demoPhoneNumber = "+5541999977955"; // Replace with your desired WhatsApp number

    const toggleFinishOrderButton = () => {
        const whatsappUrl = `https://wa.me/${demoPhoneNumber}/?text=${encodeURIComponent(demoMessage)}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activeSolution.imgSrc.length);
    };

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + activeSolution.imgSrc.length) % activeSolution.imgSrc.length);
    };

    const handleNextClick2 = () => {
        setCurrentPartnerIndex((prevIndex) => (prevIndex + 1) % activeSolution.partners.length);
    };

    const handlePrevClick2 = () => {
        setCurrentPartnerIndex((prevIndex) => (prevIndex - 1 + activeSolution.partners.length) % activeSolution.partners.length);
    };

    const toggleSolutionDetailButton = () => {
        dispatch(toggleSolutionDetails());
    };

    useEffect(() => {
        // Start the animation loop
        intervalId = setInterval(animatePartner, 2000);

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
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Solution_Detail Product_Detail">
            <div className="Solution_Detail_Header">
                <span className="material-icons Info_Icon">info</span>
                <h2 className="Privacy_Title Solution_Detail_Title">Detalhe de Solução</h2>
                <button className="Privacy_Close_Btn Close_Btn_B hoverable">
                    <span className="material-icons" onClick={toggleSolutionDetailButton}>
                        close
                    </span>
                </button>
            </div>
            <div className="Solution_Detail_Content">
                <div className="Solution_Detail_Text_Container">
                    <div className="Solution_Detail_Text_Wrapper">
                        <h1 className="Solution_Card_Detail_Title">{activeSolution.name}</h1>
                        <p className="Solution_Detail_Description">{activeSolution.description}</p>
                        <p className="Solution_Detail_FullDescription">{activeSolution.fullDescription}</p>
                        <h4 className="Solution_Recommended_Products_Title">Produtos que atuam nesta solução:</h4>
                        <div className="Solution_Recommended_Products_Container">
                            <div className="Solution_Recommended_Product hoverable">
                                <img className="Solution_Recommended_Product_Img" src={GoThumb} alt="RobiOS GO" />
                                <div className="Solution_Recommended_Product_Title">
                                    <h3 className="Solution_Recommended_Product_Prename">RobiOS</h3>
                                    <h3 className="Solution_Recommended_ProductName">GO</h3>
                                </div>
                            </div>
                            <div className="Solution_Recommended_Product hoverable">
                                <img className="Solution_Recommended_Product_Img" src={InspectorThumb} alt="RobiOS INSPECTOR" />
                                <div className="Solution_Recommended_Product_Title">
                                    <h3 className="Solution_Recommended_Product_Prename">RobiOS</h3>
                                    <h3 className="Solution_Recommended_ProductName">INSPECTOR</h3>
                                </div>
                            </div>
                            <div className="Solution_Recommended_Product hoverable">
                                <img className="Solution_Recommended_Product_Img" src={CargoThumb} alt="RobiOS CARGO" />
                                <div className="Solution_Recommended_Product_Title">
                                    <h3 className="Solution_Recommended_Product_Prename">RobiOS</h3>
                                    <h3 className="Solution_Recommended_ProductName">CARGO</h3>
                                </div>
                            </div>
                        </div>
                        <h4 className="Solution_Partner_Title">Parceiros que utilizam estes serviços:</h4>
                        <div className="Solution_Partner_Container">
                            <AnimatePresence mode="wait">
                                {activeSolution.partners.map(
                                    (partner, index) =>
                                        index === currentPartnerIndex && (
                                            <m.div
                                                key={index}
                                                className="Solution_Partner"
                                                initial={{ x: "200%" }}
                                                animate={{ x: "0" }}
                                                exit={{ x: "-200%" }}
                                            >
                                                <img className="Solution_Partner_Img" src={partner.imgSrc} alt={partner.name} />
                                            </m.div>
                                        )
                                )}
                            </AnimatePresence>
                            <button className="Previous_Btn Centered_Previous_Btn" onClick={handlePrevClick2}>
                                <span className="material-icons Previous_Btn_Icon">west</span>
                            </button>
                            <button className="Next_Btn Centered_Next_Btn" onClick={handleNextClick2}>
                                <span className="material-icons Next_Btn_Icon">east</span>
                            </button>
                        </div>

                        <div className="Solution_Detail_Footer">
                            <button className="ScheduleDemo_Btn hoverable" onClick={toggleFinishOrderButton}>
                                <Icon_HR_All iconName={"demo"} />
                                Agende uma Demonstração
                            </button>
                            <button className="ScheduleDemo_Btn hoverable" onClick={toggleFinishOrderButton}>
                                <Icon_HR_All iconName={"openWebLink"} />
                                Entre em Contato
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Solution_Detail_Image_Container">
                    <AnimatePresence mode="wait">
                        {activeSolution.imgSrc.map(
                            (imgSrc, index) =>
                                index === currentImageIndex && (
                                    <m.div
                                        className="Solution_Detail_Image_Block"
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <m.img className="Solution_Detail_Image" src={imgSrc} alt={activeSolution.name} />
                                    </m.div>
                                )
                        )}
                    </AnimatePresence>
                    <button className="Previous_Btn hoverable undecorated" onClick={handlePrevClick}>
                        <span className="material-icons Previous_Btn_Icon">west</span>
                    </button>
                    <button className="Next_Btn hoverable undecorated" onClick={handleNextClick}>
                        <span className="material-icons Next_Btn_Icon">east</span>
                    </button>
                </div>
            </div>
        </m.div>
    );
});

export default Solucoes_Detalhe;
