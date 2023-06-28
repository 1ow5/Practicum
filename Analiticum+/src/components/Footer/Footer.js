import "./Footer.scss";
import TeleLogo from "../img/TelegramLogo.svg"
import WULogo from "../img/WhatsUpLogo.svg";
import AnaliticumLogo from "../img/AnaliticumFooterLogo.svg"

const Footer = () =>{
    return(
        <div className = "FooterWrapper">
            <div className = "FooterContainer">
                <div className = "FooterLinksWrapper">
                    <div className = "FooterLinksContainer">
                        <div className = "FooterLinksLeftPice">
                            <p className = "FooterLinksLText">About the project</p>
                            <p className = "FooterLinksLText">Apartment layouts</p>
                            <p className = "FooterLinksLText">Developer</p>
                            <p className = "FooterLinksLText">Contact information</p>
                        </div>
                        <div className = "FooterLinksRightPice">
                            <p className = "FooterLinksLText">Privacy Policy</p>
                        </div>
                    </div>
                </div>
                <div className = "FooterContactsWrapper">
                    <div className = "FooterContactsContainer">
                        <div className = "FooterContacts">
                            <div className = "FooterContactsLogos">
                                <img className="TelegramLogo" alt ="#" src = {TeleLogo}></img>
                                <img className="WhatsUpLogo" alt ="#" src = {WULogo}></img>
                            </div>
                            <div className = "FooterContactsNumber">
                                <p className = "FooterContactsNumberText">+ 357 974-534-54</p>
                            </div>
                        </div>
                        <div className = "FooterContactsMadeBy">
                            <img className = "FooterMadeByLogo" alt = "#" src ={AnaliticumLogo}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;