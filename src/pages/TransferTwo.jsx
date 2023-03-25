import { useState } from "react";
import { useContext } from "react";
import { Button, Card, Container, Form, Table, Alert } from "react-bootstrap";
import { FaCheckCircle, FaQuestionCircle, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context";
import exclam from "../assets/exclaim.png"


function TransferTwo() {
  const location = useLocation()
  const regex = /\d(?=\d{4})/g;
  console.log(location);
  const {userInfo, transferForm, formInfo} = useContext(UserContext)
  const navigate = useNavigate()
  const [amt, setAmt] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault();
    transferForm[0] = amt;
    navigate("/transfer-review")
  }
    return ( 
        <Container className="con">
            <p className="all-head">Transfers</p>
       {location.search === "?transfer=success"? <Alert variant="success" className="alert-s">
            <FaCheckCircle />  You have successfully submitted your funds transfer request and it is being processed<FaTimes />
        </Alert>: <Alert variant="success" className="alert-s">
            <FaCheckCircle />  Your Transfer-To Account has been added. <FaTimes />
        </Alert> }     
          <Card border="dark" className="t-card">
        <Card.Body className="t-bo">
          <img src={exclam} alt=""/>
          <Card.Text>
            PLEASE NOTE: Funds transferred could take up to 3-5 days to be available in your checking or savings account. If your account is a Bank of America account the funds could be available in the next business day, if not sooner. Once you click on Transfer the funds, the fund transfer cannot be cancelled.
          </Card.Text>
        </Card.Body>
      </Card>  
      <p className="by-tra">By transferring funds from your account, you agree to the terms and conditions and provide your electronic consent</p> 

<div className="sec-level1">
<div className="one-time t-t">
        <p>One-Time Transfer</p>
        <p className="avail-b">Available Balance: $ {userInfo.balance.toLocaleString("en-US")}</p>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="my-label">Amount <span className="star">*</span></Form.Label>
        <Form.Control type="number" onChange={(e)=>{setAmt(e.target.value)}} className="my-input"/>
        <Form.Text className="text-muted mute-t">
          Between $0.01 and $5,000.00
        </Form.Text>

      </Form.Group>

      <fieldset disabled>
            <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect" className="my-label flex">Transfer To  <span className="quest"><FaQuestionCircle /></span></Form.Label>
          <Form.Select id="disabledSelect" className="my-input">
            <option>Checking - {location.search === "?transfer=success" && formInfo[0]?.acctNum.replace(regex, '*')}</option>
          </Form.Select>
        </Form.Group>
        </fieldset>
         <div className="trans-btn2">
          <Button type="submit" className="btn-tr">Transfer</Button> 
         </div>
       
        <p className="fee">Fees may apply. See <Link>Fee information</Link> for more details</p>
        </Form>
        </div> 

        <div className="recur t-iv">
        <p className="t-rec">Recurring Transfer</p>
        <p className="u-set">You can set up a recurring transfer that occurs after each deposit. There is no charge for a recurring transfer. <Link to="/addtransfer">Set Up Recurring Transfer</Link></p>
        </div> 
        <div className="one-time t-iv"><p className="t-rec">Transfer-To Accounts</p>
        <p className="t-rec t-bold">Transfer-To accounts allowed: 1</p>
        <p className="t-norm"> <Link>Add Transfer-To Account</Link></p></div>
  

    <div className="trans-tab">
      <div className="tab my-tab">
        <p>Account <br /> Type</p>
        <p>Account <br /> Number</p>
        <p>Routing <br /> Number</p>
        <p>Primary</p>
      </div>

      <div className="tab2">
        <p>Checking</p>
        <p>{formInfo[0]?.acctNum.replace(regex, '*')}</p>
        <p>{formInfo[0]?.routingNum}</p>
        <p></p>
        <p>Delete</p>
      </div>
    </div>
      <div className="trans-btn p-btn2"><Button>Print</Button></div>
        
</div>



        </Container>
     );
}

export default TransferTwo;