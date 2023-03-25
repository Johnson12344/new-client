import { useContext } from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";

function AddTransfer() {
  const [inputs, setInputs] = useState({})
  const { formInfo } = useContext(UserContext)
  const navigate = useNavigate()
  const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setInputs(values=>({...values, [name]: value}))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    formInfo[0]= inputs;
    navigate("/review")
  }

    return ( 
        <Container className="con">
            <p className="all-head">Add Transfer-To Account</p>
            <p className="text-end req"><span className="star">*</span> Required fields</p>
            <Form onSubmit={handleSubmit} className="trans-form">
            <fieldset disabled>
            <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect" className="my-label">Acount Type <span className="star">*</span></Form.Label>
          <Form.Select id="disabledSelect" className="my-input">
            <option>Checking</option>
          </Form.Select>
        </Form.Group>
        </fieldset>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="my-label">Account Number <span className="star">*</span></Form.Label>
        <Form.Control type="number" name="acctNum" onChange={handleChange}  className="my-input"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="my-label">Re-Enter <span className="star">*</span></Form.Label>
        <Form.Control type="number" name="confirmAcct" onChange={handleChange} className="my-input"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="my-label">Routing Number <span className="star">*</span></Form.Label>
        <Form.Control type="number" name="routingNum" onChange={handleChange} className="my-input"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="my-label">Re-Enter <span className="star">*</span></Form.Label>
        <Form.Control type="number" name="confirmRouting" onChange={handleChange} className="my-input"/>
      </Form.Group>

      <div className ="control-group push">
    <div className="control control-checkbox">
      Make this my primary account.
            <input type="checkbox" checked="checked" />
        <div className="control_indicator"></div>
    </div>
    </div>

      <div className="trans-btn"><Button variant="primary" className="mx-3 btn-cont btn-all" type="submit" size="lg">
        Continue
      </Button>
      <Button variant="dark" size="lg" className="btn-can btn-all">Cancel</Button></div>
      
            </Form>

        </Container>
     );
}

export default AddTransfer;