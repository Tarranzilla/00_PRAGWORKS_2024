// Product Type Import
import ProductType from "../../types/00_Produto";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, addToCart, toggleProductDetails, setActiveProduct } from "../../context/main-context";

export default function Robot_Card({ product: { id, imgSrc, bgImgSrc, prename, name, type, description, price, domId } }) {
    const dispatch = useDispatch();

    const openDetailsButton = (id) => {
        console.log("Opening details");
        dispatch(toggleProductDetails());
        dispatch(setActiveProduct({ id: id }));
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

    const cartItems = useSelector((state: any) => state.cartItems);
    const itemId = id;
    const itemTotalQuantity = getItemTotalQuantity(cartItems, itemId);

    return (
        <div className="Product_Card Robot_Card" id={domId}>
            <div className="Product_Card_Header">
                <h4 className="Card_Product_Prename Robot_Prename">{prename}</h4>
                <h1 className="Card_Product_Name Robot_Name">{name}</h1>
                <h4 className="Card_Product_Type Robot_Type">{type}</h4>
            </div>
            <img className="Card_Product_Image Product_Bg_Image" src={bgImgSrc}></img>
            <img className="Card_Product_Image Robot_Card_Main_Image" src={imgSrc[0]}></img>
            <div className="Product_Card_Body">
                <p className="Card_Product_Description">{description}</p>

                <button
                    className="Card_Product_Detail_Button hoverable"
                    onClick={() => {
                        openDetailsButton(id);
                    }}
                >
                    <span className="material-icons">style</span>Mais Detalhes
                </button>
            </div>
            <div className="Product_Card_Body_Background"></div>
        </div>
    );
}
