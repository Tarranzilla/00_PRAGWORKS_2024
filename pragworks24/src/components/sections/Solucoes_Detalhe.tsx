// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { setActiveSection, setActiveProductClass, toggleSolutionDetails } from "../../context/main-context";

const Solucoes_Detalhe = forwardRef(function Solucoes_Detalhe(props, ref: any) {
    const dispatch = useDispatch();
    const activeSolution = useSelector((state: any) => state.activeSolution);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

    const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);

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

    // Auto-play effect using setInterval
    useEffect(() => {
        let intervalId;

        if (isAutoPlayActive) {
            intervalId = setInterval(() => {
                setCurrentPartnerIndex((prevIndex) => (prevIndex + 1) % activeSolution.partners.length);
            }, 3000); // Change image every 3 seconds
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isAutoPlayActive, activeSolution.partners.length]);

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

                <div className="Solution_Detail_Text_Container">
                    <h2 className="Solution_Detail_Content_Title">{activeSolution.name}</h2>
                    <p className="Solution_Detail_Description">{activeSolution.description}</p>
                    <p className="Solution_Detail_FullDescription">{activeSolution.fullDescription}</p>
                    <p className="Solution_Recommended_Products_Title">Produtos que atuam nesta solução:</p>
                    <div className="Solution_Recommended_Products_Container">
                        <h3 className="Solution_Recommended_Product">RobiOS GO</h3>
                        <h3 className="Solution_Recommended_Product">RobiOS INPSECTOR</h3>
                        <h3 className="Solution_Recommended_Product">RobiOS CARGO</h3>
                    </div>
                    <p className="Solution_Partner_Title">Parceiros que utilizam nossos serviços:</p>
                    <div className="Solution_Partner_Container">
                        <AnimatePresence mode="wait">
                            {activeSolution.partners.map(
                                (partner, index) =>
                                    index === currentPartnerIndex && (
                                        <m.div
                                            key={index}
                                            className="Solution_Partner"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <img src={partner.imgSrc} alt={partner.name} />
                                        </m.div>
                                    )
                            )}
                        </AnimatePresence>
                        <button className="Previous_Btn" onClick={handlePrevClick2}>
                            <span className="material-icons Previous_Btn_Icon">west</span>
                        </button>
                        <button className="Next_Btn" onClick={handleNextClick2}>
                            <span className="material-icons Next_Btn_Icon">east</span>
                        </button>
                    </div>

                    <div className="Solution_Detail_Footer">
                        <button className="ScheduleDemo_Btn" onClick={toggleFinishOrderButton}>
                            Agendar Demonstração
                        </button>
                    </div>
                </div>
            </div>
        </m.div>
    );
});

export default Solucoes_Detalhe;
