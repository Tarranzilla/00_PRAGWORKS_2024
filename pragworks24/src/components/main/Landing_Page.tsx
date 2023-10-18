//Framer Motion Imports
import { motion as m, AnimatePresence, useScroll } from "framer-motion";

import { persistor } from "../../main.tsx";

const handleResetButton = () => {
    persistor.purge();
    window.location.reload();
};

export default function LandingPage() {
    return (
        <>
            {/* Início */}
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, type: "tween" }}
                className="LP_Section"
                id="inicio"
                key={"inicio_key"}
            >
                <h1 className="LP_Section_Title">Início</h1>
                <div className="card_auto_slider" id="auto_slider_blogPosts"></div>
                <div className="Brand_Declaration">
                    <h2>O Futuro da Robótica é</h2>
                    <h2>Humano</h2>
                </div>
                <div className="card_auto_slider" id="auto_slider_partners"></div>
            </m.div>

            <div className="Section_Divider" id="SD01" key={"SD01_key"}></div>

            {/* Produtos */}
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, type: "tween" }}
                className="LP_Section"
                id="produtos"
                key={"produtos_key"}
            >
                <h1 className="LP_Section_Title">Produtos</h1>
                <div className="Products_Container" id="produtos-robos" title="Robôs">
                    <div className="Product_Card">
                        <h3>RobiOS</h3>
                        <h2>GO</h2>
                    </div>
                    <div className="Product_Card">
                        <h3>RobiOS</h3>
                        <h2>INSPECTOR</h2>
                    </div>
                    <div className="Product_Card">
                        <h3>RobiOS</h3>
                        <h2>CARGO</h2>
                    </div>
                </div>
                <div className="Products_Container" id="produtos-softwares" title="Softwares">
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>RobiOS</h2>
                    </div>
                    <div className="Product_Card">
                        <h3>RobiOS</h3>
                        <h2>STUDIO</h2>
                    </div>
                    <div className="Product_Card">
                        <h3>RobiOS</h3>
                        <h2>AVATAR</h2>
                    </div>
                </div>

                <div className="Products_Container" id="produtos-servicos" title="Serviços">
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>Customização</h2>
                    </div>
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>Mapeamento de Ambientes</h2>
                    </div>
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>Treinamento e Suporte</h2>
                    </div>
                </div>

                <div className="Products_Container" id="produtos-experiencias" title="Experiências">
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>Varejo</h2>
                    </div>
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>Indústria</h2>
                    </div>
                    <div className="Product_Card">
                        <h3> </h3>
                        <h2>Cultura</h2>
                    </div>
                </div>

                <div className="Products_Selector">
                    <button className="Product_Type_Selector hoverable">Robôs</button>
                    <button className="Product_Type_Selector hoverable">Softwares</button>
                    <button className="Product_Type_Selector hoverable">Serviços</button>
                    <button className="Product_Type_Selector hoverable">Experiências</button>
                </div>
            </m.div>

            <div className="Section_Divider" id="SD02" key={"SD02_key"}></div>

            {/* Soluções */}
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, type: "tween" }}
                className="LP_Section"
                id="solucoes"
                key={"solucoes_key"}
            >
                <h1 className="LP_Section_Title">Soluções</h1>
                <div className="Solutions_Container">
                    <div className="Solution_Card">
                        <h2>Atendimento</h2>
                    </div>
                </div>
                <div className="Solutions_Container">
                    <div className="Solution_Card">
                        <h2>Publicidade</h2>
                    </div>
                </div>
                <div className="Solutions_Container">
                    <div className="Solution_Card">
                        <h2>Inspeção</h2>
                    </div>
                </div>
                <div className="Solutions_Container">
                    <div className="Solution_Card">
                        <h2>Transporte</h2>
                    </div>
                </div>

                <div className="Solutions_Selector">
                    <button className="Solution_Type_Selector hoverable">Atendimento</button>
                    <button className="Solution_Type_Selector hoverable">Publicidade</button>
                    <button className="Solution_Type_Selector hoverable">Inspeção</button>
                    <button className="Solution_Type_Selector hoverable">Transporte</button>
                </div>
            </m.div>

            <div className="Section_Divider" id="SD03" key={"SD03_key"}></div>

            {/* Sobre */}
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, type: "tween" }}
                className="LP_Section"
                id="sobre"
                key={"sobre_key"}
            >
                <h1 className="LP_Section_Title">Sobre</h1>
                <div className="Abouts_Container">
                    <div className="About_Card">
                        <h3>Sobre</h3>
                        <h2>A Human Robotics</h2>
                    </div>
                    <div className="About_Card">
                        <h3>Sobre</h3>
                        <h2>Nossos Parceiros</h2>
                    </div>
                    <div className="About_Card">
                        <h3>Sobre</h3>
                        <h2>A Fundação</h2>
                    </div>
                    <div className="About_Card">
                        <h3>Sobre</h3>
                        <h2>A Robótica e o Brasil</h2>
                    </div>
                    <div className="About_Card">
                        <h3>Sobre</h3>
                        <h2>A História da Robótica</h2>
                    </div>
                    <div className="About_Card">
                        <h3>Sobre</h3>
                        <h2>A Nossa Equipe</h2>
                    </div>
                    <div className="About_Card">
                        <h3>Sobre</h3>
                        <h2>Blog</h2>
                    </div>
                </div>
                <div className="Abouts_Selector">
                    <button className="About_Type_Selector hoverable">Nossa Missão</button>
                    <button className="About_Type_Selector hoverable">Equipe</button>
                    <button className="About_Type_Selector hoverable">A Fundação</button>
                    <button className="About_Type_Selector hoverable">Parceiros</button>
                    <button className="About_Type_Selector hoverable">Robótica e o Brasil</button>
                    <button className="About_Type_Selector hoverable">História da Robótica</button>
                    <button className="About_Type_Selector hoverable">Blog</button>
                </div>
            </m.div>

            <div className="Section_Divider" id="SD04" key={"SD04_key"}></div>

            {/* Contato */}
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, type: "tween" }}
                className="LP_Section"
                id="contato"
                key={"contato_key"}
            >
                <h1 className="LP_Section_Title">Contato</h1>
                <div className="Contact_Container">
                    <h2>Entre em Contato, estamos a disposição!</h2>
                    <button>Envie um email</button>
                    <button>Entre em Contato pelo Whatsapp</button>
                    <button>Inscreva-se na Newsletter</button>
                    <div className="Contact_Form_Container">
                        <form className="Contact_Form">
                            <input type="text" placeholder="Nome" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Assunto" />
                            <textarea placeholder="Mensagem" />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </m.div>

            <div className="Section_Divider" id="SD05" key={"SD05_key"}></div>

            {/* Menu */}
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, type: "tween" }}
                className="LP_Section"
                id="menu"
                key={"menu_key"}
            >
                <h1 className="LP_Section_Title">Menu</h1>
                <div className="Menu_Container">
                    <div className="Menu_Main_List">
                        <h2>Produtos</h2>
                        <h2>Soluções</h2>
                        <h2>Sobre</h2>
                        <h2>Contato</h2>
                    </div>
                    <div className="App_Reset_Container">
                        <button onClick={handleResetButton}>Reiniciar Aplicação</button>
                    </div>
                </div>
            </m.div>

            <div className="Section_Divider" id="SD06" key={"SD06_key"}></div>
        </>
    );
}
