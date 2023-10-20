// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleProductDetails, toggleCart, toggleSolutionDetails, setActiveProduct } from "../../context/main-context";

// Product Type Import
import ProductType from "../../types/00_Produto";

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
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activeProduct.imgSrc.length);
    };

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + activeProduct.imgSrc.length) % activeProduct.imgSrc.length);
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
                <h3 className="Product_Detail_Title">{activeProduct.name}</h3>
                <button className="Close_Btn_B hoverable" onClick={closeDetailsButton}>
                    <span className="material-icons">close</span>
                </button>
            </div>
            <div className="Product_Detail_Content">
                <div className="Product_Detail_Image_Container">
                    <AnimatePresence mode="wait">
                        {activeProduct.imgSrc.map(
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

                <div className="Product_Detail_Text_Container">
                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Tipo do Produto</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">{activeProduct.type}</p>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Descrição</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">
                                <strong>{activeProduct.description}</strong>
                            </p>
                            <div className="Product_Detail_FullDescription">
                                {activeProduct.fullDescription.map((paragraph) => {
                                    return <p className="Product_Detail_Text_Content">{paragraph}</p>;
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Componentes</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">
                                {activeProduct.components.map((component) => {
                                    return (
                                        <div className="Product_Component">
                                            <span className="material-icons">check</span>
                                            <p>{component.name}</p>
                                        </div>
                                    );
                                })}
                            </p>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Soluções</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <div className="Product_Detail_Solution_Container">
                                {activeProduct.solutions.map((solution) => {
                                    return (
                                        <div
                                            className="Product_Detail_Solution"
                                            onClick={() => {
                                                openDetailsButton(solution.id);
                                            }}
                                        >
                                            <img src={solution.imgSrc} className="Product_Detail_Solution_Img"></img>
                                            <p className="Product_Detail_Solution_Name">{solution.name}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Coordenadas de Origem</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">{activeProduct.productOriginCoordinates}</p>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Origem das Peças</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">{activeProduct.productOrigin}</p>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Produtor do Robô</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">{activeProduct.producerName}</p>
                        </div>
                    </div>

                    <div className="Product_Detail_Footer">
                        <button
                            className="AddToCart_Btn hoverable"
                            onClick={() => {
                                addToCartButton(activeProduct.id, 1);
                                if (!cartIsOpen) dispatch(toggleCart());
                            }}
                        >
                            <div className="AddToCartLeft">
                                À partir de<h3 className="Card_Product_Price">R$ {activeProduct.buyPrice},00</h3>
                            </div>
                            <div className="AddToCartRight">Solicitar uma Cotação {itemTotalQuantity > 0 && `(${itemTotalQuantity})`}</div>
                        </button>
                        <button className="ScheduleDemo_Btn hoverable" onClick={toggleFinishOrderButton}>
                            Agendar Demonstração
                        </button>
                    </div>
                </div>
            </div>
        </m.div>
    );
});

export default Produtos_Detalhe;
