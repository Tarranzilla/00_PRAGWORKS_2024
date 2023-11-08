export default interface ProductType {
    domId: string;
    id: number;
    prename: string;
    name: string;
    class: string;
    type: string;
    heroImg: string;
    backgroundImg: string;
    detail_Images: string[];
    object3D: string;
    textIntro: string;
    textDetail: string[];
    buyPrice: number;
    rentPrice: number;
    cartQuantity: number;

    producerName: string;
    productOrigin: string;
    productOriginCoordinates: string;

    sellerName: string;
    sellerOrigin: string;
    sellerOriginCoordinates: string;
    relatedSectors: {
        title: string;
        description: string;
        icon: String;
    }[];
    useCases: {
        title: string;
        description: string;
        icon: String;
    }[];
    capacities: {
        title: string;
        description: string;
        icon: String;
    }[];
    specifications: {
        title: string;
        description: string;
        icon: String;
    }[];
    interactions: {
        title: string;
        icon: String;
    }[];
    roboTags: string[];
}
