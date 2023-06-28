import "./Header.scss";
import HeadLogo from "../img/Logo.svg";

const Header = () => {
    return(
        <div className="HeaderWrapper">
            <div className="HeaderContainerWrapper"> 
                <div className="HeaderContainer">
                    <div className="HeaderUpperCase">
                        <div className="HeaderLogoWrapper">
                            <div className = "HeaderLogoContainer">
                                <img className = "HeaderImg" alt = "#" src={HeadLogo}>
                                </img>
                                    <div className = "HeaderLogoTextContainer">
                                        <p className = "HeaderLogoText">Lamani Development</p>
                                    </div>
                            </div>
                        </div>
                        <div className="HeaderSideMenuWrapper">
                            <div className="HeaderSideMenuContainer">
                                <p className="AboutBtn SideMenuBtn">About the project</p>
                                <p className="ApartmentBtn SideMenuBtn">Apartment layouts</p>
                                <p className="DeveloperBtn SideMenuBtn">Developer</p>
                                <p className="ContactBtn SideMenuBtn">Contact information</p>
                            </div>
                        </div>
                    </div>
                    <div className="HeaderLowerCase">
                        <div className="HeaderLowerCaseContainer">
                            <div className="Number">
                                <p className="NumberText">+ 357 974-534-54</p>
                            </div>
                            <div className="ConsultationBtn">
                                <button className="Consultation">Consultation</button>
                            </div>
                        </div>                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;