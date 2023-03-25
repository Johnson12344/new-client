import { useContext } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";
import exclam from "../assets/exclaim.png"


function Review() {
  const regex = /\d(?=\d{4})/g;
// const result = "1234567890".replace(regex, "*");
  // const regex = /\d(?=\d{0,3}(\d{4})?$)/g
  const {formInfo} = useContext(UserContext)
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/verify")
  }
    return ( 
        <Container className="con rev-con">
            <p className="all-head">Review and Submit</p>

            <div className="funds-note">
              <img src={exclam} alt="" />
              <p>Please be very careful when entering the routing number and account number of your Transfer-To-account. Once funds are transferred to the Transfer-To account, you will not be able to have the funds returned to you if the routing nunber or account number is not correct.</p>
            </div>
      {formInfo.map((info)=>{
      
       return <div className="rev-p" key={info.toString()}>
          <p className="rev-bold">Account Type</p>
      <p className="rev-b">Checking</p>
      <p className="rev-bold">Account Number</p>
      <p className="rev-b">{info.acctNum?.replace(regex, '*')}</p>
      <p className="rev-bold">Routing Number</p>
      <p className="rev-b">{info.routingNum}</p>
      <p className="rev-bold">Primary Account</p>
      <p className="rev-b">Yes</p> </div>
       
      })}
       
       <div className="trans-btn"> <Button className="mx-3 btn-all btn-cont" onClick={handleClick}>Continue</Button> 
      <Button className="btn-all btn-can">Cancel</Button>
      <Button className="btn-all btn-can">Back</Button> </div>
       

        

        </Container>
     );
}

export default Review;