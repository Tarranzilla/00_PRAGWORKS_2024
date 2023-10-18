//Framer Motion Imports
import { motion as m } from "framer-motion";

export default function Register() {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="LP_Section">
            <h1>Criar uma conta no RobiOS STUDIO é muito fácil, basta preencher os campos abaixo:</h1>
        </m.div>
    );
}
