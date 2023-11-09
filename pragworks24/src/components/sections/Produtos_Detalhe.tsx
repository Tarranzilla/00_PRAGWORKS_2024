// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleProductDetails, toggleCart, toggleSolutionDetails, setActiveProduct } from "../../context/main-context";

// Product Type Import
import ProductType from "../../types/00_Produto";

// Custom Icons Imports
import Icon_HR_All from "../icons/hr/Icon_HR_All";

// ThreeD_Container Import
import ThreeD_Container from "../main/ThreeD_Container";

const Produtos_Detalhe = forwardRef(function Produtos_Detalhe(props, ref: any) {
    const dispatch = useDispatch();

    const activeProduct = useSelector((state: any) => state.activeProduct);

    const closeDetailsButton = () => {
        console.log("Closing details");
        dispatch(toggleProductDetails());
    };

    const quoteMessage = `Olá, eu gostaria de fazer uma solicitação para a cotação do seguinte produto:\n\n${activeProduct.name}\n\n`;
    const quotePhoneNumber = "+5541999977955"; // Replace with your desired WhatsApp number

    const demoMessage = `Olá, eu gostaria de fazer uma solicitação de demonstração para o seguinte produto:\n\n${activeProduct.name}\n\n`;
    const demoPhoneNumber = "+5541999977955"; // Replace with your desired WhatsApp number

    const demoOrderButton = () => {
        const whatsappUrl = `https://wa.me/${demoPhoneNumber}/?text=${encodeURIComponent(demoMessage)}`;
        window.open(whatsappUrl, "_blank");
    };

    const quoteOrderButton = () => {
        const whatsappUrl = `https://wa.me/${quotePhoneNumber}/?text=${encodeURIComponent(quoteMessage)}`;
        window.open(whatsappUrl, "_blank");
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activeProduct.detail_Images.length);
    };

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + (activeProduct.detail_Images.length + 1)) % (activeProduct.detail_Images.length + 1));
    };

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Product_Detail">
            <div className="Product_Detail_Header">
                <span className="material-icons Info_Icon">info</span>
                <h3 className="Product_Detail_Title">{"Detalhes do Produto: " + activeProduct.prename + " " + activeProduct.name}</h3>
                <button className="Close_Btn_B hoverable" onClick={closeDetailsButton}>
                    <span className="material-icons">close</span>
                </button>
            </div>
            <div className="Product_Detail_Content">
                <div className="Product_Detail_Text_Container">
                    <div className="Product_Detail_Text_Wrapper">
                        {/* Tipo do Produto */}
                        <div className="Product_Detail_Text_Item">
                            <div className="Product_Detail_Text_Item_Header">
                                <h3 className="Product_Detail_Subtitle">{activeProduct.prename}</h3>
                                <h1 className="Product_Card_Detail_Title">{activeProduct.name}</h1>
                            </div>
                            <div className="Product_Detail_Text_Item_Content">
                                <p className="Product_Detail_Type">{activeProduct.type}</p>
                            </div>
                        </div>

                        {/* Descrição do Produto */}
                        <div className="Product_Detail_Text_Item">
                            <div className="Product_Detail_Text_Item_Content">
                                <p className="Product_Detail_Text_Content">
                                    <strong>{activeProduct.textIntro}</strong>
                                </p>
                                <div className="Product_Detail_FullDescription">
                                    {activeProduct.textDetail.map((paragraph) => {
                                        return <p className="Product_Detail_Text_Content">{paragraph}</p>;
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Interações - Footer */}
                        <div className="Produto_Detalhe_Footer">
                            <div className="Produto_Container_Text_Interactions hoverable" key={"interaction_Container_1"}>
                                <Icon_HR_All iconName={"quotePrice"} />
                                <h2 className="Produto_Container_Interaction_Titulo" onClick={quoteOrderButton}>
                                    Solicite uma Cotação
                                </h2>
                            </div>
                            <div className="Produto_Container_Text_Interactions hoverable" key={"interaction_Container_2"}>
                                <Icon_HR_All iconName={"demo"} />
                                <h2 className="Produto_Container_Interaction_Titulo" onClick={demoOrderButton}>
                                    Agende uma Demonstração
                                </h2>
                            </div>
                        </div>

                        {/* Indicado para os Setores*/}
                        <div className="Product_Detail_Text_Item">
                            {activeProduct.relatedSectors.length > 0 && <h2 className="Product_Information_Title">Indicado para os Setores</h2>}
                            {activeProduct.relatedSectors.map((sector, index) => {
                                return (
                                    <div className="Produto_Container_Text_RelatedSectors" key={"related_sector_" + index}>
                                        <div className="Produto_Container_Text_Header">
                                            <Icon_HR_All iconName={sector.icon} />
                                            <h2 className="Produto_Container_Titulo">{sector.title}</h2>
                                        </div>
                                        <p className="Produto_Information_Description">{sector.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Aplicações */}
                        <div className="Product_Detail_Text_Item">
                            {activeProduct.useCases.length > 0 && <h2 className="Product_Information_Title">Aplicações</h2>}
                            {activeProduct.useCases.map((useCase, index) => {
                                return (
                                    <div className="Produto_Container_Text_UseCases" key={"useCase_" + index}>
                                        <div className="Produto_Container_Text_Header">
                                            <Icon_HR_All iconName={useCase.icon} />
                                            <h2 className="Produto_Container_Titulo">{useCase.title}</h2>
                                        </div>
                                        <p className="Produto_Information_Description">{useCase.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Capacidades */}
                        <div className="Product_Detail_Text_Item">
                            {activeProduct.capacities.length > 0 && <h2 className="Product_Information_Title">Capacidades</h2>}
                            {activeProduct.capacities.map((capacity, index) => {
                                return (
                                    <div className="Produto_Container_Text_Capacities" key={"capacities_" + index}>
                                        <div className="Produto_Container_Text_Header">
                                            <Icon_HR_All iconName={capacity.icon} />
                                            <h2 className="Produto_Container_Titulo">{capacity.title}</h2>
                                        </div>
                                        <p className="Produto_Information_Description">{capacity.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Especificações */}
                        <div className="Product_Detail_Text_Item">
                            {activeProduct.specifications.length > 0 && <h2 className="Product_Information_Title">Especificações</h2>}
                            {activeProduct.specifications.map((specification, index) => {
                                return (
                                    <div className="Produto_Container_Text_Specifications" key={"spec_" + index}>
                                        <div className="Produto_Container_Text_Header">
                                            <Icon_HR_All iconName={specification.icon} />
                                            <h2 className="Produto_Container_Titulo">{specification.title}</h2>
                                        </div>
                                        <p className="Produto_Information_Description">{specification.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="Product_Detail_Image_Container">
                    <AnimatePresence mode="popLayout">
                        {currentImageIndex === 0 && activeProduct.object3D && (
                            <m.div
                                className="Product_Detail_Image_Block"
                                key={"ThreeD_Container_" + activeProduct.object3D + "_key"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <ThreeD_Container ThreeD_URL={activeProduct.object3D} />
                            </m.div>
                        )}

                        {activeProduct.detail_Images.map(
                            (imgSrc, index) =>
                                index + 1 === currentImageIndex && (
                                    <m.div
                                        className="Product_Detail_Image_Block"
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <m.img className="Product_Detail_Image" src={imgSrc} alt={activeProduct.name} />
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

export default Produtos_Detalhe;

/*

*/
