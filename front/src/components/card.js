import React, { useState, useEffect } from 'react';
import '../App.css';

const CardExample = (props) => {

    const payUsingPaytm = () => {
        // Form data is sent to our backend
        // and generation of  checksumhash starts using merchant key which is present in backend's config folder
        document.getElementById(`user-submit${orderID}`).click();
    }

    // Order ID can be generated randomly or accordingly
    const [orderID, setOrderID] = useState(null);
    const [custID] = useState("prakash123");

    useEffect(() => {
        // Generating orderId to provide to payment gateway
        let order = Math.floor(100000000 + Math.random() * 900000000);
        setOrderID(order.toString());

    }, [orderID])


    return (
        <div className="card">
            <div className="card-img-container"><img className="card-img" alt="item" src="hp-original-imafpfs893zu5mhb.jpeg" /></div>
            <div className="card-title">{props.title}</div>
            <div className="card-details">{props.details}</div>
            <div className="card-amount">₹ {props.amount}</div>
            {/* <Checkout
                name={props.title}
                description={props.details}
                amount={props.amount}
            /> */}

            <form id={custID} method="post" action="http://localhost:3000/testtxn">

                {/* Only providing amount, custId, orderId from front-end */}

                <input id="ORDER_ID" tabindex="1" maxlength="20" size="20"
                    name="ORDER_ID" autocomplete="off"
                    type="hidden"
                    value={orderID} />

                <input id="CUST_ID" type="hidden" tabindex="2" maxlength="12" size="12" name="CUST_ID" autocomplete="off" value={custID} />

                {/* Commented some inputs below as providing these in backend */}

                {/* <input type="hidden" id="INDUSTRY_TYPE_ID" tabindex="4" maxlength="12" size="12" name="INDUSTRY_TYPE_ID" autocomplete="off" value='Retail' /> */}

                {/* <input id="CHANNEL_ID" tabindex="4" maxlength="12"
                    size="12" type="hidden" name="CHANNEL_ID" autocomplete="off" value='WEB' /> */}

                <input title="TXN_AMOUNT" tabindex="10"
                    type="hidden" name="TXN_AMOUNT"
                    value={props.amount} />
                {/* 
                <input title="MID" tabindex="10"
                    type="hidden" name="MID"
                    value='QFiUFh71610614906840' /> */}


                {/* <input title="WEBSITE" tabindex="10"
                    type="hidden" name="WEBSITE"
                    value='WEBSTAGING' /> */}


                {/* <input title="WEBSITE" tabindex="10"
                    type="hidden" name="PAYTM_MERCHANT_KEY"
                    value='nXUSA1P0i_NVZG5i'
                /> */}

                <input style={{ display: "none" }} value="CheckOut" type="submit" id={`user-submit${orderID}`} />

            </form>

            <button onClick={payUsingPaytm}>Pay</button>
        </div>
    )
}

export default CardExample;