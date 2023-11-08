export default interface Product {
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
        icon: React.JSX.Element;
    }[];
    useCases: {
        title: string;
        description: string;
        icon: React.JSX.Element;
    }[];
    capacities: {
        title: string;
        description: string;
        icon: React.JSX.Element;
    }[];
    specifications: {
        title: string;
        description: string;
        icon: React.JSX.Element;
    }[];
    interactions: {
        title: string;
        icon: React.JSX.Element;
    }[];
    roboTags: string[];
}
