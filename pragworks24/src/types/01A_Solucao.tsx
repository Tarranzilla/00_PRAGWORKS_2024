export default interface SolutionType {
    domId: string;

    id: number;
    name: string;
    class: string;
    description: string;
    fullDescription: string;
    imgSrc: Array<string>;
    videoSrc: Array<string>;
    partners: Array<object>;

    relatedProducts: Array<number>;
}
