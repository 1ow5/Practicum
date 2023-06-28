import "../LastFrame/LastFrame.scss";

const LastFrame = () =>{
    return(
        <div className = "LastFrameWrapper">
            <div className = "LastFrameContainer">
                <div className = "LastFrameContent">
                    <div className = "LastFrameContactText">
                        <p className = "ContactText">contact us</p>
                    </div>
                    <div className = "LastFrameTextBoxes">
                        <div className = "LastFrameTextBoxesUp">
                            <div className="FirstTextBox">
                                <input type = "text" id = "UpBox" className = "FirstBox" placeholder = "Your name *"/>
                            </div>
                            <div className="SecondTextBox">
                                <input type = "text" id = "UpBox" className = "SecondBox" placeholder = "Your phone number *"/>
                            </div>
                            <div className="ThirdTextBox">
                                <input type = "text" id = "UpBox" className = "ThirdBox" placeholder = "E-mail"/>
                            </div>
                        </div>
                        <div className = "LastFrameTextBoxesDown">
                            <input type = "text" id = "LastboxId" className = "LastBox" placeholder = "Message"/>
                        </div>
                    </div>
                    <div className = "LastFrameCheckBoxBtn">
                        <div className="LastFrameCheckBox">
                            <input type="checkbox" id="CheckBoxId" className="CheckBox"/>
                            <p className="CheckBoxText">I consent to the processing of my personal data</p>
                        </div>
                        <div className="LastFrameBtn">
                            <button className="Btn" ><p className="BtnText">send</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LastFrame;