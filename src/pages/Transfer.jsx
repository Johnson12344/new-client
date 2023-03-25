import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import exclam from "../assets/exclaim.png"


function Transfer() {
    return ( 
        <Container className="con">
            <p className="all-head">Transfers</p>
            <div className="funds-note">
              <img src={exclam} alt="" />
              <p>PLEASE NOTE: Funds transferred could take up to 3-5 days to be available in your checking or savings account. If your account is a Bank of America account the funds could be available in the next business day, if not sooner. Once you click on Transfer the funds, the fund transfer cannot be cancelled.</p>
            </div>
          
      <p className="by">By transferring funds from your account, you agree to the terms and conditions and provide your electronic consent</p> 
      
      <div className="time-con"><div className="one-time add">
        <p>One-Time Transfer</p>
        <p>In order to transfer funds, you need to add either a checking or savings account. <Link to="/addtransfer">Add Transfer-To Account</Link></p>
        </div> 

        <div className="recur add">
        <p>Recurring Transfer</p>
        <p>In order to set up a recurring transfer, you need to add either a checking or savings account. <Link to="/addtransfer">Add Transfer-To Account</Link></p>
        </div> 

        <p className="add trans-to">Transfer-To Accounts</p>
        <p className="add acct-all">Transfer-To accounts allowed: 1</p>
        <p className="add"> <Link className="add-to">Add Transfer-To Account</Link></p>
        <div className="btn-con"> <Button className="print">Print</Button></div></div>

      
       

        </Container>
     );
}

export default Transfer;