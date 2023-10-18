// Vanilla React Imports
import Icon_HumanRobotics from "./components/icons/Icon_HumanRobotics";
import Icon_Whatsapp from "./components/icons/Icon_Whatsapp";
import Icon_Linkedin from "./components/icons/Icon_Linkedin";
import Icon_Facebook from "./components/icons/Icon_Facebook";
import Icon_Instagram from "./components/icons/Icon_Instagram";
import Icon_Youtube from "./components/icons/Icon_Youtube";

function App() {
    return (
        <>
            <div className="Navbar">
                <a href="#" className="Nav_Logo_Container undecorated">
                    <Icon_HumanRobotics />
                    <h1 className="Nav_Logotype">Human Robotics</h1>
                </a>
                <div className="Nav_Links_Container">
                    <a href="#inicio" className="Nav_Link hoverable undecorated">
                        Início
                    </a>
                    <a href="#produtos" className="Nav_Link hoverable undecorated">
                        Produtos
                    </a>
                    <a href="#solucoes" className="Nav_Link hoverable undecorated">
                        Soluções
                    </a>
                    <a href="#sobre" className="Nav_Link hoverable undecorated">
                        Sobre
                    </a>
                    <a href="#contato" className="Nav_Link hoverable undecorated">
                        Contato
                    </a>
                </div>

                <div className="Nav_Utility">
                    <div className="Nav_Tools_Container">
                        <a href="#idioma" className="Nav_Tool undecorated" title="Idioma">
                            <i className="material-icons hoverable">translate</i>
                        </a>
                        <a href="#busca" className="Nav_Tool undecorated" title="Busca">
                            <i className="material-icons hoverable">search</i>
                        </a>
                        <a href="#perfil" className="Nav_Tool undecorated" title="Perfil">
                            <i className="material-icons hoverable">person</i>
                        </a>
                        <a href="#lista-de-compras" className="Nav_Tool undecorated" title="Lista de Compras">
                            <i className="material-icons hoverable">shopping_cart</i>
                        </a>
                    </div>
                    <a href="#menu" className="Nav_Menu_Btn hoverable undecorated" title="Menu">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </div>
            <div className="LP_Section" id="inicio">
                <h1 className="LP_Section_Title">Início</h1>
                <div className="card_auto_slider" id="auto_slider_blogPosts"></div>
                <div className="Brand_Declaration">
                    <h2>O Futuro da Robótica é</h2>
                    <h2>Humano</h2>
                </div>
                <div className="card_auto_slider" id="auto_slider_partners"></div>
            </div>
            <div className="LP_Section" id="produtos">
                <h1 className="LP_Section_Title">Produtos</h1>
                <div className="Products_Container">
                    <div className="Product_Card">
                        <h2>RobiOS GO</h2>
                    </div>
                    <div className="Product_Card">
                        <h2>RobiOS INSPECTOR</h2>
                    </div>
                    <div className="Product_Card">
                        <h2>RobiOS CARGO</h2>
                    </div>
                </div>
            </div>
            <div className="LP_Section" id="solucoes">
                <h1 className="LP_Section_Title">Soluções</h1>
                <div className="Solutions_Container">
                    <div className="Solution_Card">
                        <h2>Atendimento</h2>
                    </div>
                    <div className="Solution_Card">
                        <h2>Publicidade</h2>
                    </div>
                    <div className="Solution_Card">
                        <h2>Inspeção</h2>
                    </div>
                    <div className="Solution_Card">
                        <h2>Transporte</h2>
                    </div>
                </div>
            </div>
            <div className="LP_Section" id="sobre">
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
                </div>
            </div>
            <div className="LP_Section" id="contato">
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
            </div>
            <div className="Footer">
                <div className="Footer_Actions_Container">
                    <a href="#termos-e-condicoes" className="Footer_Action hoverable undecorated" title="Termos e Condições">
                        <i className="material-icons">assignment</i>
                        <p className="Footer_Action_Title">Termos e Condições</p>
                    </a>
                    <a href="#privacidade" className="Footer_Action hoverable undecorated" title="Privacidade">
                        <i className="material-icons">privacy_tip</i>
                        <p className="Footer_Action_Title">Privacidade</p>
                    </a>
                    <a href="#mapa-do-site" className="Footer_Action hoverable undecorated" title="Mapa do Site">
                        <i className="material-icons">explore</i>
                        <p className="Footer_Action_Title">Mapa do Site</p>
                    </a>
                </div>

                <div className="Footer_Copyright" title="Footer Copyright">
                    Human Robotics © 2024
                </div>

                <div className="Footer_SocialMedia_Container">
                    <Icon_Whatsapp />
                    <Icon_Linkedin />
                    <Icon_Facebook />
                    <Icon_Instagram />
                    <Icon_Youtube />
                </div>
            </div>
        </>
    );
}

export default App;
