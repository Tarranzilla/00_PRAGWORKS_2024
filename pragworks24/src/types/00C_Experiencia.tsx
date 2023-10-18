export default interface ExperienciaType {
    domId: string;

    id: number;
    name: string;
    type: string;
    class: string;
    description: string;
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

    components: string;
    solutions: string;
}
