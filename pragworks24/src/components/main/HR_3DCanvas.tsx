import { useParams } from "react-router-dom";

import { motion as m } from "framer-motion";

import ThreeD_Container_Fiber from "./ThreeD_Container_Fiber";

export default function HR_3DCanvas() {
    const { model } = useParams();
    console.log("este é o model =", model);

    return (
        <m.div
            className="LP_Section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, type: "tween" }}
            id="HR_ThreeDCanvas"
            key={"HR_ThreeDCanvas_key"}
        >
            <ThreeD_Container_Fiber modelPath={`../objects3D/${model}/${model}.glb`} />
        </m.div>
    );
}
