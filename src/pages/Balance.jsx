import { useContext } from "react";
import { Container, Dropdown, DropdownButton, Table } from "react-bootstrap";
import { FaCaretDown, FaPlay, FaQuestionCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import appStore from "../assets/asset/asset 3.svg"
import googlePlay from "../assets/asset/asset 4.svg"
import { UserContext } from "../context";


function Balance() {
    const {userInfo} = useContext(UserContext)
    const bal = userInfo.balance.toLocaleString("en-US");

    return ( 
        <Container className="con" fluid>
         <div className="note-bal">
            <p >Click <Link className="here">here</Link> to setup alerts including fraud alerts</p>
            <p>Please Note: Bank of America has temporarily suspended mobile wallet, you will receive an error message. This suspension does not impact any other card functionality</p>
        </div> 

        <div className="b-t">
            Balance & Transactions
            </div>  

            <div className="app">
                <p className="there">There's an app for this</p>
                <p className="down">Download the BofA Prepaid mobile app</p>
                <div className="store">
                <img src={appStore} alt="" className="img-one"/> 
                <img src={googlePlay} alt="" /> 
                </div>   
                </div>
<div className="sec-level">
<p className="timo">Balance for <span>TIMOTHY A ROBERTS</span> </p>
                <p className="avail">Available Balance <span className="quest"><FaQuestionCircle /></span></p>
                <p className="bal-amt">$ {bal}</p>
                <p className="act-bal">Actual Balance</p>
                <p className="sec-amt">$ {bal}</p>

                <p className="t-tion">Transactions</p>
        <div className="date">Date-Newest to oldest <FaCaretDown /></div>        
</div>
              
        

        <div className="my-table">
            <div className="tab-one">
                <div className="row-one"><p className="play"><FaPlay /></p>
               <p>BANK OF <br /> AMERICA ADJ<br /> O3/04/2023</p></div>  

               <div className="row-two">
                <p className="text-end">$ 3,000.00</p>
               <p>Adjustment Credit</p></div>  
            </div>

            <div className="tab-one">
                <div className="row-one"><p className="play"><FaPlay /></p>
               <p>BANK OF <br /> AMERICA ADJ<br /> O3/04/2023</p></div>  

               <div className="row-two">
                <p className="text-end">$ 5,000.00</p>
               <p>Adjustment Credit</p></div>  
            </div>


            <div className="tab-one">
                <div className="row-one"><p className="play"><FaPlay /></p>
               <p>BANK OF <br /> AMERICA ADJ<br /> O3/04/2023</p></div>  

               <div className="row-two">
                <p className="text-end">$ 5,000.00</p>
               <p>Adjustment Credit</p></div>  
            </div>

            <div className="tab-one">
                <div className="row-one"><p className="play"><FaPlay /></p>
               <p>BANK OF <br /> AMERICA ADJ<br /> O3/04/2023</p></div>  

               <div className="row-two">
                <p className="text-end">$ 1,950.00</p>
               <p>Adjustment Credit</p></div>  
            </div>

            <div className="tab-one">
                <div className="row-one"><p className="play"><FaPlay /></p>
               <p>STATE OF CA EDD <br /> UMEMPLOYM<br /> O8/09/2022</p></div>  

               <div className="row-two">
                <p className="text-end">$ 1,950.00</p>
               <p className="text-end">Direct Deposit Funds Transfer <br />to checking/savings</p></div>  
            </div>
        </div>
       
       
                
        </Container>
       
        
     );
}

export default Balance;