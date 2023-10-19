// Product Type Import
import ProductType from "../../types/00_Produto";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, addToCart, toggleProductDetails, setActiveProduct } from "../../context/main-context";

export default function Experience_Card({ product: { id, imgSrc, bgImgSrc, prename, name, type, description, price, domId } }) {
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
        <div className="Product_Card Experience_Card" id={domId}>
            <img className="Card_Product_Image Product_Bg_Image" src={bgImgSrc}></img>
            <img className="Card_Product_Image Product_Main_Image Experience_Card_Image" src={imgSrc[0]}></img>
            <div className="Product_Description_Background"></div>
            <div className="Product_Card_Header">
                <h3 className="Card_Product_Prename Experience_Prename">{prename}</h3>
                <h3 className="Card_Product_Name Experience_Name">{name}</h3>
                <h3 className="Card_Product_Type Experience_Type">{type}</h3>
            </div>
            <div className="Product_Card_Body">
                <p className="Card_Product_Description">{description}</p>
            </div>
            <div className="Product_Card_Footer">
                <button
                    className="Card_Product_Detail_Button hoverable"
                    onClick={() => {
                        openDetailsButton(id);
                    }}
                >
                    <span className="material-icons">style</span>
                    Mais Detalhes
                </button>
            </div>
        </div>
    );
}
