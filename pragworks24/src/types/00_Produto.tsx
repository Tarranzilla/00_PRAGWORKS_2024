export default interface ProductType {
    domId: string;

    id: number;
    prename: string;
    name: string;
    type: string;
    class: string;
    description: string;
    fullDescription: Array<string>;
    bgImgSrc: string;
    imgSrc: Array<string>;

    buyPrice: number;
    rentPrice: number;
    cartQuantity: number;

    producerName: string;
    productOrigin: string;
    productOriginCoordinates: string;

    sellerName: string;
    sellerOrigin: string;
    sellerOriginCoordinates: string;

    components: Array<object>;
    solutions: Array<object>;
}
