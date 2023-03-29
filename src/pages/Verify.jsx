import axios from "axios";
import { useContext, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";

function Verify() {
    const {userInfo, getOTP} = useContext(UserContext)
    const {email} = userInfo
    const regex = /^([^@])(.*?)([a-zA-Z])?@/g;
   const maskedEmail = email?.replace(regex, "$1*$3@");
// const redactedEmail = email?.replace(/(?<=.).*?(?=@)/, match => '*'.repeat(match.length)); //const regex = /^([^@])(.*?)([a-zA-Z])?@/g;
//const email = "john.doe@example.com";
//const maskedEmail = email.replace(regex, (match, p1, p2, p3) => {
  //const numAsterisks = p2.length - 1;
 // return p1 + "*".repeat(numAsterisks) + p3 + "@";
//});

    const navigate = useNavigate()
    const handleClick = async()=>{
        await getOTP();
        navigate("/passcode");
    }



    return ( 
        <Container className="con verify-con">
            <p className="all-head">Additional Verification Required</p>
            <p className="ver-p">For added security, we need to send you a one-time passcode</p>
            <p className="ver-p">Your one-time password will be sent to {maskedEmail}</p>
        <div className="trans-btn"><Button onClick={handleClick} className="btn-all btn-cont">Send My Code</Button>
            <Button className="btn-all btn-can">Cancel</Button></div>
            
        </Container>
     );
}

export default Verify;
