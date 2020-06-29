import React from 'react';
import '../App.css'

const Payment = (props) => {

    function getSearchParameters() {
        var prmstr = window.location.search.substr(1);
        return prmstr !== null && prmstr !== "" ? transformToAssocArray(prmstr) : {};
    }

    function transformToAssocArray(prmstr) {
        var params = {};
        var prmarr = prmstr.split("&");
        for (var i = 0; i < prmarr.length; i++) {
            var tmparr = prmarr[i].split("=");
            params[tmparr[0]] = tmparr[1];
        }
        return params;
    }

    var params = getSearchParameters();

    console.log(params);

    return (
        <div className="payment">
            {params.status === "TXN_SUCCESS" ? "CONGRATS YOUR ORDER IS PLACED!" : "PAYMENT FAILED, TRY AGAIN"}<br /><br /><br /><br /><br />


            Amount: {params.amount}<br />
            Order ID: {params.orderid}<br />
            Status: {params.status}<br />

        </div>
    )
}

export default Payment;