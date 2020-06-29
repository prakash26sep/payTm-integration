var checksum = require('../../model/checksum');
var config = require('../../config/config');

module.exports = function (app) {


    app.post('/testtxn', function (req, res) {
        console.log("POST Order start");

        // Has fields custId, orderId, itemAmount
        var paramlist = req.body;

        //paramarray for storing all attributes 
        var paramarray = new Array();

        for (name in paramlist) {

            paramarray[name] = paramlist[name];
        }

        //For getting all configuration keys stored in backend
        var PAYTM_MERCHANT_KEY = config.PAYTM_MERCHANT_KEY;

        paramarray['MID'] = config.MID;
        paramarray['WEBSITE'] = config.WEBSITE;
        paramarray['CHANNEL_ID'] = config.CHANNEL_ID;
        paramarray['INDUSTRY_TYPE_ID'] = config.INDUSTRY_TYPE_ID;

        paramarray['CALLBACK_URL'] = 'http://localhost:3000/response';  // in case if you want to send callback


        checksum.genchecksum(paramarray, PAYTM_MERCHANT_KEY, function (err, result) {

            res.render('pgredirect.ejs', { 'restdata': result });

        });

    });
};
