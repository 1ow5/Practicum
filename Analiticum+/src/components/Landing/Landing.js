import "./Landing.scss";
import  Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FirstFrame from "../Main/FirstFrame/FirstFrame";
import SecondFrame from "../Main/SecondFrame/SecondFrame";
import ThirdFrame from "../Main/ThirdFrame/ThirdFrame";
import LastFrame from "../Main/LastFrame/LastFrame";
import FifthFrame from "../Main/FifthFrame/FifthFrame";

const Landing = () =>{
    return(
        <div className="LandingWrapper">
            <div className="LandingContainer">
                <div className = "LandingMainPart">
                    <Header/>
                    <div className = "LandingMain">
                        <FirstFrame/>
                        <SecondFrame/>
                        <ThirdFrame/>
                        <FifthFrame/>
                        <LastFrame/>
                    </div>         
                </div>      
                <div className="LandingFooterContainer">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Landing;