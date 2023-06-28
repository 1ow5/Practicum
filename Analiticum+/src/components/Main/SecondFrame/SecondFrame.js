import "../SecondFrame/SecondFrame.scss";
import SecondFrameFirstBg from "../../img/SecondFrameFirstBg.svg"
import SecondFrameSecondBg from "../../img/SecondFrameSecondBg.svg";
import FirstIcon from "../../img/FirstIcon.svg";
import SecondIcon from "../../img/SecondIcon.svg";
import ThirdIcon from "../../img/ThirdIcon.svg";
import FourthIcon from "../../img/FourthIcon.svg";


const SecondFrame = () =>{
    return(
        <div className = "SecondFrameWrapper">
            <div className = "SecondFrameContainer">
                <div className = "FirstPartWrapper">
                    <div className = "FirstPartContainer">
                        <div className = "FirstPartTextWrapper">
                            <div className = "FirstPartTextcontainer">
                                <p className = "FirstPartTextBig">About<br/> the project</p>
                                <div className = "FirstPartTextSmallContainer">
                                    <p className = "FirstPartTextSmall">A contemporary apartment building located in Limassol’s prestigious Germasogeiaarea comprising of 8 spacious and modern residences that are arranged over threefloors. All apartments have a fantastic city and sea view.</p>
                                    <p className = "FirstPartTextSmall">The perfect location of the project will provide easy access to the highway and to allthe city’s necessary amenities which can be found within walking distance, such as:sandy Beaches, supermarkets, pharmacies, restaurants, schools, cafes, shops,GYMs, hotels, and SPA.</p>
                                </div>
                            </div>
                        </div>
                        <div className = "FirstPartImg">
                            <img alt = "#" src={SecondFrameFirstBg}></img>
                        </div>
                    </div>
                </div>
                <div className = "SecondPartWrapper">
                    <div className = "SecondPartContainer">
                        <div className = "SecondPartOne SecondPartTag">
                            <img className = "" alt = "#" src = {FirstIcon}></img>
                            <p className = "SPST1 SecondPartSmallText">Prestigious area</p>                        
                        </div>
                        <div className = "SecondPartTwo SecondPartTag">
                            <img className = "" alt = "#" src = {SecondIcon}></img>
                            <p className = "SPST2 SecondPartSmallText">Developed infrastructure</p>
                        </div>
                        <div className = "SecondPartThree SecondPartTag">
                            <img className = "" alt = "#" src = {ThirdIcon}></img>
                            <p className = "SPST3 SecondPartSmallText">Stylish architecture</p>
                        </div>
                        <div className = "SecondPartFour SecondPartTag">
                            <img className = "" alt = "#" src = {FourthIcon}></img>
                            <p className = "SPST4 SecondPartSmallText">Sea and city view</p>
                        </div>
                    </div>
                </div>
                <div className = "ThirdPartWrapper">
                    <div className = "ThirdPartContainer">
                        <div className = "ThirdPartTextPartWrapper">
                            <div className = "ThirdPartTextPartContainer">
                                <p className = "ThirdPartBigText">
                                    <span className ="ChangedText">
                                        Modern and elegant
                                    </span>
                                    architecture, cozy layouts and first-class finishes will pleasantlysurprise those who appreciate
                                    &nbsp;<span>true comfort and <pre></pre><span> style.</span></span>
                                </p>
                                <div className = "ThirdPartHouseText">
                                    <div className = "ThirdPartLeftText">
                                        <div className = "ThirdPartLeftText1">
                                            <p className = "ThirdPartLeftTextBrown">1.5 km</p>
                                            <p className = "ThirdPartLeftTextBold">Distance to the city centre</p>
                                        </div>
                                        <div className = "ThirdPartLeftText2">
                                            <p className = "ThirdPartLeftTextBrown">1.5 km</p>
                                            <p className = "ThirdPartLeftTextBold">Distance to the beach</p>
                                        </div>
                                    </div>
                                    <div className = "ThirdPartRightText">
                                        <div className = "ThirdPartRightText1">
                                            <p className = "ThirdPartLeftTextBrown">3</p>
                                            <p className = "ThirdPartLeftTextBold">Floors in the house</p>
                                        </div>
                                        <div className = "ThirdPartRightText2">
                                            <p className = "ThirdPartLeftTextBrown">A+</p>
                                            <p className = "ThirdPartLeftTextBold">Energy efficiency</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "ThirdPartBgImg">
                            <img alt = "#" src={SecondFrameSecondBg}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondFrame;