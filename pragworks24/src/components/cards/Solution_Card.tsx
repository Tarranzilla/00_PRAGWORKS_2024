// Product Type Import
import SolutionType from "../../types/01A_Solucao";

// Framer Motion Imports
import { motion as m } from "framer-motion";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { toggleSolutionDetails, setActiveSolution } from "../../context/main-context";

export default function Solution_Card({ solution: { domId, id, name, description, imgSrc, videoSrc, relatedProducts } }) {
    const dispatch = useDispatch();

    const openDetailsButton = (id) => {
        console.log("Opening Solution details");
        dispatch(toggleSolutionDetails());
        dispatch(setActiveSolution({ id: id }));
    };

    const itemId = id;

    return (
        <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Solution_Card" key={domId}>
            <div className="Solution_Video_Fader"></div>
            <video className="Solution_Video" src={videoSrc} autoPlay loop muted />
            <h3 className="Solution_Title">{name}</h3>
            <p className="Solution_Description">{description}</p>
            <button className="Solution_KnowMore_Button" onClick={openDetailsButton}>
                <span className="material-icons">info</span>Mais Detalhes
            </button>
        </m.div>
    );
}
