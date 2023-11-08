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

const Produtos_Detalhe = forwardRef(function Produtos_Detalhe(props, ref: any) {
    const dispatch = useDispatch();

    const openDetailsButton = (id) => {
        console.log("Opening Product details");
        dispatch(toggleProductDetails());
        dispatch(setActiveProduct({ id: id }));
    };

    const activeProduct = useSelector((state: any) => state.activeProduct);

    const closeDetailsButton = () => {
        console.log("Closing details");
        dispatch(toggleProductDetails());
    };

    const addToCartButton = (id, quantity) => {
        console.log("Adding to cart");
        dispatch(addToCart({ id, quantity }));
    };

    const getItemTotalQuantity = (cartItems: ProductType[], itemId: number): number => {
        let totalQuantity = 0;

        for (const item of cartItems) {
            if (item.id === itemId) {
                totalQuantity += item.cartQuantity;
            }
        }

        return totalQuantity;
    };

    const cartIsOpen = useSelector((state: any) => state.cartIsOpen);

    const cartItems = useSelector((state: any) => state.cartItems);
    const itemId = activeProduct.id;
    const itemTotalQuantity = getItemTotalQuantity(cartItems, itemId);

    const demoMessage = `Olá, eu gostaria de fazer uma solicitação de demonstração para o seguinte produto:\n\n${activeProduct.name}\n\n`;
    const demoPhoneNumber = "+5541999977955"; // Replace with your desired WhatsApp number

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

    const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);

    const toggleFinishOrderButton = () => {
        const whatsappUrl = `https://wa.me/${demoPhoneNumber}/?text=${encodeURIComponent(demoMessage)}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activeProduct.detail_Images.length);
    };

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + activeProduct.detail_Images.length) % activeProduct.detail_Images.length);
    };

    const handleNextClick2 = () => {
        setCurrentPartnerIndex((prevIndex) => (prevIndex + 1) % activeProduct.partners.length);
    };

    const handlePrevClick2 = () => {
        setCurrentPartnerIndex((prevIndex) => (prevIndex - 1 + activeProduct.partners.length) % activeProduct.partners.length);
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

                        {/* Footer */}
                        <div className="Produto_Detalhe_Footer">
                            {activeProduct.interactions.map((interaction, index) => {
                                return (
                                    <div className="Produto_Container_Text_Interactions hoverable" key={"interaction_" + index}>
                                        <Icon_HR_All iconName={interaction.icon} />
                                        <h2 className="Produto_Container_Interaction_Titulo">{interaction.title}</h2>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="Product_Detail_Image_Container">
                    <AnimatePresence mode="wait">
                        {activeProduct.detail_Images.map(
                            (imgSrc, index) =>
                                index === currentImageIndex && (
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
