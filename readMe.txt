-----Documentation for Paytm Integration-----

_______________________________________________________________________________________________________________________________

=>ABOUT HOW PAYTM PAYMENT WORKS

1-> The payment process starts at the click of pay button on merchant order summary page. On this click, you need to:

2-> Create an order in your order system and then generate checksumhash at your server end for payment request.
    Checksumhash is used for detecting errors or tampering introduced during its transmission of request. 
    Checksum is generated using merchant Key which should be kept only on server side for security reasons

3-> Post the payload and checksumhash in an HTML form POST on Paytm's server.
    This redirects the customer to Paytm's payment page

4-> Customer fills payment details and completes the payment authentication.
    Once the payment is complete, response is posted in HTML form POST on your website's callback URL

5-> Verify checksumhash received in response to ensure that it has not been tampered
    Lastly, verify transaction status with Transaction Status API via server to server call.
    This protects you from scenarios where your account credentials are compromised or request/response has been tampered.

______________________________________________________________________________________________________________________________

=>ABOUT PROJECT:

It consists of 
1.Front-End (Based on react)
2.Back-End (Based on node.js(Express + ejs))

1-> Front-end

    ->It consists of two routes
      1.'/' For Order
      2.'/payment' for final payment result

      1-> '/'
           Here we provide, orderId, custID, and Amount of item
           and send it to the backend to process further
      2-> '/payment'
           Here the final status and orderId is provided to our front-end through URL.

2-> Back-end
    ->It consists of some api routes
        1. POST '/testtxn'
        2. POST '/response'
