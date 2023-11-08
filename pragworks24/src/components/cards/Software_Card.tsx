// Product Type Import
import ProductType from "../../types/00_Produto";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, addToCart, toggleProductDetails, setActiveProduct } from "../../context/main-context";

export default function Software_Card({ product: { domId, id, prename, name, type, heroImg, backgroundImg, detail_images, textIntro } }) {
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
        <div className="Product_Card Software_Card" id={domId}>
            <div className="Product_Card_Header">
                <h4 className="Card_Product_Prename Software_Prename">{prename}</h4>
                <h1 className="Card_Product_Name Software_Name">{name}</h1>
                <h4 className="Card_Product_Type Sofware_Type">{type}</h4>
            </div>
            <img className="Card_Product_Image Product_Bg_Image" src={backgroundImg}></img>
            <img className="Card_Product_Image Product_Main_Image" src={heroImg}></img>

            <div className="Product_Card_Body">
                <p className="Card_Product_Description">{textIntro}</p>
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

            <div className="Product_Card_Body_Background"></div>
        </div>
    );
}
