import { useContext } from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";

function Passcode() {
    const {otp} = useContext(UserContext)
    const [code, setCode] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(code == otp){
            navigate("/transfertwo")
        }else{
         alert("incorrect passcode")
        }

    }
    console.log(code);
    return ( 
        <Container className="con">
            <p className="all-head">Enter Passcode</p>

            <Form onSubmit={handleSubmit} className="pas-form">
            <p className="text-end"><span className="star">*</span> Required fields</p>
            <p className="ver-p">Do not close this window. Your code will expire in 5 minutes</p>

            <Form.Group className="mb-4 pas-gr" controlId="formBasicPassword">
        <Form.Label className="my-label">Passcode *</Form.Label>
        <Form.Control type="password" onChange={(e)=>{setCode(e.target.value)}} className="pas-input"/>
      </Form.Group>

      <div className="trans-btn pass-bt"><Button type="submit" className="btn-all btn-cont">Continue</Button>
      <Button className="btn-all btn-can">Cancel</Button>
      <Button className="btn-all btn-can">Request New Code</Button> </div>
        
            </Form>
        </Container>
     );
}

export default Passcode;