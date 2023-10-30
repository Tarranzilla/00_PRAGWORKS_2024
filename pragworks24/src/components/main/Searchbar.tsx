// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { toggleSearch } from "../../context/main-context.tsx";

const Searchbar = forwardRef(function Searchbar(props, ref: any) {
    const dispatch = useDispatch();
    const toggleSearchBarFunction = () => {
        dispatch(toggleSearch());
    };

    const [isSearchListOpen, setIsSearchListOpen] = useState(false);

    const searchForUserInput = () => {
        setIsSearchListOpen(true);
    };

    const closeSearchList = () => {
        setIsSearchListOpen(false);
    };

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Search_Container" key={"searchbar_key"}>
            <m.div layout="preserve-aspect" className="Search_Bar hoverable">
                <input className="Search_Bar_Input" type="text" placeholder="O que você procura?" />
                <button className="Search_Btn hoverable" onClick={searchForUserInput}>
                    <i className="material-icons">search</i>
                </button>
            </m.div>
            <button className="Close_Btn hoverable" onClick={toggleSearchBarFunction}>
                <i className="material-icons">close</i>
            </button>

            <m.div layout="preserve-aspect" layoutScroll className="Search_Results_Container">
                <button className="Close_Btn hoverable" onClick={closeSearchList}>
                    <i className="material-icons">close</i>
                </button>

                <h4>Resultados Encontrados:</h4>
                <AnimatePresence>
                    {!isSearchListOpen && (
                        <m.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            Nenhuma pesquisa realizada.
                        </m.p>
                    )}

                    {isSearchListOpen && (
                        <m.div
                            layout
                            layoutScroll
                            className="Search_Results_List"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="Search_Result_Class Search_Robots_Class">
                                <h5>Robôs Encontrados:</h5>
                                <div className="Search_Result_Item hoverable">
                                    <p>Robios GO</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Robios INSPECTOR</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Robios CARGO</p>
                                </div>
                            </div>

                            <div className="Search_Result_Class Search_Softwares_Class">
                                <h5>Softwares Encontrados:</h5>
                                <div className="Search_Result_Item hoverable">
                                    <p>RobiOS</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>RobiOS Studio</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>RobiOS Avatar</p>
                                </div>
                            </div>

                            <div className="Search_Result_Class Search_Services_Class">
                                <h5>Serviços Adicionais Encontrados:</h5>
                                <div className="Search_Result_Item hoverable">
                                    <p>Customização de Robôs</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Mapeamento de Ambientes</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Treinamento e Suporte Técnico</p>
                                </div>
                            </div>

                            <div className="Search_Result_Class Search_Experience_Class">
                                <h5>Experiências Encontradas:</h5>
                                <div className="Search_Result_Item hoverable">
                                    <p>Desenvolvimento de Experiências no Varejo</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Desenvolvimento de Experiências na Indústria</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Desenvolvimento de Experiências na Cultura</p>
                                </div>
                            </div>

                            <div className="Search_Result_Class Search_Contact_Class">
                                <h5>Informações sobre contato encontradas:</h5>
                                <div className="Search_Result_Item hoverable">
                                    <p>Nosso Telefone é: (41) 3333-3333</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Nosso Email principal é contato@humanrobotics.com</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Nosso Email para assuntos comerciais é comercial@humanrobotics.com</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Nosso Email para assuntos publicitários é comunicação@humanrobotics.com</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>
                                        Nosso escritório fica na HotMilk, hub de inovação da PUC-PR, na rua R. Imac. Conceição, 1430 - Prado Velho,
                                        Curitiba - PR, 80215-182
                                    </p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>
                                        Nosso nome nas redes sociais é @humanrobotics, nos siga para ficar por dentro das notícias e novidades do
                                        mundo da robótica e da inteligência artificial!
                                    </p>
                                </div>
                            </div>

                            <div className="Search_Result_Class Search_Experience_Class">
                                <h5>Posts do Blog Encontrados:</h5>
                                <div className="Search_Result_Item hoverable">
                                    <p>A História da Robótica</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>A História da Robótica no Brasil</p>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Como desenvolver robôs hoje no Brasil</p>
                                </div>
                            </div>
                        </m.div>
                    )}
                </AnimatePresence>
            </m.div>
        </m.div>
    );
});

export default Searchbar;
