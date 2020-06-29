'use strict';

var MID = 'QFiUFh71610614906840';
var PAYTM_ENVIORMENT = 'TEST';   // PROD FOR PRODUCTION
var PAYTM_MERCHANT_KEY = 'nXUSA1P0i_NVZG5i';
var WEBSITE = 'WEBSTAGING';
var CHANNEL_ID = 'WEB';
var INDUSTRY_TYPE_ID = 'Retail';
var PAYTM_FINAL_URL = '';
if (PAYTM_ENVIORMENT == 'TEST') {
  PAYTM_FINAL_URL = 'https://securegw-stage.paytm.in/theia/processTransaction';
} else {
  PAYTM_FINAL_URL = 'https://securegw.paytm.in/theia/processTransaction';
}


module.exports = {

  MID: MID,
  PAYTM_MERCHANT_KEY: PAYTM_MERCHANT_KEY,
  PAYTM_FINAL_URL: PAYTM_FINAL_URL,
  WEBSITE: WEBSITE,
  CHANNEL_ID: CHANNEL_ID,
  INDUSTRY_TYPE_ID: INDUSTRY_TYPE_ID

};
