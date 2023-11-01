// Vanilla React Imports
import { useEffect, useState, forwardRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//React Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { toggleSearch } from "../../context/main-context.tsx";

const searchResultsData = [
    {
        id: 1,
        name: "Robôs Encontrados",
        type: "category",
        class: "Search_Robots_Class",
        results: [
            {
                id: 101,
                name: "Robios GO",
                type: "subresult",
                class: "subresult-class",
                url: "#robos-go",
                icon: "open_in_new",
                results: [],
            },
            {
                id: 102,
                name: "Robios INSPECTOR",
                type: "subresult",
                class: "subresult-class",
                url: "#robos-inspector",
                icon: "open_in_new",
                results: [],
            },
            {
                id: 103,
                name: "Robios CARGO",
                type: "subresult",
                class: "subresult-class",
                url: "#robos-cargo",
                icon: "open_in_new",
                results: [],
            },
        ],
    },
    {
        id: 2,
        name: "Softwares Encontrados",
        type: "category",
        class: "Search_Softwares_Class",
        results: [
            {
                id: 201,
                name: "RobiOS",
                type: "subresult",
                class: "subresult-class",
                url: "#robios",
                icon: "open_in_new",
                results: [],
            },
            {
                id: 202,
                name: "RobiOS Studio",
                type: "subresult",
                class: "subresult-class",
                url: "#robios-studio",
                icon: "open_in_new",
                results: [],
            },
            {
                id: 203,
                name: "RobiOS Avatar",
                type: "subresult",
                class: "subresult-class",
                url: "#robios-avatar",
                icon: "open_in_new",
                results: [],
            },
        ],
    },
    {
        id: 3,
        name: "Serviços Adicionais Encontrados",
        type: "category",
        class: "Search_Services_Class",
        results: [
            {
                id: 301,
                name: "Customização de Robôs",
                type: "subresult",
                class: "subresult-class",
                url: "#customizacao-robos",
                icon: "open_in_new",
                results: [],
            },
            {
                id: 302,
                name: "Mapeamento de Ambientes",
                type: "subresult",
                class: "subresult-class",
                url: "#mapeamento-ambientes",
                icon: "open_in_new",
                results: [],
            },
            {
                id: 303,
                name: "Treinamento e Suporte Técnico",
                type: "subresult",
                class: "subresult-class",
                url: "#treinamento-suporte-tecnico",
                icon: "open_in_new",
                results: [],
            },
        ],
    },
    {
        id: 4,
        name: "Experiências Encontradas",
        type: "category",
        class: "Search_Experience_Class",
        results: [
            {
                id: 401,
                name: "Desenvolvimento de Experiências no Varejo",
                type: "subresult",
                class: "subresult-class",
                url: "#desenvolvimento-experiencias-varejo",
                icon: "open_in_new",
                results: [],
            },
            {
                id: 402,
                name: "Desenvolvimento de Experiências na Indústria",
                type: "subresult",
                class: "subresult-class",
                url: "#desenvolvimento-experiencias-industria",
                icon: "open_in_new",
                results: [],
            },
            {
                id: 403,
                name: "Desenvolvimento de Experiências na Cultura",
                type: "subresult",
                class: "subresult-class",
                url: "#desenvolvimento-experiencias-cultura",
                icon: "open_in_new",
                results: [],
            },
        ],
    },
    {
        id: 5,
        name: "Informações sobre contato encontradas",
        type: "category",
        class: "Search_Contact_Class",
        results: [
            {
                id: 501,
                name: "Nosso Telefone é: (41) 3333-3333",
                type: "subresult",
                class: "subresult-class",
                results: [],
            },
            {
                id: 502,
                name: "Nosso Email principal é contato@humanrobotics.com",
                type: "subresult",
                class: "subresult-class",
                results: [],
            },
            {
                id: 503,
                name: "Nosso Email para assuntos comerciais é comercial@humanrobotics.com",
                type: "subresult",
                class: "subresult-class",
                results: [],
            },
            {
                id: 504,
                name: "Nosso Email para assuntos publicitários é comunicação@humanrobotics.com",
                type: "subresult",
                class: "subresult-class",
                results: [],
            },
            {
                id: 505,
                name: "Nosso escritório fica na HotMilk, hub de inovação da PUC-PR, na rua R. Imac. Conceição, 1430 - Prado Velho, Curitiba - PR, 80215-182",
                type: "subresult",
                class: "subresult-class",
                results: [],
            },
            {
                id: 506,
                name: "Nosso nome nas redes sociais é @humanrobotics, nos siga para ficar por dentro das notícias e novidades do mundo da robótica e da inteligência artificial!",
                type: "subresult",
                class: "subresult-class",
                results: [],
            },
        ],
    },
    {
        id: 6,
        name: "Posts do Blog Encontrados",
        type: "category",
        class: "Search_Blog_Class",
        results: [
            {
                id: 601,
                name: "A História da Robótica",
                type: "subresult",
                class: "subresult-class",
                url: "#historia-robotica",
                icon: "open_in_new",
                results: [],
            },
            {
                id: 602,
                name: "A História da Robótica no Brasil",
                type: "subresult",
                class: "subresult-class",
                url: "#historia-robotica-brasil",
                icon: "open_in_new",
                results: [],
            },
            {
                id: 603,
                name: "Como desenvolver robôs hoje no Brasil",
                type: "subresult",
                class: "subresult-class",
                url: "#desenvolver-robos-brasil",
                icon: "open_in_new",
                results: [],
            },
        ],
    },
];

// Interface para representar um resultado de pesquisa

interface SearchResult {
    id: number;
    name: string;
    type: string;
    class: string;
    results: SubResult[];
}

interface SubResult {
    id: number;
    name: string;
    type: string;
    class: string;
    url?: string;
    icon?: string;
    results: SubResult[];
}

// Função para realizar a pesquisa
function performSearch(query: string, results: SearchResult[]): SearchResult[] {
    query = query.toLowerCase();

    const filteredResults: SearchResult[] = results.filter((result) => {
        const nameMatches = result.name.toLowerCase().includes(query);
        if (nameMatches) {
            return true; // Se o nome da categoria corresponde, inclua a categoria
        } else if (result.results) {
            // Se a categoria possui subresultados, faça uma busca neles
            const subResults = performSearch(query, result.results);
            return subResults.length > 0; // Inclua a categoria se houver subresultados correspondentes
        }
        return false;
    });

    return filteredResults;
}

const Searchbar = forwardRef(function Searchbar(props, ref: any) {
    const [query, setQuery] = useState<string>(""); // Estado para a consulta do usuário
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]); // Estado para os resultados da pesquisa

    // Função para realizar a pesquisa quando o usuário digita algo no input
    const handleSearch = () => {
        console.log("Pesquisando por: ", query);
        const filteredResults = performSearch(query, searchResultsData); // Chame a função de busca com a consulta do usuário
        console.log("Resultados Filtrados: ", filteredResults);
        setSearchResults(filteredResults); // Atualize o estado com os resultados da pesquisa
    };

    const dispatch = useDispatch();
    const toggleSearchBarFunction = () => {
        dispatch(toggleSearch());
    };

    const [isSearchListOpen, setIsSearchListOpen] = useState(false);

    const searchForUserInput = () => {
        setIsSearchListOpen(true);
        handleSearch();
    };

    const closeSearchList = () => {
        setIsSearchListOpen(false);
    };

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Search_Container" key={"searchbar_key"}>
            <m.div layout="preserve-aspect" className="Search_Bar hoverable">
                <input className="Search_Bar_Input" type="text" placeholder="O que você procura?" onChange={(e) => setQuery(e.target.value)} />
                <button className="Search_Btn hoverable" onClick={searchForUserInput}>
                    <i className="material-icons">search</i>
                </button>
            </m.div>
            <button className="Close_Btn hoverable" onClick={toggleSearchBarFunction}>
                <i className="material-icons">close</i>
            </button>

            <m.div layout="preserve-aspect" layoutScroll className="Search_Results_Container">
                <h4>Resultados Encontrados:</h4>
                <AnimatePresence>
                    {!searchResults && (
                        <m.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            Nenhuma pesquisa realizada.
                        </m.p>
                    )}

                    {searchResults && (
                        <m.div
                            layout
                            layoutScroll
                            className="Search_Results_List"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {searchResults.map((result) => {
                                return (
                                    <m.div layout className={`Search_Result_Class ${result.class}`} key={result.id}>
                                        <h5 className="Search_Results_Title">{result.name}:</h5>
                                        {result.results.map((subResult) => {
                                            return (
                                                <div className="Search_Result_Item hoverable">
                                                    <p>{subResult.name}</p>
                                                    {subResult.url && (
                                                        <a href={subResult.url} target="_blank" rel="noreferrer">
                                                            <span className="material-icons">{subResult.icon}</span>
                                                        </a>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </m.div>
                                );
                            })}
                        </m.div>
                    )}
                </AnimatePresence>
            </m.div>
        </m.div>
    );
});

export default Searchbar;

/*

<div className="Search_Result_Class Search_Robots_Class">
                                <h5 className="Search_Results_Title">Robôs Encontrados:</h5>
                                <div className="Search_Result_Item hoverable">
                                    <p>Robios GO</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Robios INSPECTOR</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Robios CARGO</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                            </div>

                            <div className="Search_Result_Class Search_Softwares_Class">
                                <h5 className="Search_Results_Title">Softwares Encontrados:</h5>
                                <div className="Search_Result_Item hoverable">
                                    <p>RobiOS</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>RobiOS Studio</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>RobiOS Avatar</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                            </div>

                            <div className="Search_Result_Class Search_Services_Class">
                                <h5 className="Search_Results_Title">Serviços Adicionais Encontrados:</h5>
                                <div className="Search_Result_Item hoverable">
                                    <p>Customização de Robôs</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Mapeamento de Ambientes</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Treinamento e Suporte Técnico</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                            </div>

                            <div className="Search_Result_Class Search_Experience_Class">
                                <h5 className="Search_Results_Title">Experiências Encontradas:</h5>
                                <div className="Search_Result_Item hoverable">
                                    <p>Desenvolvimento de Experiências no Varejo</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Desenvolvimento de Experiências na Indústria</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Desenvolvimento de Experiências na Cultura</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                            </div>

                            <div className="Search_Result_Class Search_Contact_Class">
                                <h5 className="Search_Results_Title">Informações sobre contato encontradas:</h5>
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
                                <h5 className="Search_Results_Title">Posts do Blog Encontrados:</h5>
                                <div className="Search_Result_Item hoverable">
                                    <p>A História da Robótica</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>A História da Robótica no Brasil</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                                <div className="Search_Result_Item hoverable">
                                    <p>Como desenvolver robôs hoje no Brasil</p>
                                    <span className="material-icons">open_in_new</span>
                                </div>
                            </div>

*/
