// Vanilla React Imports
import Icon_Whatsapp from "./components/icons/Icon_Whatsapp";
import Icon_Linkedin from "./components/icons/Icon_Linkedin";
import Icon_Facebook from "./components/icons/Icon_Facebook";
import Icon_Instagram from "./components/icons/Icon_Instagram";
import Icon_Youtube from "./components/icons/Icon_Youtube";

function App() {
    return (
        <>
            <div className="Navbar">
                <a href="#" className="Nav_Logo">
                    <div className="Nav_Logo_Vector">O</div>
                    <h1 className="Nav_Logotype">Human Robotics</h1>
                </a>
                <div className="Nav_Links_Container">
                    <a href="#" className="Nav_Link">
                        Início
                    </a>
                    <a href="#" className="Nav_Link">
                        Produtos
                    </a>
                    <a href="#" className="Nav_Link">
                        Soluções
                    </a>
                    <a href="#" className="Nav_Link">
                        Sobre
                    </a>
                    <a href="#" className="Nav_Link">
                        Contato
                    </a>
                </div>

                <div className="Nav_Tools">
                    <a href="#" className="Nav_Tool">
                        <i className="material-icons">translate</i>
                    </a>
                    <a href="#" className="Nav_Tool">
                        <i className="material-icons">search</i>
                    </a>
                    <a href="#" className="Nav_Tool">
                        <i className="material-icons">person</i>
                    </a>
                    <a href="#" className="Nav_Tool">
                        <i className="material-icons">shopping_cart</i>
                    </a>
                </div>
                <a href="#" className="Nav_Menu_Btn">
                    <i className="material-icons">menu</i>
                </a>
            </div>
            <div className="LP_Section">
                <h1 className="LP_Section_Title">Início</h1>
            </div>
            <div className="LP_Section">
                <h1 className="LP_Section_Title">Produtos</h1>
            </div>
            <div className="LP_Section">
                <h1 className="LP_Section_Title">Soluções</h1>
            </div>
            <div className="LP_Section">
                <h1 className="LP_Section_Title">Sobre</h1>
            </div>
            <div className="LP_Section">
                <h1 className="LP_Section_Title">Contato</h1>
            </div>
            <div className="Footer">
                <div className="Footer_Actions_Container">
                    <a href="#" className="Footer_Action">
                        <i className="material-icons">assignment</i>
                        <p className="Footer_Action_Title">Termos e Condições</p>
                    </a>
                    <a href="#" className="Footer_Action">
                        <i className="material-icons">privacy_tip</i>
                        <p className="Footer_Action_Title">Privacidade</p>
                    </a>
                    <a href="#" className="Footer_Action">
                        <i className="material-icons">explore</i>
                        <p className="Footer_Action_Title">Mapa do Site</p>
                    </a>
                </div>

                <div className="Footer_Copyright">Human Robotics © 2024</div>

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
