import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";

function TransferReview() {
  const {userInfo, transferForm} = useContext(UserContext)
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();
    const amount = userInfo.balance - transferForm[0]
    localStorage.setItem("balance", JSON.stringify(amount))
    navigate("/transfertwo?transfer=success")
  }
    return ( 
        <Container className="con tr-con">
            <p className="all-head">Review and Submit</p>
            <Form onSubmit={handleSubmit}>
              
    <p className="text-end"><span className="star">*</span>Required fields</p>
    <p>Once this transfer is submitted, it cannot be cancelled.</p>
      <p>Transfer Amount</p>
      <p>$ {transferForm[0]?.toLocaleString("en-US")}.00</p>
      <p>Fee</p>
      <p>No Fee associated</p>
      <p>Transfer From</p>
      <p>Card ending in 5372</p>
      <p>Transfer To</p>
      <p>Checking</p>


      <div className ="control-group">
      <label className="control control-checkbox">
            <input type="checkbox" />
        <div className="control_indicator"></div>
    </label>
   
</div>
      

      <p>I agree to the terms and conditions and authorize this transfer.<span className="star">*</span></p>
      <p>A receipt of this transaction will be sent to email address in your profile</p> 

      <div className="trans-btn">
      <Button type="submit" size="lg" className="mx-3 btn-cont btn-all">Continue</Button> 
      <Button size="lg" className="btn-all btn-can">Cancel</Button>  
      </div>
      
      
      </Form> 

        </Container>
     );
}

export default TransferReview;