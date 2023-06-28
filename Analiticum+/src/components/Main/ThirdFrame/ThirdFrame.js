import "../ThirdFrame/ThirdFrame.scss";

const ThirdFrame = () =>{
    return(
        <div className = "ThirdFrameWrapper">
            <div className="ThirdFrameContent">
                <div className = "ThirdFrameContainer">
                    <div className="ThirdFrameBigTxt">
                        <p className="ThirdFrameBigText">Apartment layouts</p>
                    </div>
                    <div className="ThirdFrameLayout">
                        <div className="ThirdFrameLayoutLeftPartWrapper">
                            <div className="ThirdFrameLayoutLeftPartContainer">
                                <div className="ThirdFrameLayoutSchemeTextWrapper">
                                    <div className="ThirdFrameLayoutSchemeTextContainer">
                                        <div className="ThirdFrameLayoutSchemeOne" id="ThirdFrameLayoutSchemeTxt">
                                            <p className="TFLSText">Ground floor</p>
                                        </div>
                                        <div className="ThirdFrameLayoutSchemeTwo" id="ThirdFrameLayoutSchemeTxt">
                                            <p className="TFLSText">First floor</p>
                                        </div>
                                        <div className="ThirdFrameLayoutSchemeThree" id="ThirdFrameLayoutSchemeTxt">
                                            <p className="TFLSText">Second floor</p>
                                        </div>
                                        <div className="ThirdFrameLayoutSchemeThour" id="ThirdFrameLayoutSchemeTxt">
                                            <p className="TFLSText">Third floor</p>
                                        </div>
                                        <div className="ThirdFrameLayoutSchemeFive" id="ThirdFrameLayoutSchemeTxt">
                                            <p className="TFLSText">Roof garden</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ThirdFrameLayoutImg"> 
                            </div>
                            <div className="ThirdFrameSliderWrapper">
                                <div className="ThirdFrameSliderContainer">
                                    <div className="ThirdFrameSliderLArrow">
                                    </div>
                                    <div className="ThirdFrameSliderSlidesWrapper">
                                        <div className="Slide1" id="Slide"></div>
                                        <div className="Slide2" id="Slide"></div>
                                        <div className="Slide3" id="Slide"></div>
                                        <div className="Slide4" id="Slide"></div>
                                        <div className="Slide5" id="Slide"></div>
                                    </div>
                                    <div className="ThirdFrameSliderRArrow">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ThirdFrameLayoutRightPart">
                            <div className="ThirdFrameLayoutRightPartBigTxt">
                                <p className="TFLRPBigText">Residential Luxury Apartments</p>
                            </div>
                            <div className="ThirdFrameLayoutRightPartInfo">
                                <div className="GeneralInfoTxt"><p className="GeneralInfoText">General information:</p></div>
                                <div className="Icons">
                                </div>
                                <div className="City" id="TxtContainer">
                                    <p className="Text" id="BoldTxt">City:</p>
                                    <p>Limassol</p>
                                </div>
                                <div className="Area" id="TxtContainer">
                                    <p className="Text" id="BoldTxt">Area:</p>
                                    <p>Germasogeia</p>
                                </div>
                                <div className="Developer" id="TxtContainer">
                                    <p className="Text" id="BoldTxt">Developer:</p>
                                    <p>Lamani Development</p>
                                </div>
                                <div className="Floors" id="TxtContainer">
                                    <p className="Text" id="BoldTxt">Floors:</p>
                                    <p>3</p>
                                </div>
                                <div className="NumberOfApartments" id="TxtContainer">
                                    <p className="Text" id="BoldTxt">NumberOfApartments:</p>
                                    <p>8</p>
                                </div>
                                <div className="NumberOfBedrooms" id="TxtContainer">
                                    <p className="Text" id="BoldTxt">NumberOfBedrooms:</p>
                                    <p>from 2 to 3</p>
                                </div>
                                <div className="EnergyEfficiency" id="TxtContainer">
                                    <p className="Text" id="BoldTxt">EnergyEfficiency:</p>
                                    <p>A+</p>
                                </div>
                            </div>
                            <div className="ThirdFrameLayoutRightPartBtn">
                                <button className="ThirdFrameLayoutRightPartButton">details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdFrame;