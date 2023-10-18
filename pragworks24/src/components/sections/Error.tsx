//Framer Motion Imports
import { motion as m } from "framer-motion";

export default function Error() {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="LP_Section">
            <h1>Desculpe, mas esta página não existe.</h1>
        </m.div>
    );
}
